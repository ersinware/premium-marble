<script>
	import { browser } from "$app/environment";
	import {
		addIntersectionObserver,
		getLinkForResponsiveImage,
		getMediaQueryForResponsiveImage,
		getMediaQueryForResponsiveImageForDarkMode,
		removeIntersectionObserver,
	} from "$lib/js/client/util.responsive.client";
	import {
		COMMAND_LAZY_IMAGE_LOAD,
		MODE_LAZY_IMAGE_MANUAL,
		MODE_LAZY_IMAGE_WHEN_VISIBLE,
	} from "$lib/js/common/constants.common.js";
	import { onDestroy, onMount } from "svelte";
	import { scale } from "svelte/transition";

	export let id,
		mode,
		style,
		classes,
		alt,
		imageName,
		updatedAt,
		onceRatio = true,
		mediaData,
		command,
		noTransition = true,
		noLoadingAnimation,
		loadingLevel = 1,
		forDarkMode;

	let img, src, observer, loading, loaded, offlineHandled;

	const mqListeners = [];

	$: onCommand(command);

	onMount(_onMount);

	if (browser) onDestroy(_onDestroy);

	function onCommand() {
		if (!command) return;

		if (command === COMMAND_LAZY_IMAGE_LOAD) {
			onIntersect();
			if (observer) removeIntersectionObserver(observer);
			command = "";
		}
	}

	function _onMount() {
		if (mode === MODE_LAZY_IMAGE_WHEN_VISIBLE) observer = addIntersectionObserver(img, onIntersect);
	}

	function _onDestroy() {
		if (observer) removeIntersectionObserver(observer);
	}

	async function onIntersect() {
		if (loaded || loading) return;

		for (const media of mediaData) {
			const mql = window.matchMedia(getMediaQuery(media)),
				controller = new AbortController(),
				{ signal } = controller;

			mqListeners.push(controller);

			if (mql.matches) await load(getLinkForResponsiveImage(imageName, media, updatedAt, onceRatio));

			mql.addEventListener(
				"change",
				async (mql) => {
					if (mql.matches) await load(getLinkForResponsiveImage(imageName, media, updatedAt, onceRatio));
				},
				{ signal },
			);
		}
	}

	async function load(_src) {
		loading = true;

		const response = await fetch(_src),
			blob = await response.blob();

		if (response.status === 200) {
			offlineHandled = false;
			onLoad(blob);

			return true;
		}

		if (!offlineHandled && mode === MODE_LAZY_IMAGE_MANUAL) {
			offlineHandled = true;
			removeAllMQListeners();
			observer = addIntersectionObserver(img, onIntersect, 0.5);
		}
	}

	async function onLoad(blob) {
		loaded = true;
		loading = false;

		src = URL.createObjectURL(blob);

		removeIntersectionObserver(observer);
		observer = undefined;
	}

	function removeAllMQListeners() {
		for (let i = 0; i < mqListeners.length; i++) mqListeners.pop().abort();
	}

	function getMediaQuery(media) {
		return forDarkMode ? getMediaQueryForResponsiveImageForDarkMode(media) : getMediaQueryForResponsiveImage(media);
	}
</script>

{#if noTransition}
	<img
		id={id ?? ""}
		style={style ?? ""}
		class={classes ?? ""}
		class:loading-1={!noLoadingAnimation && !loaded}
		src={loaded ? src : "/blank.svg"}
		{alt}
		bind:this={img}
	/>
{:else}
	{#key src}
		<img
			id={id ?? ""}
			style={style ?? ""}
			class={classes ?? ""}
			class:loading-1={loadingLevel === 1 && !noLoadingAnimation && !loaded}
			class:loading-2={loadingLevel === 2 && !noLoadingAnimation && !loaded}
			src={loaded ? src : "/blank.svg"}
			{alt}
			in:scale={loaded ? { start: 1.025, opacity: 1, duration: 500 } : { duration: 0 }}
			bind:this={img}
		/>
	{/key}
{/if}

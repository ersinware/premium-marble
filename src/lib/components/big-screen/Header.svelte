<script>
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { LOGO_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getLocalizedLink } from "$lib/js/client/localization/localization.util.client";
	import { getStore, performRippleEffect } from "$lib/js/client/util.client";
	import {
		getLinkForResponsiveImage,
		getMediaQueryForResponsiveImage,
		getMediaQueryForResponsiveImageForDarkMode,
		getMediaQueryForResponsiveImageForNotDarkMode,
	} from "$lib/js/client/util.responsive.client";
	import { onMount } from "svelte";
	import { cubicInOut } from "svelte/easing";
	import { fly } from "svelte/transition";
	import LanguageSwitcher from "./LanguageSwitcher.svelte";

	const lang = getStore("lang"),
		url = getStore("url");

	let show;

	$: linkObjects = [
		{ name: L("homepage", $lang), link: getLocalizedLink("", $lang) },
		{ name: L("products", $lang), link: getLocalizedLink("products", $lang) },
		// { name: L("blog", $lang), link: getLocalizedLink("blog", $lang) },
		{ name: L("about-us", $lang), link: getLocalizedLink("hakkımızda", $lang) },
		{ name: L("contact", $lang), link: getLocalizedLink("iletişim", $lang) },
	];

	onMount(_onMount);

	function _onMount() {
		for (const link of document.body.querySelectorAll("#header a"))
			link.addEventListener("click", (event) => performRippleEffect(event));
	}

	function showLanguageSwitcher() {
		show = true;
	}

	function hideLanguageSwitcher() {
		show = false;
	}
</script>

<svelte:head>
	{#each LOGO_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("premium-mermer-logo-s-dark", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImageForDarkMode(media)}
		/>
	{/each}

	{#each LOGO_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("premium-mermer-logo-s", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImageForNotDarkMode(media)}
		/>
	{/each}
</svelte:head>

<header id="header" class="p-f t-0 w-100 for-big-screen" in:fly={TRANSITION_PAGE}>
	<div id="header-content" class="b-box p-r grid j-c-c a-i-c w-100-minus-padding-h max-w h-100 m-h-auto">
		<a id="header-logo-wrapper" href={getLocalizedLink("", $lang)}>
			<picture class="d-contents">
				{#each LOGO_MEDIA_DATA as media}
					<source
						class="d-contents"
						media={getMediaQueryForResponsiveImageForDarkMode(media)}
						srcset={getLinkForResponsiveImage("premium-mermer-logo-s-dark", media, undefined)}
					/>
				{/each}

				{#each LOGO_MEDIA_DATA as media}
					<source
						class="d-contents"
						media={getMediaQueryForResponsiveImage(media)}
						srcset={getLinkForResponsiveImage("premium-mermer-logo-s", media, undefined)}
					/>
				{/each}

				<img id="header-logo" src="/not-found.svg" alt="Premium Mermer Logo" />
			</picture>
		</a>

		<section class="header-links flex g-2dot5">
			{#each new Array(linkObjects.length / 2) as _, index}
				<a
					href={linkObjects[index].link}
					class="header-link nowrap"
					class:active-header-link={decodeURI($url.pathname) === linkObjects[index].link}
				>
					{linkObjects[index].name}
				</a>
			{/each}

			<a
				href={getLocalizedLink("blog", $lang)}
				class="header-link nowrap"
				class:active-header-link={decodeURI($url.pathname).includes("/blog")}
			>
				{L("blog", $lang)}
			</a>

			{#each new Array(linkObjects.length / 2) as _, index}
				<a
					href={linkObjects[index + linkObjects.length / 2].link}
					class="header-link nowrap"
					class:active-header-link={decodeURI($url.pathname) === linkObjects[index + linkObjects.length / 2].link}
				>
					{linkObjects[index + linkObjects.length / 2].name}
				</a>
			{/each}
		</section>

		{#key $lang}
			<article
				class="languages-container"
				on:mouseenter={showLanguageSwitcher}
				on:mouseleave={hideLanguageSwitcher}
				in:fly={{ x: -8, duration: 600, easing: cubicInOut }}
			>
				<div class="selected-language-container flex a-i-c g-dot75 pointer">
					{#if $lang === "tr"}
						<svg
							class="language-icon"
							viewBox="0 0 64 64"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid meet"
						>
							<circle cx="32" cy="32" r="32" fill="red" />
							<g fill="#ffffff">
								<path d="M41.3 39l.1-5.4L36 32l5.4-1.6l-.1-5.4l3.3 4.3l5.4-1.6l-3.3 4.3l3.3 4.3l-5.4-1.6z" />
								<path
									d="M33.2 44c-6.6 0-11.9-5.4-11.9-12s5.3-12 11.9-12c2.5 0 4.8.8 6.8 2.1C37.3 19 33.3 17 28.8 17C20.6 17 14 23.7 14 32s6.6 15 14.8 15c4.5 0 8.5-2 11.2-5.1c-1.9 1.3-4.2 2.1-6.8 2.1"
								/>
							</g>
						</svg>
					{:else}
						<svg class="language-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<mask id="header-en-icon">
								<circle cx="256" cy="256" r="256" fill="#fff" />
							</mask>
							<g mask="url(#header-en-icon)">
								<path
									fill="#eee"
									d="M256 0h256v64l-32 32l32 32v64l-32 32l32 32v64l-32 32l32 32v64l-256 32L0 448v-64l32-32l-32-32v-64z"
								/>
								<path fill="#d80027" d="M224 64h288v64H224Zm0 128h288v64H256ZM0 320h512v64H0Zm0 128h512v64H0Z" />
								<path fill="#0052b4" d="M0 0h256v256H0Z" />
								<path
									fill="#eee"
									d="m187 243l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67zm162-81l57-41h-70l57 41l-22-67zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Zm162-82l57-41h-70l57 41l-22-67Zm-81 0l57-41H93l57 41l-22-67zm-81 0l57-41H12l57 41l-22-67Z"
								/>
							</g>
						</svg>
					{/if}

					<div class="language-name">{L("lang", $lang)}</div>
				</div>

				{#if show}
					<LanguageSwitcher />
				{/if}
			</article>
		{/key}
	</div>
</header>

<svelte:window on:EVENT_CLOSE_LANGUAGE_SWITCHER={hideLanguageSwitcher} />

<style>
	@media (min-width: 65.001em) {
		#header {
			z-index: 999;

			height: var(--header-height);
			background-color: var(--header-background-color);

			backdrop-filter: blur(1rem);
		}

		#header-content {
			grid-template-columns: 1fr 0fr 1fr;

			border-bottom: var(--divider-color) 0.5px solid;
		}

		#header-logo-wrapper {
			width: max-content;
		}

		#header-logo {
			border: none;
			max-height: calc(var(--header-height) * 0.4);
		}

		.languages-container {
			margin-left: auto;
		}

		.header-link {
			font-size: 0.8rem;
		}

		.active-header-link {
			color: var(--accent-color);
		}

		@media (hover: hover) {
			.header-link {
				transition: color 0.25s ease-in-out;
			}

			.header-link:hover {
				color: var(--accent-color);
			}
		}
	}
</style>

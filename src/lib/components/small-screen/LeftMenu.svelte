<script>
	import { goto } from "$app/navigation";
	import { LEFT_MENU_TRANSITION_DURATION } from "$lib/js/client/constants.client";
	import { BIG_LOGO_MEDIA_DATA, LEFT_MENU_LOGO_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getLocalizedLink } from "$lib/js/client/localization/localization.util.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { closeLastLeftMenu } from "$lib/js/client/util.left.menus.client";
	import { getLinkForResponsiveImage, getMediaQueryForResponsiveImage, getMediaQueryForResponsiveImageForDarkMode } from "$lib/js/client/util.responsive.client";
	import { waitFor } from "$lib/js/common/util.common";
	import { onMount } from "svelte";

	const lang = getStore("lang"),
		url = getStore("url");

	$: localizedLinks = [
		getLocalizedLink("", $lang),
		getLocalizedLink("products", $lang),
		getLocalizedLink("blog", $lang),
		getLocalizedLink("hakkımızda", $lang),
		getLocalizedLink("iletişim", $lang),
	];

	onMount(_onMount);

	function _onMount() {
		for (const link of document.body.querySelectorAll("#left-menu a"))
			link.addEventListener("click", async (event) => {
				event.preventDefault();

				const href = event.currentTarget.href;
				await performRippleEffectAndWait(event);

				closeLastLeftMenu();
				await waitFor(LEFT_MENU_TRANSITION_DURATION);

				goto(href);
			});
	}

	async function onTRClick(event) {
		await performRippleEffectAndWait(event);
		$lang = "tr";
	}

	async function onENClick(event) {
		await performRippleEffectAndWait(event);
		$lang = "en";
	}
</script>

<article id="left-menu" class="p-r flex f-column g-v-d">
	<picture class="d-contents">
		{#each LEFT_MENU_LOGO_MEDIA_DATA as media}
			<source
				class="d-contents"
				media={getMediaQueryForResponsiveImageForDarkMode(media)}
				srcset={getLinkForResponsiveImage("premium-mermer-logo-left-menu-dark", media, undefined)}
			/>
		{/each}

		{#each LEFT_MENU_LOGO_MEDIA_DATA as media}
			<source
				class="d-contents"
				media={getMediaQueryForResponsiveImage(media)}
				srcset={getLinkForResponsiveImage("premium-mermer-logo-left-menu", media, undefined)}
			/>
		{/each}

		<img id="left-menu-logo" src="/not-found.svg" alt={L('app-name-logo', $lang)} />
	</picture>

	<section class="menu-items flex f-column g-v-d">
		<div class="t-hint unimportant-text-color">{L("pages", $lang)}</div>

		<a
			href={localizedLinks[0]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[0]}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
				><path
					d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
				/></svg
			>

			<div class="menu-text">{L("homepage", $lang)}</div>
		</a>

		<a
			href={localizedLinks[1]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[1]}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
				><path
					d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"
				/></svg
			>

			<div class="menu-text">{L("products", $lang)}</div>
		</a>

		<a
			href={localizedLinks[2]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname).includes("/blog")}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"
				/></svg
			>

			<div class="menu-text">{L("blog", $lang)}</div>
		</a>

		<a
			href={localizedLinks[3]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[3]}
		>
			<svg
				class="menu-icon"
				style:margin-left="-1px"
				style:padding-right="1px"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				><path
					d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
				/></svg
			>

			<div class="menu-text">{L("about-us", $lang)}</div>
		</a>

		<a
			href={localizedLinks[4]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[4]}
		>
			<svg class=" menu-icon" style:margin-top="-1px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
				><path
					d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
				/></svg
			>

			<div class="menu-text">{L("contact", $lang)}</div>
		</a>

		<div class="t-hint unimportant-text-color">{L("language", $lang)}</div>

		<button
			href="özgeçmişim"
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={$lang === "tr"}
			on:click={onTRClick}
		>
			<svg
				class="menu-icon"
				style:overflow="visible"
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

			<div class="menu-text lang-menu-text">{L("turkish", $lang)}</div>
		</button>

		<button
			href="özgeçmişim"
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={$lang === "en"}
			on:click={onENClick}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<mask id="left-menu-language-switcher-en-icon">
					<circle cx="256" cy="256" r="256" fill="#fff" />
				</mask>
				<g mask="url(#left-menu-language-switcher-en-icon)">
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

			<div class="menu-text lang-menu-text">{L("english", $lang)}</div>
		</button>
	</section>
</article>

<style>
	#left-menu-logo {
		max-width: 15rem;
		margin-top: -1.5rem;
		margin-bottom: -1.25rem;

		aspect-ratio: 210/114;
	}

	.menu-icon {
		width: 1.75rem;
		height: 1.75rem;
		fill: var(--accent-color);
	}

	.menu-text {
		font-size: 0.8rem;
	}

	.lang-menu-text {
		transition: color 0.25s ease-in-out;
	}

	.active-menu-item .menu-text {
		color: var(--accent-color);
	}

	.t-hint {
		margin-top: var(--main-v-padding);
	}

	@media (hover: hover) {
		.menu-text {
			transition: color 0.25s ease-in-out;
		}

		.menu-item:hover .menu-text {
			color: var(--accent-color);
		}
	}
</style>

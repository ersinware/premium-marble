<script>
	import { goto } from "$app/navigation";
	import { LEFT_MENU_TRANSITION_DURATION } from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getLocalizedLink } from "$lib/js/client/localization/localization.util.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { closeLastLeftMenu } from "$lib/js/client/util.left.menus.client";
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
	<div id="left-menu-logo" class="third-background-color b-r-d" />

	<section class="menu-items flex f-column g-v-d">
		<div class="t-hint unimportant-text-color">{L("pages", $lang)}</div>

		<a
			href={localizedLinks[0]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[0]}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
				<path
					d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"
				/>
			</svg>

			<div class="menu-text">{L("homepage", $lang)}</div>
		</a>

		<a
			href={localizedLinks[1]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[1]}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.916 43.916">
				<path
					d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"
				/>
			</svg>

			<div class="menu-text">{L("products", $lang)}</div>
		</a>

		<a
			href={localizedLinks[2]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname).includes('/blog')}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.916 43.916">
				<path
					d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"
				/>
			</svg>

			<div class="menu-text">{L("blog", $lang)}</div>
		</a>

		<a
			href={localizedLinks[3]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[3]}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.916 43.916">
				<path
					d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"
				/>
			</svg>

			<div class="menu-text">{L("about-us", $lang)}</div>
		</a>

		<a
			href={localizedLinks[4]}
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={decodeURI($url.pathname) === localizedLinks[4]}
		>
			<svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.916 43.916">
				<path
					d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5 C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304 c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709 c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855 L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416 h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"
				/>
			</svg>

			<div class="menu-text">{L("contact", $lang)}</div>
		</a>

		<div class="t-hint unimportant-text-color">{L("language", $lang)}</div>

		<button
			href="özgeçmişim"
			class="menu-item flex g-1 a-i-c pointer"
			class:active-menu-item={$lang === "tr"}
			on:click={onTRClick}
		>
			<svg class="menu-icon" style:overflow="visible" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
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
		height: 4rem;
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

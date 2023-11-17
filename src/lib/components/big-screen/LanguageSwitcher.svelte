<script>
	import { EVENT_CLOSE_LANGUAGE_SWITCHER } from "$lib/js/client/constants.events.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { waitFor } from "$lib/js/common/util.common";
	import { cubicInOut } from "svelte/easing";
	import { fly } from "svelte/transition";

	const lang = getStore("lang"),
		DURATION = 400;

	async function changeLanguage(event, newLang) {
		await performRippleEffectAndWait(event);

		window.dispatchEvent(new CustomEvent(EVENT_CLOSE_LANGUAGE_SWITCHER));
		await waitFor(DURATION);

		$lang = newLang;
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	id="language-switcher-wrapper"
	class="p-a r-0 b-r-d"
	transition:fly={{ y: 8, duration: DURATION, easing: cubicInOut }}
>
	<article id="language-switcher" class="flex f-column  g-1dot25 secondary-background-color">
		<article class="language-item-wrapper flex a-i-c g-dot75 pointer" on:click={(event) => changeLanguage(event, "tr")}>
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

			<div class="language-name" class:active-language-name={$lang === "tr"}>
				{L("turkish", $lang)}
			</div>
		</article>

		<article class="language-item-wrapper flex a-i-c g-dot75 pointer" on:click={(event) => changeLanguage(event, "en")}>
			<svg class="language-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				<mask id="header-language-switcher-en-icon">
					<circle cx="256" cy="256" r="256" fill="#fff" />
				</mask>
				<g mask="url(#header-language-switcher-en-icon)">
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
            
			<div class="language-name" class:active-language-name={$lang === "en"}>
				{L("english", $lang)}
			</div>
		</article>
	</article>
</div>

<style>
	#language-switcher-wrapper {
		top: calc((var(--header-height) + var(--line-height)) / 2);
	}

	#language-switcher {
		margin-top: calc((var(--header-height) - var(--line-height)) / 2 - 1px);

		padding-block: calc(var(--main-v-padding) / 1.5);
		padding-left: calc(var(--main-h-padding) / 1.25);
		padding-right: calc(var(--main-h-padding));

		border-bottom-left-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}

	.active-language-name {
		color: var(--accent-color);
	}
</style>

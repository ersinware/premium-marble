<script>
	import { goto } from "$app/navigation";
	import { getLocalizedLink } from "$lib/js/client/localization/localization.util.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { openLeftMenu } from "$lib/js/client/util.left.menus.client";
	import {
		getLinkForResponsiveImage,
		getMediaQueryForResponsiveImage,
		getMediaQueryForResponsiveImageForDarkMode,
		getMediaQueryForResponsiveImageForNotDarkMode,
	} from "$lib/js/client/util.responsive.client.js";
	import { MOBILE_HEADER_LOGO_MEDIA_DATA } from "./../../js/client/constants.media.data.client.js";
	import LeftMenu from "./LeftMenu.svelte";

	const lang = getStore("lang");

	async function onMenuClick(event) {
		await performRippleEffectAndWait(event);

		openLeftMenu({ id: "left-menu", component: LeftMenu });
	}

	async function onLogoClick(event) {
		event.preventDefault();

		const href = event.currentTarget.href;
		await performRippleEffectAndWait(event);

		goto(href);
	}
</script>

<svelte:head>
	{#each MOBILE_HEADER_LOGO_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("premium-mermer-logo-mobile-header-dark", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImageForDarkMode(media)}
		/>
	{/each}

	{#each MOBILE_HEADER_LOGO_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("premium-mermer-logo-mobile-header", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImageForNotDarkMode(media)}
		/>
	{/each}
</svelte:head>

<header id="mobile-header" class="p-f t-0 p-c-h flex j-c-c w-100 for-small-screen">
	<div id="mobile-header-content" class="w-100-minus-padding-h flex f-s-b a-i-c h-100">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<svg
			id="mobile-header-menu-icon"
			class="pointer"
			on:click={onMenuClick}
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4 6H20M4 12H14M4 18H9"
				stroke="var(--mobile-header-menu-icon-color)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		<a href={getLocalizedLink("", $lang)} on:click={onLogoClick}>
			<picture class="d-contents">
				{#each MOBILE_HEADER_LOGO_MEDIA_DATA as media}
					<source
						class="d-contents"
						media={getMediaQueryForResponsiveImageForDarkMode(media)}
						srcset={getLinkForResponsiveImage("premium-mermer-logo-mobile-header-dark", media, undefined)}
					/>
				{/each}

				{#each MOBILE_HEADER_LOGO_MEDIA_DATA as media}
					<source
						class="d-contents"
						media={getMediaQueryForResponsiveImage(media)}
						srcset={getLinkForResponsiveImage("premium-mermer-logo-mobile-header", media, undefined)}
					/>
				{/each}

				<img id="mobile-header-logo" src="/not-found.svg" alt="Premium Mermer Logo" />
			</picture>
		</a>
	</div>
</header>

<style>
	@media (max-width: 65em) {
		#mobile-header {
			height: var(--mobile-header-height);
			background-color: var(--header-background-color);

			backdrop-filter: blur(1rem);
		}

		#mobile-header-content {
			border-bottom: var(--divider-color) 0.5px solid;
		}

		#mobile-header-menu-icon {
			--mobile-header-menu-icon-color: var(--title-color);

			height: 2.5rem;
		}

		#mobile-header-logo {
			border: none;
			max-height: 100%;
			max-width: 10rem;
		}

		@media (hover: hover) {
			#mobile-header-menu-icon {
				transition: all 0.25s ease-in-out;
			}

			.pointer:hover {
				--mobile-header-menu-icon-color: var(--accent-color) !important;
			}
		}
	}
</style>

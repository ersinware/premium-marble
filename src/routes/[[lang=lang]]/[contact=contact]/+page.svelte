<script>
	import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getFullLocalizedURL } from "$lib/js/client/localization/localization.util.client";
	import { getStore, onContactClick } from "$lib/js/client/util.client";
	import { arrLangs } from "$lib/js/common/localization/localization.constants.common";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");
</script>

<svelte:head>
	<title>{L("contact-page-title", $lang)}</title>

    <link rel="preconnect" href="https://www.google.com/maps" />

    <link rel="alternate" hreflang="x-default" href={getFullLocalizedURL('contact', "", PUBLIC_DEFAULT_LANGUAGE)} />
	{#each arrLangs as lang}
		<link rel="alternate" hreflang={lang} href={getFullLocalizedURL('contact', "", lang)} />
	{/each}
</svelte:head>

<section id="contact-wrapper" class="flex w-100 page-max-w small-screen-f-column" in:fly={TRANSITION_PAGE}>
	<div id="contact-items" class="flex f-column">
		<article class="grid g-v-d small-screen-j-i-c">
			<h1 class="section-title">{L("app-name", $lang)}</h1>

			<p id="contact-description-text" class="section-text small-screen-t-a-c">
				{L("contact-description", $lang)}
			</p>

			<button class="nude-button small-button" on:click={onContactClick}>{L("write-to-us", $lang)}</button>
		</article>

		<article class="h-divider" style:margin-block=".75rem" />

		<div class="grid g-v-d small-screen-j-c-c">
			<article class="grid g-1">
				<p class="section-text f-w-500 small-screen-t-a-c">{L("visit-us", $lang)}</p>

				<div class="flex g-1">
					<svg
						style:margin-top=".1rem"
						class="contact-item-content-icon"
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 576 512"
					>
						<path
							d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
						/>
					</svg>

					<address>
						<p class="contact-item-content-text article-text">{L("contact-address-one", $lang)}</p>
						<p class="contact-item-content-text article-text">{L("contact-address-two", $lang)}</p>
						<p class="contact-item-content-text article-text">Silifke, Mersin</p>
					</address>
				</div>
			</article>

			<article class="grid g-1">
				<p class="section-text f-w-500 small-screen-t-a-c">{L("call-us", $lang)}</p>

				<div class="flex g-1">
					<svg
						style:margin-top=".2rem"
						class="contact-item-content-icon"
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 512 512"
					>
						<path
							d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
						/>
					</svg>

					<div>
						<a href="tel:+90 324 503 30 31" class="contact-item-content-text article-text">+90 324 503 30 31</a>
						<a href="tel:+90 544 888 73 23" class="contact-item-content-text article-text">+90 544 888 73 23</a>
					</div>
				</div>
			</article>

			<article class="grid g-1">
				<div class="section-text f-w-500 small-screen-t-a-c">{L("contact-write-to-us", $lang)}</div>

				<div class="flex g-1">
					<svg
						style:margin-top=".1rem"
						class="contact-item-content-icon"
						xmlns="http://www.w3.org/2000/svg"
						height="1em"
						viewBox="0 0 512 512"
					>
						<path
							d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
						/>
					</svg>

					<div>
						<a href="mailto:info@premiummermer.com.tr" target="_blank" class="contact-item-content-text article-text"
							>info@premiummermer.com.tr</a
						>
						<button class="contact-item-contenCt-text article-text link-button" on:click={onContactClick}
							>{L("contact-form", $lang)}
						</button>
					</div>
				</div>
			</article>
		</div>
	</div>

	<article id="contact-page-second-divider" class="h-divider" style:margin-top=".75rem" style:margin-bottom="1rem" />

	<div id="map-wrapper" class="w-h-100">
		<iframe
			id="map"
			class="w-h-100 b-r-d"
			title="Premium Mermer"
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.8596221252765!2d33.903967!3d36.36417899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d8ddc13f913c91%3A0x20df850d81744d6d!2zxZ5pbcWfZWsgTWVybWVyIEZhYnIu!5e0!3m2!1str!2str!4v1700757081306!5m2!1str!2str"
			allowfullscreen=""
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</section>

<style>
	iframe {
		margin: 0;
		padding: 0;
	}

	.contact-item-content-icon {
		height: 1.5rem;

		fill: var(--accent-color);
	}

	#map {
		border: 1px solid var(--divider-color);
	}

	@media (min-width: 65.001em) {
		#contact-wrapper {
			gap: var(--page-g);
		}

		#contact-items {
			gap: var(--main-v-padding);
            max-width: 22.1875rem;
		}

		.section-title {
			margin-top: 0.25rem;
		}

		#contact-page-second-divider {
			display: none;
		}

		#map-wrapper {
			max-width: 37.5rem;
			aspect-ratio: 16/17.75;
		}
	}

	@media (max-width: 65em) {
		#contact-wrapper {
			max-width: min(45rem, 100%);

			gap: var(--main-v-padding);
		}

		#contact-items {
			gap: var(--main-v-padding);
		}

		#contact-description-text {
			max-width: 25rem;
		}

		#map-wrapper {
			aspect-ratio: 16/22;
		}
	}
</style>

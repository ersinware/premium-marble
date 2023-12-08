<script>
	import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";
	import LazyImage from "$lib/components/LazyImage.svelte";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { SMALL_IMAGE_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getFullLocalizedURL } from "$lib/js/client/localization/localization.util.client";
	import { getStore } from "$lib/js/client/util.client";
	import { getLinkForResponsiveImage, getMediaQueryForResponsiveImage } from "$lib/js/client/util.responsive.client";
	import { MODE_LAZY_IMAGE_WHEN_VISIBLE } from "$lib/js/common/constants.common";
	import { arrLangs } from "$lib/js/common/localization/localization.constants.common";
	import { fly } from "svelte/transition";

	const lang = getStore("lang"),
		products = [
			{ name: "dark-night" },
			{ name: "explosion-white" },
			{ name: "rain-green" },
			{ name: "striped-travertine" },
			{ name: "dark-emprador" },
			{ name: "amasya-beige" },
			{ name: "cloud-gray" },
			{ name: "uludag-black" },
			{ name: "venicart-travertine" },
			{ name: "silifke-beige" },
			{ name: "crema-siva" },
			{ name: "crema-taurus" },
			{ name: "cremera-marble" },
		];
</script>

<svelte:head>
	<title>{L("products-page-title", $lang)}</title>

    <meta name="description" content={L("products-meta-description", $lang)}>

    <link rel="alternate" hreflang="x-default" href={getFullLocalizedURL("products", "", PUBLIC_DEFAULT_LANGUAGE)} />
	{#each arrLangs as lang}
		<link rel="alternate" hreflang={lang} href={getFullLocalizedURL("products", "", lang)} />
	{/each}

	{#each new Array(4) as _, index}
		{#each SMALL_IMAGE_MEDIA_DATA as media}
			<link
				rel="preload"
				href={getLinkForResponsiveImage(products[index].name, media, undefined)}
				as="image"
				type="image/webp"
				media={getMediaQueryForResponsiveImage(media)}
			/>
		{/each}
	{/each}
</svelte:head>

<section id="products-section" class="grid page-g w-100 page-max-w-smaller t-a-c" in:fly={TRANSITION_PAGE}>
	<div class="grid g-v-d">
		<h1 class="section-title">{L("products", $lang)}</h1>

		<p class="section-text m-h-auto">
			{L("products-description", $lang)}
		</p>
	</div>

	<div id="products-wrapper" class="grid">
		{#each products as product, index}
			<div class="product-wrapper grid g-1 t-a-c">
				<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
					{#if index < 4}
						<picture class="d-contents">
							{#each SMALL_IMAGE_MEDIA_DATA as media}
								<source
									class="d-contents"
									media={getMediaQueryForResponsiveImage(media)}
									srcset={getLinkForResponsiveImage(product.name, media, undefined)}
								/>
							{/each}

							<img
								class="article-image hoverable-image b-r-d"
								src="/not-found.svg"
								alt={L(product.name, $lang) + " | " + L("app-name", $lang)}
							/>
						</picture>
					{:else}
						<LazyImage
							mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
							classes="article-image hoverable-image b-r-d"
							alt={L(product.name, $lang) + " | " + L("app-name", $lang)}
							imageName={product.name}
							mediaData={SMALL_IMAGE_MEDIA_DATA}
						></LazyImage>
					{/if}
				</div>

				<div class="product-name section-text">{L(product.name, $lang)}</div>
			</div>
		{/each}
	</div>
</section>

<style>
	#products-wrapper {
		--grid-item-min-width: 15rem;
		--grid-layout-gap: var(--main-h-padding);
		--grid-max-column-count: 2;
		--gap-count: calc(var(--grid-max-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item-max-width: calc((100% - var(--total-gap-width)) / var(--grid-max-column-count));

		grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item-min-width), var(--grid-item-max-width)), 1fr));

		gap: var(--grid-layout-gap);
		row-gap: var(--main-v-padding);
	}

	.section-text {
		max-width: 35rem;
	}
</style>

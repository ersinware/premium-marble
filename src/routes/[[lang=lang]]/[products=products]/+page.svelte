<script>
	import LazyImage from "$lib/components/LazyImage.svelte";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { SMALL_IMAGE_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore } from "$lib/js/client/util.client";
	import { getLinkForResponsiveImage, getMediaQueryForResponsiveImage } from "$lib/js/client/util.responsive.client";
	import { MODE_LAZY_IMAGE_WHEN_VISIBLE } from "$lib/js/common/constants.common";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");
</script>

<svelte:head>
	<title>{L("products-page-title", $lang)}</title>

	{#each SMALL_IMAGE_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("dark-night-marble", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImage(media)}
		/>
	{/each}

	{#each SMALL_IMAGE_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("patlatma-beyaz", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImage(media)}
		/>
	{/each}

	{#each SMALL_IMAGE_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("yağmur-yeşili", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImage(media)}
		/>
	{/each}
    
	{#each SMALL_IMAGE_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("şerit-traverten", media, undefined)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImage(media)}
		/>
	{/each}
</svelte:head>

<section id="products-section" class="grid page-g w-100 page-max-w-smaller t-a-c" in:fly={TRANSITION_PAGE}>
	<div class="grid g-v-d">
		<h1 class="section-title">Ürünlerimiz</h1>

		<p class="section-text m-h-auto">
			Doğadan gelen taşın, mermere dönüşümünde hassas işçilik ile üretim yapıyoruz. Yaşamınızın her alanı mermerin eşsiz
			büyüsü ile baştan tasarlıyor, yaratıyoruz. Seçeceğiniz her bir ürün özenle mimari edilir, kalitesi ile göz
			kamaştırır.
		</p>
	</div>

	<div id="products-wrapper" class="grid">
		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<picture class="d-contents">
					{#each SMALL_IMAGE_MEDIA_DATA as media}
						<source
							class="d-contents"
							media={getMediaQueryForResponsiveImage(media)}
							srcset={getLinkForResponsiveImage("dark-night-marble", media, undefined)}
						/>
					{/each}

					<img class="article-image hoverable-image b-r-d" src="/not-found.svg" alt="Dark Night Marble | Premium Mermer" />
				</picture>
			</div>
			<div class="product-name section-text">Dark Night Marble</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<picture class="d-contents">
					{#each SMALL_IMAGE_MEDIA_DATA as media}
						<source
							class="d-contents"
							media={getMediaQueryForResponsiveImage(media)}
							srcset={getLinkForResponsiveImage("patlatma-beyaz", media, undefined)}
						/>
					{/each}

					<img class="article-image hoverable-image b-r-d" src="/not-found.svg" alt="Patlatma Beyaz | Premium Mermer" />
				</picture>
			</div>
			<div class="product-name section-text">Patlatma Beyaz</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<picture class="d-contents">
					{#each SMALL_IMAGE_MEDIA_DATA as media}
						<source
							class="d-contents"
							media={getMediaQueryForResponsiveImage(media)}
							srcset={getLinkForResponsiveImage("yağmur-yeşili", media, undefined)}
						/>
					{/each}

					<img class="article-image hoverable-image b-r-d" src="/not-found.svg" alt="Yağmur Yeşili | Premium Mermer" />
				</picture>
			</div>
			<div class="product-name section-text">Yağmur Yeşili</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<picture class="d-contents">
					{#each SMALL_IMAGE_MEDIA_DATA as media}
						<source
							class="d-contents"
							media={getMediaQueryForResponsiveImage(media)}
							srcset={getLinkForResponsiveImage("şerit-traverten", media, undefined)}
						/>
					{/each}

					<img class="article-image hoverable-image b-r-d" src="/not-found.svg" alt="Şerit Traverten | Premium Mermer" />
				</picture>
			</div>
			<div class="product-name section-text">Şerit Traverten</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Dark Emprador | Premium Mermer"
					imageName="dark-emprador"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>

			<div class="product-name section-text">Dark Emprador</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Amasya Beji | Premium Mermer"
					imageName="amasya-beji"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>
			<div class="product-name section-text">Amasya Beji</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Bulut Grisi | Premium Mermer"
					imageName="bulut-grisi"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>
			<div class="product-name section-text">Bulut Grisi</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Uludağ Siyah | Premium Mermer"
					imageName="uludağ-siyah"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>
			<div class="product-name section-text">Uludağ Siyah</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Venicart Traverten | Premium Mermer"
					imageName="venicart-traverten"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>
			<div class="product-name section-text">Venicart Traverten</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Silifke Bej Mermer | Premium Mermer"
					imageName="silifke-bej-mermer"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>

			<div class="product-name section-text">Silifke Bej Mermer</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Crema Siva | Premium Mermer"
					imageName="crema-siva"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>
            
            <div class="product-name section-text">Crema Siva</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Crema Taurus | Premium Mermer"
					imageName="crema-taurus"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>
			<div class="product-name section-text">Crema Taurus</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="article-image hoverable-image b-r-d"
					alt="Cremera Mermer |Premium Mermer"
					imageName="cremera-mermer"
					mediaData={SMALL_IMAGE_MEDIA_DATA}
				/>
			</div>
			<div class="product-name section-text">Cremera Mermer</div>
		</div>
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

<script>
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore } from "$lib/js/client/util.client";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");
</script>

<svelte:head>
	<title>{L("products-page-title", $lang)}</title>
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
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/silifke-bej-mermer.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Silifke Bej Mermer</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/crema-siva.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Crema Siva</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/crema-taurus.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Crema Taurus</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/cremera-mermer.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Cremera Mermer</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/dark-emprador.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Dark Emprador</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/amasya-beji.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Amasya Beji</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/bulut-grisi.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Bulut Grisi</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/dark-night-marble.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Dark Night Marble</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/patlatma-beyaz.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Patlatma Beyaz</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/şerit-traverten.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Şerit Traverten</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/uludağ-siyah.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Uludağ Siyah</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/venicart-traverten.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Venicart Traverten</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/ürünler/yağmur-yeşili.jpeg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Yağmur Yeşili</div>
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

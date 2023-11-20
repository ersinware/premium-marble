<script>
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { fly } from "svelte/transition";
</script>

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
				<img src="/p1.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Silifke Bej Mermer</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/p2.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Crema Siva</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/p3.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>
			<div class="product-name section-text">Crema Taurus</div>
		</div>

		<div class="product-wrapper grid g-1 t-a-c">
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src="/p4.jpg" alt="" class="article-image hoverable-image b-r-d" />
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

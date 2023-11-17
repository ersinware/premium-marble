<script>
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { fly } from "svelte/transition";
</script>

<section id="blog-section" class="grid page-g w-100 page-max-w-smaller t-a-c" in:fly={TRANSITION_PAGE}>
	<div class="grid g-v-d">
		<h1 class="smaller-section-title">Makaleler</h1>

		<p class="section-text m-h-auto">
			Premium Mermer, mermerin zarafetini ve dayanıklılığını sizlere sunan bir dünya markasıdır. Blog sayfasında,
			mermerle ilgili her şeyi keşfetmek ve sektördeki en son gelişmeleri öğrenmek için doğru yerdesiniz.
		</p>
	</div>

	<article id="articles-wrapper" class="grid">
		<article class="article-wrapper grid t-a-c">
			<img src="/b1.jpg" alt="" class="article-image b-r-d" />
			<div>
				<div class="article-name link-button section-text f-w-500">Mermer Seçerken Nelere Dikkat Etmelisiniz?</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut
					ipsa, quidem et molestias.
				</div>
			</div>
		</article>

		<div class="article-wrapper grid t-a-c">
			<img src="/b2.jpg" alt="" class="article-image b-r-d" />
			<div>
				<div class="article-name link-button section-text f-w-500">Mermer Nasıl Temizlenir?</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Sit necessitatibus qui, nemo fugit pariatur minus aspernatur, nihil consequatur dolor numquam, eveniet
					impedit? Eaque illum animi mollitia neque placeat, labore rerum.
				</div>
			</div>
		</div>

		<div class="article-wrapper grid t-a-c">
			<img src="/b3.jpg" alt="" class="article-image b-r-d" />
			<div>
				<div class="article-name link-button section-text f-w-500">Mermer Bakımı Nasıl Yapılmalı?</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Placeat a deleniti debitis ab, odit iure perspiciatis tempore illum neque fuga similique tempora culpa ipsa
					amet magni harum voluptas itaque fugit.
				</div>
			</div>
		</div>

		<div class="article-wrapper grid t-a-c">
			<img src="/b5.jpg" alt="" class="article-image b-r-d" />
			<div>
				<div class="article-name link-button section-text f-w-500 o-hidden">
					Mermerin Dünyamızdaki Yeri ve Tarihçesi
				</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Tenetur molestiae fugit doloribus pariatur, natus quisquam incidunt, rem cumque omnis quam a at dolores
					eligendi dolor dolorem sequi labore recusandae rerum?
				</div>
			</div>
		</div>

		<div class="article-wrapper grid t-a-c">
			<img src="/h2.jpg" alt="" class="article-image b-r-d" />
			<div>
				<div class="article-name link-button section-text f-w-500 o-hidden">Türkiye'nin Mermer Potansiyeli</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Tenetur molestiae fugit doloribus pariatur, natus quisquam incidunt, rem cumque omnis quam a at dolores
					eligendi dolor dolorem sequi labore recusandae rerum?
				</div>
			</div>
		</div>
	</article>
</section>

<style>
	#articles-wrapper {
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

	.article-wrapper {
		gap: 1.15rem;
	}

	.section-text {
		max-width: 35rem;
	}

	.article-image {
		width: 100%;
		aspect-ratio: 16/14;
		border: 1px var(--divider-color) solid;
	}

	.article-name,
	.article-content {
		display: -webkit-box;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}

	.article-name {
		-webkit-line-clamp: 1;
	}

	.article-content {
		-webkit-line-clamp: 2;

		max-width: 75%;
		margin-top: 0.1rem;

		color: var(--secondary-text-color);
	}
</style>

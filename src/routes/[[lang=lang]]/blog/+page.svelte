<script>
	import { goto } from "$app/navigation";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { getLocalizedURL } from "$lib/js/common/localization/localization.util.common";
	import { getPaths } from "$lib/js/common/util.common";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");

	onMount(_onMount);

	function _onMount() {
		for (const link of document.body.querySelectorAll("#blog-section a"))
			link.addEventListener("click", async (event) => {
				event.preventDefault();

				const href = event.currentTarget.href;
				await performRippleEffectAndWait(event);

				goto(href);
			});
	}
</script>

<section id="blog-section" class="grid page-g w-100 page-max-w-smaller t-a-c" in:fly={TRANSITION_PAGE}>
	<div class="grid g-v-d">
		<h1 class="section-title">Makaleler</h1>

		<p class="section-text m-h-auto">
			Premium Mermer, mermerin zarafetini ve dayanıklılığını sizlere sunan bir dünya markasıdır. Blog sayfasında,
			mermerle ilgili her şeyi keşfetmek ve sektördeki en son gelişmeleri öğrenmek için doğru yerdesiniz.
		</p>
	</div>

	<article id="articles-wrapper" class="grid">
		<a
			href={getLocalizedURL(
				getPaths("/blog/article/what-should-you-pay-care-for-when-choosing-marble"),
				undefined,
				$lang
			)}
			class="article-wrapper hoverable-image-wrapper grid t-a-c"
		>
			<div class="b-r-d o-hidden">
				<img src="/b1.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>

			<div>
				<div class="article-name section-text f-w-500 o-hidden">Mermer Seçerken Nelere Dikkat Etmelisiniz?</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut
					ipsa, quidem et molestias.
				</div>
			</div>
		</a>

		<a
			href={getLocalizedURL(
				getPaths("/blog/article/what-should-you-pay-care-for-when-choosing-marble"),
				undefined,
				$lang
			)}
			class="article-wrapper hoverable-image-wrapper grid t-a-c"
		>
			<div class="b-r-d o-hidden">
				<img src="/b2.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>

			<div>
				<div class="article-name section-text f-w-500 o-hidden">Mermer Nasıl Temizlenir?</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Sit necessitatibus qui, nemo fugit pariatur minus aspernatur, nihil consequatur dolor numquam, eveniet
					impedit? Eaque illum animi mollitia neque placeat, labore rerum.
				</div>
			</div>
		</a>

		<a
			href={getLocalizedURL(
				getPaths("/blog/article/what-should-you-pay-care-for-when-choosing-marble"),
				undefined,
				$lang
			)}
			class="article-wrapper hoverable-image-wrapper grid t-a-c"
		>
			<div class="b-r-d o-hidden">
				<img src="/b3.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>

			<div>
				<div class="article-name section-text f-w-500 o-hidden">Mermer Bakımı Nasıl Yapılmalı?</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Placeat a deleniti debitis ab, odit iure perspiciatis tempore illum neque fuga similique tempora culpa ipsa
					amet magni harum voluptas itaque fugit.
				</div>
			</div>
		</a>

		<a
			href={getLocalizedURL(
				getPaths("/blog/article/what-should-you-pay-care-for-when-choosing-marble"),
				undefined,
				$lang
			)}
			class="article-wrapper hoverable-image-wrapper grid t-a-c"
		>
			<div class="b-r-d o-hidden">
				<img src="/b4.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>

			<div>
				<div class="article-name section-text f-w-500 o-hidden o-hidden">Mermerin Dünyamızdaki Yeri ve Tarihçesi</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Tenetur molestiae fugit doloribus pariatur, natus quisquam incidunt, rem cumque omnis quam a at dolores
					eligendi dolor dolorem sequi labore recusandae rerum?
				</div>
			</div>
		</a>

		<a
			href={getLocalizedURL(
				getPaths("/blog/article/what-should-you-pay-care-for-when-choosing-marble"),
				undefined,
				$lang
			)}
			class="article-wrapper hoverable-image-wrapper grid t-a-c"
		>
			<div class="b-r-d o-hidden">
				<img src="/h2.jpg" alt="" class="article-image hoverable-image b-r-d" />
			</div>

			<div>
				<div class="article-name section-text f-w-500 o-hidden o-hidden">Türkiye'nin Mermer Potansiyeli</div>
				<div class="article-content article-text m-h-auto o-hidden">
					Tenetur molestiae fugit doloribus pariatur, natus quisquam incidunt, rem cumque omnis quam a at dolores
					eligendi dolor dolorem sequi labore recusandae rerum?
				</div>
			</div>
		</a>
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

	.article-name {
		color: steelblue;
	}
</style>

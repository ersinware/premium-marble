<script>
	import { goto } from "$app/navigation";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { getLocalizedURL } from "$lib/js/common/localization/localization.util.common";
	import { getPaths } from "$lib/js/common/util.common";
	import { articles } from "$lib/js/common/util.data.articles";
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
		{#each articles.get($lang).entries() as [key, value]}
			<a
				href={getLocalizedURL(getPaths(`blog/article/${key}`), undefined, $lang)}
				class="article-wrapper hoverable-image-wrapper grid t-a-c"
			>
				<div class="b-r-d o-hidden">
					<img src={value.imageName} alt="" class="article-image hoverable-image b-r-d" />
				</div>

				<div>
					<div class="article-name section-text f-w-500 o-hidden">{value.name}</div>
					<div class="article-content article-text m-h-auto o-hidden">
						{value.summary}
					</div>
				</div>
			</a>
		{/each}
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

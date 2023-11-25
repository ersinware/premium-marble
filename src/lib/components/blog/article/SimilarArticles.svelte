<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import LazyImage from "$lib/components/LazyImage.svelte";
	import { SMALL_IMAGE_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { MODE_LAZY_IMAGE_WHEN_VISIBLE } from "$lib/js/common/constants.common";
	import { getLocalizedPath, getLocalizedURL } from "$lib/js/common/localization/localization.util.common";
	import { getPaths } from "$lib/js/common/util.common";
	import { articles } from "$lib/js/common/util.data.articles";
	import { onMount } from "svelte";

	const lang = getStore("lang");

	let similarArticles;

	$: loadSimilarArticles($lang, $page.params.article_name);

	function loadSimilarArticles() {
		const currentArticleKey = getLocalizedPath($page.params.article_name, $lang),
			keys = Array.from(articles.get($lang).keys()),
			currentIndex = keys.indexOf(currentArticleKey);

		similarArticles = [];
		similarArticles.push(keys[(currentIndex + 1) % keys.length]);
		similarArticles.push(keys[(currentIndex + 2) % keys.length]);
		similarArticles = similarArticles;
	}

	onMount(_onMount);

	function _onMount() {
		for (const link of document.body.querySelectorAll("#similar-articles a"))
			link.addEventListener("click", async (event) => {
				event.preventDefault();

				const href = event.currentTarget.href;
				await performRippleEffectAndWait(event);

				goto(href);
			});
	}
</script>

<section id="similar-articles" class="b-box grid g-v-d full-width page-p-t p-h-d t-a-c secondary-background-color">
	<div class="grid g-v-d page-max-w-smaller m-h-auto">
		<h2 class="smaller-section-title f-w-600">Benzer Makaleler</h2>

		<article id="similar-articles-content" class="grid">
			{#each similarArticles as key}
				{@const value = articles.get($lang).get(key)}

				<a
					href={getLocalizedURL(getPaths(`blog/article/${key}`), undefined, $lang)}
					class="article-wrapper hoverable-image-wrapper grid t-a-c"
				>
					<div class="img-wrapper b-r-d o-hidden">
						{#key value.imageName}
							<LazyImage
								mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
								classes="article-image hoverable-image b-r-d"
								alt="{value.name} | Premium Mermer"
								imageName={value.imageName}
								mediaData={SMALL_IMAGE_MEDIA_DATA}
								loadingLevel={2}
							/>
						{/key}
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
	</div>

	<div class="h-divider w-100 page-max-w m-h-auto" />
</section>

<style>
	#similar-articles {
		margin-bottom: calc(var(--page-g) * -1);
	}

	#similar-articles-content {
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

	.article-name {
		color: steelblue;
	}

	.h-divider {
		margin-top: calc(var(--page-g) / 2.5);
	}
</style>

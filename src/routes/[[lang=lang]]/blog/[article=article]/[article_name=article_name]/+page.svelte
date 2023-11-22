<script>
	import { page } from "$app/stores";
	import SimilarArticles from "$lib/components/blog/article/SimilarArticles.svelte";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore } from "$lib/js/client/util.client";
	import { getLocalizedPath } from "$lib/js/common/localization/localization.util.common";
	import { articles } from "$lib/js/common/util.data.articles";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");

	$: article = articles.get($lang).get(getLocalizedPath($page.params.article_name, $lang));
</script>

<svelte:head>
	<title>{article.name} | {L("app-name", $lang)}</title>
</svelte:head>

<section class="grid page-g" in:fly={TRANSITION_PAGE}>
	{#key article.imageName}
		<div class="flex f-column g-v-d w-100 page-max-w m-h-auto t-a-c" in:fly={TRANSITION_PAGE}>
			<div class="hoverable-image-wrapper o-hidden b-r-d">
				<img src={article.imageName} alt="" id="poster-img" class="hoverable-image w-h-100 b-r-d" />
			</div>

			<div class="content grid g-v-d page-max-w-smaller m-h-auto">
				<h1 class="smaller-section-title f-w-600">{article.name}</h1>

				{@html article.content}
			</div>
		</div>
	{/key}

	<SimilarArticles />
</section>

<style>
	.content {
		margin-top: 1rem;
		max-width: calc(50rem - var(--main-h-padding) * 2);
	}

	.smaller-section-title {
		line-height: 2rem;
	}

	@media (min-width: 47.5001em) {
		#poster-img {
			aspect-ratio: 16/10;
		}
	}

	@media (max-width: 47.5em) {
		#poster-img {
			aspect-ratio: 16/14;
		}
	}
</style>

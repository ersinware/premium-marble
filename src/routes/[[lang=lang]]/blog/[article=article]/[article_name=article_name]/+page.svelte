<script>
	import { page } from "$app/stores";
	import SimilarArticles from "$lib/components/blog/article/SimilarArticles.svelte";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { getStore } from "$lib/js/client/util.client";
	import { getLocalizedPath } from "$lib/js/common/localization/localization.util.common";
	import { articles } from "$lib/js/common/util.data.articles";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");

	$: article = articles.get($lang).get(getLocalizedPath($page.params.article_name, $lang));
</script>

<section class="grid page-g" in:fly={TRANSITION_PAGE}>
	{#key article.imageName}
		<div class="flex f-column g-v-d w-100 page-max-w m-h-auto t-a-c" in:fly={TRANSITION_PAGE}>
			<img src={article.imageName} alt="" id="poster-img" class="w-h-100 b-r-d" />

			<div class="content grid g-v-d page-max-w-smaller m-h-auto">
				<h1 class="smaller-section-title f-w-600">{article.name}</h1>

				{@html article.content}
			</div>
		</div>
	{/key}

	<SimilarArticles />
</section>

<style>
	#poster-img {
		aspect-ratio: 16/10;
	}

	.content {
		margin-top: 1rem;
	}

	@media (max-width: 30.1875em) {
		#poster-img {
			aspect-ratio: 16/14;
		}
	}
</style>

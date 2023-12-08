<script>
	import { page } from "$app/stores";
	import { PUBLIC_DEFAULT_LANGUAGE, PUBLIC_HOST_ADDRESS, PUBLIC_LAST_MOD } from "$env/static/public";
	import SimilarArticles from "$lib/components/news/article/SimilarArticles.svelte";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { ARTICLE_POSTER_IMAGE_MEDIA_DATA, SMALL_IMAGE_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getFullLocalizedURL, getLocalizedLink } from "$lib/js/client/localization/localization.util.client";
	import { getStore } from "$lib/js/client/util.client";
	import { getLinkForResponsiveImage, getMediaQueryForResponsiveImage } from "$lib/js/client/util.responsive.client";
	import { arrLangs } from "$lib/js/common/localization/localization.constants.common";
	import { getLocalizedPath } from "$lib/js/common/localization/localization.util.common";
	import { articles } from "$lib/js/common/util.data.articles";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");

	$: article = articles.get($lang).get(getLocalizedPath($page.params.article_name, $lang));
</script>

<svelte:head>
	<title>{article.name} | {L("app-name", $lang)}</title>

	{#if $lang === "tr"}
		<meta name="description" content="'{article.name}' hakkında bir makale | Premium Mermer" />
	{:else}
		<meta name="description" content="An article about '{article.name}' | Premium Marble" />
	{/if}

	{@html `
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": "${article.name}",
                "image": [
                    "${PUBLIC_HOST_ADDRESS}${getLinkForResponsiveImage(
											article.imageName,
											SMALL_IMAGE_MEDIA_DATA[SMALL_IMAGE_MEDIA_DATA.length - 1],
											undefined,
										)}"
                ],
                "datePublished": "${PUBLIC_LAST_MOD}",
                "dateModified": "${PUBLIC_LAST_MOD}",
                "author": [{
                    "@type": "Organization",
                    "name": "${L("app-name", $lang)}",
                    "url": "https://premiummermer.com.tr"
                }]
            }
	    </script>
    `}

	{@html `
        <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "${L("news", $lang)}",
                        "item": "${PUBLIC_HOST_ADDRESS}${getLocalizedLink("news", $lang)}"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "${article.name}",
                        "item": "${PUBLIC_HOST_ADDRESS}${getLocalizedLink("news", $lang)}/${getLocalizedPath(
													$page.params.article_name,
													$lang,
												)}"
                    }
                ]
            }
        </script>
    `}

	<link
		rel="alternate"
		hreflang="x-default"
		href={getFullLocalizedURL(`news/${$page.params.article_name}`, "", PUBLIC_DEFAULT_LANGUAGE)}
	/>
	{#each arrLangs as lang}
		<link rel="alternate" hreflang={lang} href={getFullLocalizedURL(`news/${$page.params.article_name}`, "", lang)} />
	{/each}

	{#each ARTICLE_POSTER_IMAGE_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage(article.posterImageName, media, undefined, false)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImage(media)}
		/>
	{/each}
</svelte:head>

<section class="w-100" in:fly={TRANSITION_PAGE}>
	{#key article.posterImageName}
		<div class="flex f-column page-g" in:fly={TRANSITION_PAGE}>
			<div class="flex f-column g-v-d w-100 page-max-w m-h-auto t-a-c">
				<div id="article-poster-image-wrapper" class="img-wrapper hoverable-image-wrapper o-hidden b-r-d">
					<picture class="d-contents">
						{#each ARTICLE_POSTER_IMAGE_MEDIA_DATA as media}
							<source
								class="d-contents"
								media={getMediaQueryForResponsiveImage(media)}
								srcset={getLinkForResponsiveImage(article.posterImageName, media, undefined, false)}
							/>
						{/each}

						<img
							id="article-poster-image"
							class="hoverable-image w-h-100 b-r-d"
							src="/not-found.svg"
							alt="{article.name} | Premium Mermer"
						/>
					</picture>
				</div>

				<div class="content grid g-v-d page-max-w-smaller m-h-auto">
					<h1 class="smaller-section-title f-w-600">{article.name}</h1>

					{@html article.content}
				</div>
			</div>

			<SimilarArticles />
		</div>
	{/key}
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
		#article-poster-image,
		#article-poster-image-wrapper {
			aspect-ratio: 16/10;
		}
	}

	@media (max-width: 47.5em) {
		#article-poster-image,
		#article-poster-image-wrapper {
			aspect-ratio: 16/18;
		}
	}
</style>

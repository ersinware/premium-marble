<script>
	import { goto } from "$app/navigation";
	import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";
	import LazyImage from "$lib/components/LazyImage.svelte";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { SMALL_IMAGE_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getFullLocalizedURL } from "$lib/js/client/localization/localization.util.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { getLinkForResponsiveImage, getMediaQueryForResponsiveImage } from "$lib/js/client/util.responsive.client";
	import { MODE_LAZY_IMAGE_WHEN_VISIBLE } from "$lib/js/common/constants.common";
	import { arrLangs } from "$lib/js/common/localization/localization.constants.common";
	import { getLocalizedURL } from "$lib/js/common/localization/localization.util.common";
	import { getPaths } from "$lib/js/common/util.common";
	import { articles } from "$lib/js/common/util.data.articles";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");

	onMount(_onMount);

	function _onMount() {
		for (const link of document.body.querySelectorAll("#news-section a"))
			link.addEventListener("click", async (event) => {
				event.preventDefault();

				const href = event.currentTarget.href;
				await performRippleEffectAndWait(event);

				goto(href);
			});
	}
</script>

<svelte:head>
	<title>{L("news-page-title", $lang)}</title>

    <link rel="alternate" hreflang="x-default" href={getFullLocalizedURL("news", "", PUBLIC_DEFAULT_LANGUAGE)} />
	{#each arrLangs as lang}
		<link rel="alternate" hreflang={lang} href={getFullLocalizedURL("news", "", lang)} />
	{/each}

	{#each articles.get($lang).entries() as [key, value], index}
		{#if index < 4}
			{#each SMALL_IMAGE_MEDIA_DATA as media}
				<link
					rel="preload"
					href={getLinkForResponsiveImage(value.imageName, media, undefined)}
					as="image"
					type="image/webp"
					media={getMediaQueryForResponsiveImage(media)}
				/>
			{/each}
		{/if}
	{/each}
</svelte:head>

<section id="news-section" class="grid page-g w-100 page-max-w-smaller t-a-c" in:fly={TRANSITION_PAGE}>
	<div class="grid g-v-d">
		<h1 class="section-title">{L('news', $lang)}</h1>

		<p class="section-text m-h-auto">
			{L('news-description', $lang)}
		</p>
	</div>

	<article id="articles-wrapper" class="grid">
		{#each articles.get($lang).entries() as [key, value], index}
			<a
				href={getLocalizedURL(getPaths(`news/${key}`), undefined, $lang)}
				class="article-wrapper  hoverable-image-wrapper grid t-a-c"
			>
				<div class="img-wrapper b-r-d o-hidden">
					{#if index < 4}
						<picture class="d-contents">
							{#each SMALL_IMAGE_MEDIA_DATA as media}
								<source
									class="d-contents"
									media={getMediaQueryForResponsiveImage(media)}
									srcset={getLinkForResponsiveImage(value.imageName, media, undefined)}
								/>
							{/each}

							<img
								class="article-image hoverable-image b-r-d"
								src="/not-found.svg"
								alt="{value.name} | Premium Mermer"
							/>
						</picture>
					{:else}
						<LazyImage
							mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
							classes="article-image hoverable-image b-r-d"
							alt="{value.name} | Premium Mermer"
							imageName={value.imageName}
							mediaData={SMALL_IMAGE_MEDIA_DATA}
						/>
					{/if}
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

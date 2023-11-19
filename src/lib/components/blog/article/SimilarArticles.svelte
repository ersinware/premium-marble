<script>
	import { getStore } from "$lib/js/client/util.client";
	import { getLocalizedURL } from "$lib/js/common/localization/localization.util.common";
	import { getPaths } from "$lib/js/common/util.common";

	export let articles;

	const lang = getStore("lang");
</script>

<section id="similar-articles" class="b-box grid g-v-d full-width page-p-t p-h-d t-a-c secondary-background-color">
	<div class="grid g-v-d page-max-w-smaller m-h-auto">
		<h2 class="smaller-section-title f-w-600">Benzer Makaleler</h2>

		<div id="similar-articles-content" class="grid g-v-d">
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
		</div>
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

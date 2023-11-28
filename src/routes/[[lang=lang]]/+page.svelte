<script>
	import { goto } from "$app/navigation";
	import LazyImage from "$lib/components/LazyImage.svelte";
	import Slider from "$lib/components/slider/Slider.svelte";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getLocalizedLink } from "$lib/js/client/localization/localization.util.client";
	import { getStore, performRippleEffectForButtonAndWait } from "$lib/js/client/util.client";
	import { getLinkForResponsiveImage, getMediaQueryForResponsiveImage } from "$lib/js/client/util.responsive.client";
	import { MODE_LAZY_IMAGE_WHEN_VISIBLE } from "$lib/js/common/constants.common";
	import { SECTION_IMAGE_MEDIA_DATA, SLIDER_IMAGE_MEDIA_DATA } from "$lib/js/client/constants.media.data.client";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");

	onMount(_onMount);

	function _onMount() {
		for (const link of document.body.querySelectorAll("#homepage a"))
			link.addEventListener("click", async (event) => {
				event.preventDefault();

				const href = event.currentTarget.href;
				await performRippleEffectForButtonAndWait(event);

				goto(href);
			});
	}
</script>

<svelte:head>
	<title>{L("homepage-page-title", $lang)}</title>

	{#each SLIDER_IMAGE_MEDIA_DATA as media}
		<link
			rel="preload"
			href={getLinkForResponsiveImage("premium-mermer-slider-marble-one", media, undefined, false)}
			as="image"
			type="image/webp"
			media={getMediaQueryForResponsiveImage(media)}
		/>
	{/each}
</svelte:head>

<section id="homepage" class="flex f-column page-g w-100 max-w" in:fly={TRANSITION_PAGE}>
	<div class="full-width">
		<Slider absoluteIndicators>
			<article id="slider-homepage" class="slider-content flex w-100 b-r-d o-hidden">
				<article class="b-box slider-item p-h-d">
					<div
						class="b-box p-r slider-item-content img-wrapper hoverable-image-wrapper w-h-100 max-w m-h-auto b-r-d o-hidden"
					>
						<picture class="d-contents">
							{#each SLIDER_IMAGE_MEDIA_DATA as media}
								<source
									class="d-contents"
									media={getMediaQueryForResponsiveImage(media)}
									srcset={getLinkForResponsiveImage("premium-mermer-slider-marble-one", media, undefined, false)}
								/>
							{/each}

							<img class="hoverable-image w-h-100" src="/not-found.svg" alt="Premium Mermer" />
						</picture>

						<article class="slider-text-wrapper p-a grid g-1dot25 p-d">
							<h2 class="slider-text-title f-w-600">Mermerin Eşsiz Zerafeti</h2>
							<p class="slider-text-content article-text">
								Doğadan ilham alarak işlediğimiz mermer, mekânlarınıza eşsiz bir zerafet katıyor, estetik anlayışınızı
								yeniden tanımlıyoruz.
							</p>
						</article>
					</div>
				</article>

				<article class="b-box slider-item p-h-d">
					<div
						class="b-box p-r slider-item-content img-wrapper hoverable-image-wrapper w-h-100 max-w m-h-auto b-r-d o-hidden"
					>
						<LazyImage
							mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
							classes="hoverable-image w-h-100 m-h-auto b-r-d"
							alt="Premium Mermer"
							imageName="premium-mermer-slider-marble-two"
							mediaData={SLIDER_IMAGE_MEDIA_DATA}
							onceRatio={false}
                            loadingLevel={2}
						/>

						<article class="slider-text-wrapper p-a grid g-1dot25 p-d">
							<h2 class="slider-text-title f-w-600">Taşın Ahengini Hissedin</h2>
							<p class="slider-text-content article-text">
								Her bir mermer bloğu, getirdiği benzersiz ahengiyle sizi etkisi altına alacak. Taşın dokunuşunu
								hissedin, uyumu yakalayın.
							</p>
						</article>
					</div>
				</article>

				<article class="b-box slider-item p-h-d">
					<div
						class="b-box p-r slider-item-content img-wrapper hoverable-image-wrapper w-h-100 max-w m-h-auto b-r-d o-hidden"
					>
						<LazyImage
							mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
							classes="hoverable-image w-h-100 m-h-auto b-r-d"
							alt="Premium Mermer"
							imageName="premium-mermer-slider-marble-three"
							mediaData={SLIDER_IMAGE_MEDIA_DATA}
							onceRatio={false}
                            loadingLevel={2}
						/>

						<article class="slider-text-wrapper p-a grid g-1dot25 p-d">
							<h2 class="slider-text-title f-w-600">Şıklık Yeniden Tanımlanıyor</h2>
							<p class="slider-text-content article-text">
								Mutfaklarınıza modern bir dokunuş katmak için tasarladığımız ürünler, şıklığı tamamen yeniden
								tanımlıyor.
							</p>
						</article>
					</div>
				</article>
			</article>
		</Slider>
	</div>

	<div
		id="texts-with-icons-wrapper"
		class="flex f-s-e g-v-d w-100 m-h-auto big-screen-page-max-w small-screen-max-w-100"
	>
		<div class="flex f-column a-i-c g-1 t-a-c">
			<svg class="text-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
				/></svg
			>

			<div class="texts-after-icons grid g-dot5">
				<p class="title-of-icon section-text f-w-500">Son Sistem Makineler</p>
				<p class="text-of-icon article-text">
					Doğadan çıkardığımız mermerleri son teknolojiyi kullanarak, doğaya zarar vermeden üretim yapıyoruz.
				</p>
			</div>
		</div>

		<div class="flex f-column a-i-c g-1 t-a-c">
			<svg class="text-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
				><path
					d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z"
				/></svg
			>

			<div class="texts-after-icons grid g-dot5">
				<p class="title-of-icon section-text f-w-500">Deneyimli Ekip</p>
				<p class="text-of-icon article-text">
					Alanında uzman ekibimizin özverili çalışmaları neticesinde kaliteden ödün vermiyoruz.
				</p>
			</div>
		</div>

		<div class="flex f-column a-i-c g-1 t-a-c">
			<svg class="text-icon" style:width="2.5rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
				><path
					d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
				/></svg
			>

			<div class="texts-after-icons grid g-dot5">
				<p class="title-of-icon section-text f-w-500">Müşteri Memnuniyeti</p>
				<p class="text-of-icon article-text">
					Sürdürülebilir başarılar için müşterilerimizin memnuniyetini ön planda tutmak için elimizden geleni yapıyoruz.
				</p>
			</div>
		</div>
	</div>

	<div class="full-width page-p-v-d p-h-d secondary-background-color">
		<article
			class="flex max-w big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c big-screen-m-h-auto small-screen-f-column small-screen-a-i-c small-screen-g-v-d small-screen-o-hidden"
		>
			<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
				<h2 class="section-title">Premium Mermer</h2>

				<p class="section-text">
					Doğadan ilham alarak tasarlanan her bir blok, modern tasarım ve geleneksel işçilikle birleşerek mekânlarınıza
					benzersiz bir dokunuş katıyor. Zengin seçeneklerimizle tarzınıza uygun çözümler sunuyoruz.
				</p>

				<a href={getLocalizedLink("products", $lang)} class="button small-button small-screen-m-h-auto">ÜRÜNLERİMİZ</a>
			</div>

			<div class="section-img-wrapper img-wrapper hoverable-image-wrapper w-100 o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="hoverable-image w-h-100 m-h-auto b-r-d"
					alt="Premium Mermer"
					imageName="premium-mermer-one"
					mediaData={SECTION_IMAGE_MEDIA_DATA}
					onceRatio={false}
					loadingLevel={2}
				/>
			</div>
		</article>
	</div>

	<article
		class="flex big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c small-screen-f-column-reverse small-screen-a-i-c small-screen-g-v-d o-hidden"
	>
		<div class="section-img-wrapper img-wrapper hoverable-image-wrapper w-100 o-hidden b-r-d">
			<LazyImage
				mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
				classes="hoverable-image w-h-100 m-h-auto b-r-d"
				alt="Premium Mermer"
				imageName="premium-mermer-two"
				mediaData={SECTION_IMAGE_MEDIA_DATA}
				onceRatio={false}
			/>
		</div>

		<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
			<h2 class="section-title">Mermerin Ötesinde</h2>

			<p class="section-text">
				Premium Mermer, uzun yıllara dayanan deneyimiyle öne çıkan bir kuruluştur. Modern tasarım anlayışımız,
				geleneksel zanaat becerileriyle buluşarak; zarafet, dayanıklılık ve estetiği bir arada sunuyor.
			</p>

			<a href={getLocalizedLink("about-us", $lang)} class="button small-button small-screen-m-h-auto">HAKKIMIZDA</a>
		</div>
	</article>

	<div class="full-width page-p-v-d p-h-d secondary-background-color">
		<article
			class="flex max-w big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c big-screen-m-h-auto small-screen-f-column small-screen-a-i-c small-screen-g-v-d small-screen-o-hidden"
		>
			<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
				<h2 class="section-title">Bilgi ve İlham Kaynağı</h2>

				<p class="section-text">
					Mermer dünyasının nabzını tutan firmamız, sektöre dair değerli içgörüleri ve ilham verici tasarım önerilerini
					sizinle buluşturuyor. Yeniliklere dair bilgileri keşfedin.
				</p>

				<a href={getLocalizedLink("blog", $lang)} class="button small-button small-screen-m-h-auto">MAKALELER</a>
			</div>

			<div class="section-img-wrapper img-wrapper hoverable-image-wrapper w-100 o-hidden b-r-d">
				<LazyImage
					mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
					classes="hoverable-image w-h-100 m-h-auto b-r-d"
					alt="Premium Mermer"
					imageName="premium-mermer-three"
					mediaData={SECTION_IMAGE_MEDIA_DATA}
					onceRatio={false}
					loadingLevel={2}
				/>
			</div>
		</article>
	</div>

	<article
		class="flex big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c small-screen-f-column-reverse small-screen-a-i-c small-screen-g-v-d o-hidden"
	>
		<div class="section-img-wrapper img-wrapper hoverable-image-wrapper w-100 o-hidden b-r-d">
			<LazyImage
				mode={MODE_LAZY_IMAGE_WHEN_VISIBLE}
				classes="hoverable-image w-h-100 m-h-auto b-r-d"
				alt="Premium Mermer"
				imageName="premium-mermer-four"
				mediaData={SECTION_IMAGE_MEDIA_DATA}
				onceRatio={false}
			/>
		</div>

		<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
			<h2 class="section-title">Düşünceleriniz, Değerli</h2>

			<p class="section-text">
				Müşterilerimizin memnuniyeti bizim için önceliktir. İster soru sormanız, ister bir projeyi tartışmanız, ister
				sadece merhaba demeniz için buradayız. Sizden haber almak için sabırsızlanıyoruz.
			</p>

			<a href={getLocalizedLink("contact", $lang)} class="button small-button small-screen-m-h-auto">BİZE ULAŞIN</a>
		</div>
	</article>
</section>

<style>
	#slider-homepage {
		--grid-item-min-width: 1rem;
		--grid-layout-gap: var(--main-h-padding);
		--grid-max-column-count: 1;
		--gap-count: calc(var(--grid-max-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item-max-width: calc((100% - var(--total-gap-width)) / var(--grid-max-column-count));

		gap: var(--grid-layout-gap);
	}

	.slider-item {
		flex: 0 0 max(var(--grid-item-max-width), var(--grid-item-min-width)) !important;
	}

	.slider-text-wrapper {
		bottom: calc(var(--main-v-padding) * 2);
		z-index: 1;

		background-color: var(--slider-item-text-wrapper-background-color);

		border-radius: calc(var(--border-radius) - 0.25rem);
	}

	.slider-text-title {
		letter-spacing: 0.025rem;
		font-size: 1.25rem;
		line-height: 1.5rem;
	}

	.slider-text-content {
		max-width: 30rem;
	}

	#texts-with-icons-wrapper {
		flex-wrap: wrap;
	}

	.text-icon {
		height: 2rem;
		fill: var(--accent-color);
	}

	#texts-with-icons-wrapper > * {
		width: 17.5rem;
	}

	@media (min-width: 65.001em) {
		.slider-text-wrapper {
			left: calc(var(--main-h-padding) * 2);
			max-width: min(40rem, calc(50% - var(--main-h-padding) * 2));
		}

		.section-texts {
			max-width: 30rem;
			min-width: 30rem;
		}

		.slider-item-content {
			aspect-ratio: 16/8;
		}

		.section-img-wrapper {
			max-width: 45rem;
			aspect-ratio: 720/480;
		}
	}

	@media (max-width: 65em) {
		.slider-item-content {
			aspect-ratio: 16/18;
			max-height: 45rem;
		}

		.slider-text-wrapper {
			left: var(--main-h-padding);
			max-width: calc(100% - var(--main-h-padding) * 4);
			max-height: calc(100% - var(--main-v-padding) * 5);
		}

		.section-texts {
			max-width: min(90%, calc(42.5rem - var(--main-h-padding) * 2));
		}

		.button {
			margin-bottom: 0.25rem;
		}

		.section-img-wrapper {
			max-width: 42.5rem;
			aspect-ratio: 16/14;
		}
	}

	@media (max-width: 34.1875em) {
		.slider-text-wrapper {
			max-width: min(calc(20rem - var(--main-h-padding) * 2), calc(100% - var(--main-h-padding) * 4));
		}
	}
</style>

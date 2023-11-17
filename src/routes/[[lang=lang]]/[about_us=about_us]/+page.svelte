<script>
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { fly } from "svelte/transition";
</script>

<section class="grid page-g w-100" in:fly={TRANSITION_PAGE}>
	<article
		class="flex big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c small-screen-f-column small-screen-a-i-c small-screen-g-v-d o-hidden"
	>
		<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
			<h2 class="smaller-section-title">Premium Mermer</h2>

			<p class="section-text">
				Fabrikamız; Silifke’nin ilk mermer fabrikası olarak 2005 yılında Küçük Sanayi Sitesinde faaliyete geçmiş, 2011
				yılında Silifke Organize Sanayi Bölgesine taşınmış ve kendi mülkiyetinde faaliyetlerine devam etmektedir. 26.000
				m² arazi üzerinde 3000 m² kapalı alanda çalışmalarını sürdüren Şimşek Mermer, işinde deneyimli personelleri ve
				son sistem makineler ile Silifke‘de çıkarılan mermer çeşitlerini işleyip ihracat yaparak, hem Silifke hem de
				ülke ekonomisine katkı sağlamaktadır.
			</p>
		</div>

		<div class="img-wrapper w-100  o-hidden">
			<img src="/h1.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
		</div>
	</article>

	<div class="full-width page-p-v-d p-h-d secondary-background-color">
		<article
			class="flex max-w big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c big-screen-m-h-auto small-screen-f-column-reverse small-screen-a-i-c small-screen-g-v-d small-screen-o-hidden"
		>
			<div class="img-wrapper w-100  o-hidden">
				<img src="/h2.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
			</div>

			<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
				<h2 class="smaller-section-title">18 Yıllık Deneyim</h2>

				<p class="section-text">
					Silifke’nin köklü mermer fabrikalarından olan Şimşek Mermer Fabrikası, kurulduğu yıldan bu yana kalitesini
					yükseltmiş ve yükseltmeye devam etmektedir. Her türlü mermer çeşitlerini istenilen ölçü ve ebatlarda işleyen
					fabrikamızda, müşterilerimizin özel istekleri de yerine getirilmektedir.
				</p>
			</div>
		</article>
	</div>

	<div id="statistics-wrapper" class="grid w-100 m-h-auto big-screen-page-max-w small-screen-max-w-100">
		<article class="flex f-column a-i-c g-1 p-d secondary-background-color b-r-d t-a-c">
			<svg class="statistic-item-icon" style:width="2.1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
				/></svg
			>

			<div class="statistic-item-texts grid g-dot25">
				<div class="statistic-item-text-number f-w-600">224</div>
				<div class="section-text">Proje Tecrübesi</div>
			</div>
		</article>

		<article class="flex f-column a-i-c g-1 p-d secondary-background-color b-r-d t-a-c">
			<svg class="statistic-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"
				/></svg
			>

			<div class="statistic-item-texts grid g-dot25">
				<div class="statistic-item-text-number f-w-600">15</div>
				<div class="section-text">Farklı Ülke</div>
			</div>
		</article>

		<article class="flex f-column a-i-c g-1 p-d secondary-background-color b-r-d t-a-c">
			<svg class="statistic-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
				><path
					d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
				/></svg
			>

			<div class="statistic-item-texts grid g-dot25">
				<div class="statistic-item-text-number f-w-600">26.000</div>
				<div class="section-text">m² Alan</div>
			</div>
		</article>

		<article class="flex f-column a-i-c g-1 p-d secondary-background-color b-r-d t-a-c">
			<svg class="statistic-item-icon" style:width="2.75rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
				><path
					d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z"
				/></svg
			>

			<div class="statistic-item-texts grid g-dot25">
				<div class="statistic-item-text-number f-w-600">18</div>
				<div class="section-text">Yıllık Tecrübe</div>
			</div>
		</article>
	</div>

	<div class="full-width page-p-v-d p-h-d secondary-background-color">
		<article
			class="flex max-w big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c big-screen-m-h-auto small-screen-f-column small-screen-a-i-c small-screen-g-v-d small-screen-o-hidden"
		>
			<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
				<h2 class="smaller-section-title">Kalitenin Simgesi</h2>

				<p class="section-text">
					Premium Mermer olarak bizler, hatasız üretim ve zamanında teslimat gerçekleştiririz. Mevcut durumumuzu
					korumakla yetinmeyip her noktada sürekli iyileşmeyi temel felsefemiz olarak belirleriz. Personel kalifikasyonu
					için sürekli eğitim faaliyetleri yürütürüz. Ülke ve şirket gelişimine katkı sağlamak amacıyla ihracatta
					yerimiz daima ön sıralardadır. Kalitenin bir tesadüf olmadığına inanıyoruz. Markamız kalitemizin simgesidir ve
					bu, geleceğe attığımız imzadır görüşünü benimsiyoruz.
				</p>

				<div id="about-us-buttons" class="flex g-h-d small-screen-j-c-c">
					<a href="/document.pdf" target="_blank" class="nude-button small-button">UYGUNLUK BELGEMİZ</a>
					<a href="/certificate.jpg" target="_blank" class="nude-button small-button">SERTİFİKAMIZ</a>
				</div>
			</div>

			<div class="img-wrapper w-100  o-hidden">
				<img src="/h3.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
			</div>
		</article>
	</div>

	<article
		class="flex big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c small-screen-f-column-reverse small-screen-a-i-c small-screen-g-v-d o-hidden"
	>
		<div class="img-wrapper w-100  o-hidden">
			<img style:filter="brightness(1.5)" src="/h4.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
		</div>

		<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
			<h2 class="smaller-section-title">Müşteri Memnuniyeti</h2>

			<p class="section-text">
				Müşterilerimizin değişen ve gelişen şartlarını göz önüne alarak ihtiyaç ve beklentilerini doğru algılayıp
				istenilen şekilde, zamanında karşılayarak müşteri memnuniyetini sağlamak, Sektörümüzle ilgili teknolojik
				gelişmeleri takip ederek üretim ve hizmetlerimizde en gelişmiş teknikleri kullanmak, Maliyetleri optimum
				seviyeye çekmek ve kalitesi verimliliği ve rekabet gücü yüksek kuruluş olmak, Çevreye saygılı, iş ve işçi
				güvenliğini temel alan, yasal mevzuat şartlarına uygun olarak üretim yapmak bilinci ile çalışmalarımızı
				sürdürmekteyiz.
			</p>
		</div>
	</article>
</section>

<style>
	img,
	.img-wrapper {
		max-width: 45rem;
		aspect-ratio: 720/480;
	}

	#statistics-wrapper {
		--grid-item-min-width: 10rem;
		--grid-layout-gap: var(--main-h-padding);
		--grid-max-column-count: 4;
		--gap-count: calc(var(--grid-max-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item-max-width: calc((100% - var(--total-gap-width)) / var(--grid-max-column-count));

		grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item-min-width), var(--grid-item-max-width)), 1fr));

		gap: var(--grid-layout-gap);
	}

	.statistic-item-icon {
		width: 2.5rem;
		height: 2.5rem;
		fill: var(--accent-color);
	}

	.statistic-item-text-number {
		font-size: 0.9rem;
	}

	@media (min-width: 65.001em) {
		.section-texts {
			max-width: 30rem;
			min-width: 30rem;
		}
	}

	@media (max-width: 65em) {
		#statistics-wrapper {
			max-width: min(45rem, 100%);
		}

		.section-texts {
			max-width: calc(45rem - var(--main-h-padding) * 2);
		}

		#about-us-buttons {
			margin-top: -0.5rem;
		}
	}
</style>

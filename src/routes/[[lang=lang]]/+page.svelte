<script>
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { getStore } from "$lib/js/client/util.client";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");
</script>

<section class="flex f-column page-g w-100 max-w" in:fly={TRANSITION_PAGE}>
	<div id="slider-homepage" class="w-100 secondary-background-color b-r-d" />

	<div
		id="texts-with-icons-wrapper"
		class="flex f-s-e g-v-d w-100 m-h-auto big-screen-page-max-w small-screen-max-w-100"
	>
		<div class="flex f-column a-i-c g-1 t-a-c">
			<svg class="text-icon" style:width="2.1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
				/></svg
			>

			<div class="texts-after-icons grid g-dot5">
				<p class="text-of-icon section-text f-w-500">Son Sistem Makineler</p>
				<p class="text-of-icon article-text">
					Doğadan çıkardığımız mermerleri son teknolojiyi kullanarak, doğaya zarar vermeden üretim yapıyoruz.
				</p>
			</div>
		</div>

		<div class="flex f-column a-i-c g-1 t-a-c">
			<svg class="text-icon" style:width="2.1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
				/></svg
			>

			<div class="texts-after-icons grid g-dot5">
				<p class="text-of-icon section-text f-w-500">Deneyimli Ekip</p>
				<p class="text-of-icon article-text">
					Alanında uzman ekibimizin özverili çalışmaları neticesinde kaliteden ödün vermiyoruz.
				</p>
			</div>
		</div>

		<div class="flex f-column a-i-c g-1 t-a-c">
			<svg class="text-icon" style:width="2.1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
				><path
					d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
				/></svg
			>

			<div class="texts-after-icons grid g-dot5">
				<p class="text-of-icon section-text f-w-500">Müşteri Memnuniyeti</p>
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
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit cupiditate, quis excepturi nihil dignissimos
					facere tempora, doloribus, voluptas culpa voluptatibus adipisci officiis illo consequatur possimus alias. Sit
					natus provident a.
				</p>

				<button class="button small-button small-screen-m-h-auto">ÜRÜNLERİMİZ</button>
			</div>

			<div class="img-wrapper w-100 o-hidden">
				<img src="/h3.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
			</div>
		</article>
	</div>

	<article
		class="flex big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c small-screen-f-column-reverse small-screen-a-i-c small-screen-g-v-d o-hidden"
	>
		<div class="img-wrapper w-100 o-hidden">
			<img src="/h2.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
		</div>

		<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
			<h2 class="section-title">Premium Mermer</h2>

			<p class="section-text">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias magni animi provident ex non molestiae illo
				sequi possimus inventore ipsam neque, eaque explicabo consectetur consequuntur voluptate reiciendis sit et
				doloribus.
			</p>

			<button class="button small-button small-screen-m-h-auto">HAKKIMIZDA</button>
		</div>
	</article>

	<div class="full-width page-p-v-d p-h-d secondary-background-color">
		<article
			class="flex max-w big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c big-screen-m-h-auto small-screen-f-column small-screen-a-i-c small-screen-g-v-d small-screen-o-hidden"
		>
			<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
				<h2 class="section-title">Kalitenin Simgesi</h2>

				<p class="section-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laboriosam a dignissimos accusantium sapiente
					ipsam nobis sint ipsa exercitationem mollitia cumque unde voluptatum, deserunt rerum molestias expedita quam
					maiores. Porro?
				</p>

				<button class="button small-button small-screen-m-h-auto">MAKALELER</button>
			</div>

			<div class="img-wrapper w-100 o-hidden">
				<img src="/b5.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
			</div>
		</article>
	</div>

	<article
		class="flex big-screen-f-s-b big-screen-g-h-d big-screen-a-i-c small-screen-f-column-reverse small-screen-a-i-c small-screen-g-v-d o-hidden"
	>
		<div class="img-wrapper w-100 o-hidden">
			<img style:filter="brightness(1.5)" src="/h4.jpg" alt="" class="w-h-100 m-h-auto b-r-d" />
		</div>

		<div class="section-texts g-v-d flex f-column small-screen-t-a-c">
			<h2 class="section-title">Müşterilerimiz Değerli</h2>

			<p class="section-text">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas numquam vitae accusamus, nostrum distinctio,
				ea quam a minus tempora adipisci ipsum. Numquam voluptatum dolor tempora impedit, cum repudiandae eum voluptate!
			</p>

			<button class="button small-button small-screen-m-h-auto">BİZE ULAŞIN</button>
		</div>
	</article>
</section>

<style>
	img,
	.img-wrapper {
		max-width: 45rem;
		aspect-ratio: 720/480;
	}

	#texts-with-icons-wrapper {
		flex-wrap: wrap;
	}

	.text-icon {
		fill: var(--accent-color);
		width: 2rem;
		min-width: 2rem;

		height: min-content;
		margin-top: 0.25rem;
	}

	#texts-with-icons-wrapper > * {
		width: 17.5rem;
	}

	@media (min-width: 65.001em) {
		.section-texts {
			max-width: 30rem;
			min-width: 30rem;
		}

		#slider-homepage {
			aspect-ratio: 16/8;
		}
	}

	@media (max-width: 65em) {
		#slider-homepage {
			aspect-ratio: 16/16;
			max-height: 45rem;
		}

		.section-texts {
			max-width: calc(45rem - var(--main-h-padding) * 2);
		}

	}
</style>

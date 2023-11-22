<script>
	import { goto } from "$app/navigation";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getLocalizedLink } from "$lib/js/client/localization/localization.util.client";
	import { getStore, onContactClick, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");

	$: linkObjects = [
		{ name: L("homepage", $lang), link: getLocalizedLink("", $lang) },
		{ name: L("products", $lang), link: getLocalizedLink("products", $lang) },
		{ name: L("blog", $lang), link: getLocalizedLink("blog", $lang) },
		{ name: L("about-us", $lang), link: getLocalizedLink("about-us", $lang) },
		{ name: L("contact", $lang), link: getLocalizedLink("contact", $lang) },
	];

	onMount(_onMount);

	function _onMount() {
		for (const link of document.body.querySelectorAll("#footer-pages a"))
			link.addEventListener("click", async (event) => {
				event.preventDefault();

				const href = event.currentTarget.href;
				await performRippleEffectAndWait(event);

				goto(href);
			});
	}
</script>

<footer id="footer" class="secondary-background-color w-100vw" in:fly={TRANSITION_PAGE}>
	<div id="footer-content" class="grid page-max-w page-p-v-d p-h-d m-h-auto small-screen-j-i-c">
		<article class="flex f-column g-1dot5 small-screen-a-i-c">
			<picture class="d-contents">
				<source class="d-contents" srcset="/logo-dark.png" media="(prefers-color-scheme: dark)" />
				<img id="footer-logo" src="/logo.png" alt="Premimum Mermer Logo" />
			</picture>

			<p class="article-text small-screen-t-a-c">
				Silifke’nin köklü mermer fabrikalarından olan Premium Mermer Fabrikası, 2005 yılından bu yana son teknolojiyi
				kullanarak, doğaya zarar vermeden kaliteli mermer üretimi yapıyor.
			</p>
		</article>

		<div class="v-divider for-big-screen" />

		<article class="flex f-column j-c-r g-1dot5">
			<div class="flex g-1">
				<svg style:margin-top=".1rem" class="contact-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
					><path
						d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
					/></svg
				>

				<address>
					<p class="contact-item-content-text article-text">Organize Sanayi Bölgesi</p>
					<p class="contact-item-content-text article-text">4. Cadde, No: 1</p>
					<p class="contact-item-content-text article-text">Silifke, Mersin</p>
				</address>
			</div>

			<div class="flex g-1">
				<svg
					style:margin-top=".25rem"
					class="contact-item-icon"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					><path
						d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
					/></svg
				>

				<div>
					<a href="tel:+90 324 503 30 31" class="contact-item-content-text article-text">+90 324 503 30 31</a>
					<a href="tel:+90 544 888 73 23" class="contact-item-content-text article-text">+90 544 888 73 23</a>
				</div>
			</div>

			<div class="flex g-1">
				<svg style:margin-top=".1rem" class="contact-item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
					><path
						d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
					/></svg
				>

				<div>
					<a href="mailto:info@premiummermer.com.tr" class="contact-item-content-text article-text"
						>info@premiummermer.com.tr</a
					>
					<button class="contact-item-content-text article-text link-button" on:click={onContactClick}
						>İletişim Formu</button
					>
				</div>
			</div>
		</article>

		<article id="footer-pages" class="flex f-column g-dot5 t-a-c">
			<p id="footer-pages-t-hint" class="t-hint nowrap unimportant-text-color">SİTE HARİTASI</p>

			{#each linkObjects as linkObject}
				<a href={linkObject.link} class="link-button article-text">{linkObject.name}</a>
			{/each}
		</article>
	</div>
</footer>

<style>
	#footer-logo {
		max-width: 14rem;
		margin-top: -1.25rem;

		border: none;
	}

	.contact-item-icon {
		width: 1.5rem;
		min-width: 1.5rem;
		height: 1.4rem;

		fill: var(--accent-color);
	}

	@media (min-width: 65.001em) {
		#footer-content {
			grid-template-columns: 6fr auto 2fr 1fr;

			gap: var(--page-g);
		}

		#footer-pages {
			width: 5rem;
			text-align: right;
		}

		#footer-pages-t-hint {
			margin-top: 0.15rem;
			margin-bottom: 1rem;
			margin-left: -1.6rem;
		}
	}

	@media (max-width: 65em) {
		#footer-content {
			max-width: min(25rem, 75%);
			gap: calc(var(--main-v-padding) * 1.5);
		}

		#footer-pages {
			margin-top: 0.25rem;
		}
	}
</style>

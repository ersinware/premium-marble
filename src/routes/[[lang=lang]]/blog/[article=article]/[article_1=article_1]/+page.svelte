<script>
	import { goto } from "$app/navigation";
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { onMount } from "svelte";
	import { fly } from "svelte/transition";
	import SimilarArticles from "$lib/components/blog/article/SimilarArticles.svelte";

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

<section class="grid page-g">
	<div class="flex f-column g-v-d w-100 page-max-w m-h-auto t-a-c" in:fly={TRANSITION_PAGE}>
		<img src="/b1.jpg" alt="" id="poster-img" class="w-h-100 b-r-d" />

		<div class="content grid g-v-d page-max-w-smaller m-h-auto">
			<h1 class="smaller-section-title f-w-600">Mermer Seçimi Nasıl Yapılmalı?</h1>

			<p class="section-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque natus vel provident? Blanditiisme
				laborum saepe aliquid sequi? Culpa qui, recusandae temporibus molestias cum odio nam sunt ullam in magnam!
				Maiores, ab. Natus animi nostrum, non mollitia a consequatur neque.
			</p>

			<p class="section-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse nihil quam cumque omnis dolorum at labore
				impedit voluptates quaerat? Expedita corrupti animi accusamus officiis aliquid perferendis, consequatur sint
				molestiae! Blanditiis magni aliquid laboriosam nihil ea a. Sed explicabo impedit doloremque quam ea nam minima
				ad laborum id beatae? Pariatur sequi ducimus quos quasi ut in, aut dolorum unde. Porro! Tempore fugiat quibusdam
				ea enim cumque voluptate aperiam quis aut! Voluptatem, eveniet sapiente! Reprehenderit laborum, quas ex nostrum
				voluptates architecto quisquam libero in iste ratione explicabo officiis repudiandae, natus nisi. Eius fugiat in
				fugit earum enim voluptates nemo deleniti nulla quas rem soluta qui praesentium iure veritatis odio, illo
				doloremque consequuntur, voluptate necessitatibus dolorum. Asperiores doloremque earum provident ab laboriosam.
			</p>

			<p class="section-text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta cum officia aperiam, adipisci sint magnam atque
				explicabo similique possimus iusto tenetur tempora recusandae. Atque quisquam, laborum amet iusto voluptas id.
				Optio molestiae, voluptates consequatur nulla, numquam in corrupti quo beatae, commodi dolorem unde error
				officia laboriosam animi ratione repellat laudantium dolorum quia possimus eum ex dolores? Nobis aut aliquid
				modi! Delectus, molestias id mollitia quas veritatis dolore! Cupiditate eaque tempore veniam at id aperiam
				possimus repudiandae illo saepe quia! Autem doloribus quaerat sunt cumque ratione dicta deserunt dolorum
				repudiandae delectus! Temporibus animi libero maiores dolorum, tempore, et sit similique excepturi distinctio
				sint eos dolores cum quas, deleniti quae impedit ipsam! Temporibus odio dicta voluptatum nostrum illo sunt error
				quia dolores! Sunt eaque assumenda quod dolore deserunt unde voluptatum accusantium reprehenderit ullam sint.
				Reiciendis, rerum veritatis aperiam, eaque aliquam, porro saepe facere vero nesciunt id quam sapiente. Iure
				necessitatibus repudiandae tenetur. Optio ipsa provident maxime porro sed cum ullam ipsam ipsum numquam sit?
				Dolorum repudiandae nostrum maxime et, unde facere asperiores nemo corrupti voluptatum hic quaerat? Ipsam
				ratione.
			</p>

			<p class="section-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quidem quisquam. Ab vel beatae eius perspiciatis
				veniam nemo delectus commodi, obcaecati illo quibusdam officiis eligendi odit culpa assumenda. Aperiam, sint?
				Ullam quibusdam sequi ipsam numquam nulla ratione quam tempore tempora at ab dolore dolores porro ad voluptatem
				magnam praesentium mollitia, enim quaerat magni sed quidem fugiat rerum. Optio, sequi dicta? Officiis voluptates
				doloribus, facere minima pariatur nemo. Eaque tenetur officiis quos quas quia accusamus deleniti. Obcaecati,
				enim. Quos cupiditate ab adipisci iusto sit repellat laudantium, illum similique neque vel corrupti.
				Voluptatibus repellat quas explicabo animi beatae voluptates atque non ad expedita fugiat, odit assumenda fuga
				pariatur ipsam. Ab perspiciatis cupiditate reiciendis, expedita, iure corrupti excepturi sed sunt esse veniam
				rerum!
			</p>
		</div>
	</div>

	<SimilarArticles />
</section>

<style>
	#poster-img {
		aspect-ratio: 16/10;
		border: 1px var(--divider-color) solid;
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

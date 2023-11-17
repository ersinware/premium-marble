<script>
	import { TRANSITION_PAGE } from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore } from "$lib/js/client/util.client";
	import { fly } from "svelte/transition";

	const lang = getStore("lang");
</script>

<section class="flex f-column a-i-c g-v-d page-max-w t-a-c" in:fly={TRANSITION_PAGE}>
	<h1 class="section-title">{L("homepage", $lang)}</h1>
</section>

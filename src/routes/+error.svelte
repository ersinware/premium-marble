<script>
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore } from "$lib/js/client/util.client";

	const lang = getStore("lang");
</script>

<h1 class="section-title">{L("not-found", $lang)}</h1>
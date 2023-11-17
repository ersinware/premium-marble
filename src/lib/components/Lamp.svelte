<script>
	import { onLampClick } from "$lib/js/client/util.client";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<article id="lamp"
     class="lamp p-none w-h-100 p-f l-0 t-0"
     on:click={onLampClick}>
</article>
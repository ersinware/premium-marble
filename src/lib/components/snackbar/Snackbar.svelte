<script>
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { closeSnackbar } from "$lib/js/client/util.snackbars.client";
	import { fly } from "svelte/transition";

	export let id, content, actions;

	const bigScreen = getStore("bigScreen");

	async function onActionClick(event, action) {
		await performRippleEffectAndWait(event);

		closeSnackbar(id);
		action();
	}
</script>

<article
	class="wrapper flex a-i-c g-1dot5 b-r-d"
	in:fly={{ y: $bigScreen ? 16 : -16 }}
	out:fly={{ y: $bigScreen ? 16 : -16 }}
>
	<div class="content f-w-600 t-a-c">{content}</div>

	{#if actions}
		<article class="v-divider h-100" />

		<section class="actions flex g-1dot25">
			{#each actions as { name, action, positive }}
				<button class="action pointer" class:positive on:click={(event) => onActionClick(event, action)}>
					{name}
				</button>
			{/each}
		</section>
	{/if}
</article>

<style>
	.wrapper {
		padding: 0.6rem 1.25rem;

		background-color: var(--snackbar-background-color, var(--positive-color));
	}

	.content {
		line-height: 1rem;

		color: var(--content-color, white);

		font-size: 0.8rem;
		/*letter-spacing: -.5px;*/
	}

	.v-divider {
		height: 0.75rem;
		background-color: var(--content-divider-color);
	}

	.action {
		line-height: 1.25rem;

		color: var(--negative-button-color, white);

		font-family: Montserrat, sans-serif;
		font-weight: 700;
		letter-spacing: 0.1rem;
		font-size: 0.75rem;

		white-space: nowrap;
	}

	.positive {
		color: var(--positive-button-color, white);
	}

	@media (max-width: 65em) {
		.content {
			font-size: 0.75rem;
		}
	}
</style>

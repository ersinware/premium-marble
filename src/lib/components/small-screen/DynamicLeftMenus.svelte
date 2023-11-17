<script>
	import { LEFT_MENU_TRANSITION_DURATION, LEFT_MENU_TRANSITION_X } from "$lib/js/client/constants.client";
	import { getStore } from "$lib/js/client/util.client";
	import { fly } from "svelte/transition";

	const openDynamicLeftMenus = getStore("openDynamicLeftMenus");
</script>

{#each $openDynamicLeftMenus as menu}
	<section
		class="left-menu-wrapper dynamic-left-menu-wrapper p-f t-0 w-h-100 p-h-d o-y-scroll"
		transition:fly={{ x: LEFT_MENU_TRANSITION_X, opacity: 0, duration: LEFT_MENU_TRANSITION_DURATION }}
	>
		<svelte:component this={menu.component} {...menu.props} />
	</section>
{/each}

<style>
	.dynamic-left-menu-wrapper {
		left: 0;
	}
</style>

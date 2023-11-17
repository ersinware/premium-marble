<script>
	import { MODAL_TRANSITION_DURATION, MODAL_TRANSITION_Y } from "$lib/js/client/constants.client";
	import { getStore } from "$lib/js/client/util.client";
	import { fly } from "svelte/transition";

	const openDynamicModals = getStore("openDynamicModals"),
		bigScreen = getStore("bigScreen");
</script>

{#each $openDynamicModals as modal (modal.id)}
	<div
		style={modal.modalWrapperStyle ?? ""}
		class="modal-wrapper dynamic-modal-wrapper p-f small-screen-w-100 small-screen-max-w-phone"
		in:fly={modal.modalTransition ?? {
			y: $bigScreen ? -1 * MODAL_TRANSITION_Y : MODAL_TRANSITION_Y,
			duration: MODAL_TRANSITION_DURATION,
		}}
		out:fly={modal.modalTransition ?? {
			y: $bigScreen ? -1 * MODAL_TRANSITION_Y : MODAL_TRANSITION_Y,
			duration: MODAL_TRANSITION_DURATION,
		}}
		on:introstart={modal.onIntroStart}
		on:introend={modal.onIntroEnd}
		on:outrostart={modal.onOutroStart}
		on:outroend={modal.onOutroEnd}
	>
		<svelte:component this={modal.component} {...modal.props} />
	</div>
{/each}

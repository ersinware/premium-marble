<script>
	import { browser } from "$app/environment";
	import {
		MODAL_PROGRESS_BAR_NAVIGATED_TRANSITION_DURATION,
		MODAL_TRANSITION_DURATION,
	} from "$lib/js/client/constants.client";
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore, performRippleEffect, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { closeAllModals } from "$lib/js/client/util.modals.client.common";
	import { showSnackbar } from "$lib/js/client/util.snackbars.client";
	import {
		formatPhoneNumber,
		onValidityChange,
		validateEmailAddress,
		validatePhoneNumber,
	} from "$lib/js/client/util.validations.client";
	import { waitFor } from "$lib/js/common/util.common";
	import { onDestroy } from "svelte";
	import Progress from "../Progress.svelte";
	import InputText from "../inputs/InputText.svelte";

	const arrFormValid = new Array(2),
		holder = getStore("holder"),
		dontInterruptModal = getStore("dontInterruptModal"),
		lang = getStore("lang");

	let formValid, form, state;

	$: formValid = onValidityChange(arrFormValid);

	if (browser) onDestroy(_onDestroy);

	function _onDestroy() {
		$dontInterruptModal = false;
	}

	async function onCancel(event) {
		await performRippleEffectAndWait(event);
		closeAllModals();
	}

	async function onSend(event) {
		$dontInterruptModal = true;
		state = "navigating";

		performRippleEffect(event);

		const response = await fetch("/api/contact", {
			method: "PUT",
			body: JSON.stringify({
				...$holder,
				email: form.querySelector("#email").value,
				phone: form.querySelector("#phone").value,
			}),
		});

		if (response.status === 200) onSuccess();
		else onError((await response.json())?.error);
	}

	async function onSuccess() {
		state = "navigated";
		await waitFor(MODAL_PROGRESS_BAR_NAVIGATED_TRANSITION_DURATION);

		closeAllModals();
		await waitFor(MODAL_TRANSITION_DURATION);

		showSnackbar({
			content: L('delivered-successfuly', $lang),
			backgroundColor: "var(--positive-color)",
		});
	}

	async function onError(error) {
		state = "navigated";
		await waitFor(MODAL_PROGRESS_BAR_NAVIGATED_TRANSITION_DURATION);

		showSnackbar({
			content: error ?? L('error-occured', $lang),
			backgroundColor: "var(--error-color)",
		});

		$dontInterruptModal = false;
	}
</script>

<form
	class="modal-content-wrapper flex f-column a-i-c modal-g-v-d t-a-c big-screen-small-modal-content-wrapper-w"
	bind:this={form}
>
	<Progress bind:state forModal />

	<div>
		<h2 class="modal-title">{L("contact-modal-three-title", $lang)}</h2>
		<div class="t-hint modal-t-hint unimportant-text-color">3/3</div>
	</div>

	<p class="modal-text small-modal-text-max-w m-h-auto">
		{L("contact-modal-three-description", $lang)}
	</p>

	<InputText
		type="email"
		title={L("input-title-email", $lang)}
		name="email"
		value={$holder.email}
		tText={L("input-validation-text-email", $lang)}
		validate={validateEmailAddress}
		bind:disable={$dontInterruptModal}
		bind:valid={arrFormValid[0]}
	/>

	<InputText
		type="tel"
		title={L("input-title-phone", $lang)}
		name="phone"
		value={$holder.phone}
		tText={L("input-validation-text-phone", $lang)}
		format={formatPhoneNumber}
		validate={validatePhoneNumber}
		enterKeyHint="done"
		bind:valid={arrFormValid[1]}
		bind:disable={$dontInterruptModal}
		optional
	/>

	<div class="modal-buttons flex j-c-c modal-buttons-g">
		<button
			type="button"
			disabled={$dontInterruptModal}
			class="nude-button modal-button modal-negative-button"
			class:disabled-nude-button={$dontInterruptModal}
			on:click={onCancel}
		>
			{L("cancel", $lang)}
		</button>

		<button
			type="button"
			disabled={!formValid || $dontInterruptModal}
			class:disabled-nude-button={!formValid || $dontInterruptModal}
			class="nude-button modal-button modal-positive-button"
			on:click={onSend}
		>
			{L("send", $lang)}
		</button>
	</div>
</form>

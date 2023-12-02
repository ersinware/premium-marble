<script>
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { closeLastModal, openModal } from "$lib/js/client/util.modals.client.common";
	import { formatThoughts, onValidityChange, validateThoughts } from "$lib/js/client/util.validations.client";
	import TextArea from "../inputs/TextArea.svelte";
	import ContactModalTwo from "./ContactModalTwo.svelte";

	const arrFormValid = new Array(1),
		holder = getStore("holder"),
		lang = getStore("lang");

	let formValid, form;

	$: formValid = onValidityChange(arrFormValid);

	async function onCancel(event) {
		await performRippleEffectAndWait(event);

		closeLastModal();
	}

	async function onContinue(event) {
		await performRippleEffectAndWait(event);

		$holder.thoughts = form.querySelector("#thoughts").value;
		openModal({ component: ContactModalTwo, addToBackstack: true });
	}
</script>

<form
	class="modal-content-wrapper flex f-column a-i-c modal-g-v-d t-a-c big-screen-small-modal-content-wrapper-w"
	bind:this={form}
>
	<div>
		<h2 class="modal-title">{@html L("contact-modal-one-title", $lang)}</h2>
		<div class="t-hint modal-t-hint unimportant-text-color">1/3</div>
	</div>

	<p class="modal-text small-modal-text-max-w m-h-auto">
		{L("contact-modal-one-description", $lang)}
	</p>

	<TextArea
		wrapperClasses="small-modal-input-max-w"
		type="text"
		title={L("input-title-thoughts", $lang)}
		name="thoughts"
		value={$holder.thoughts}
		tText={L("input-validation-text-thoughts", $lang)}
		rows={13}
		format={formatThoughts}
		validate={validateThoughts}
		enterKeyHint="done"
		bind:valid={arrFormValid[0]}
	/>

	<div class="modal-buttons flex j-c-c modal-buttons-g">
		<button type="button" class="nude-button modal-button modal-negative-button" on:click={onCancel}
			>{L("cancel", $lang)}</button
		>

		<button
			type="button"
			disabled={!formValid}
			class="nude-button modal-button modal-positive-button"
			on:click={onContinue}
			class:disabled-nude-button={!formValid}
		>
			{L("continue", $lang)}
		</button>
	</div>
</form>

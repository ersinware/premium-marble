<script>
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { closeLastModal, openModal } from "$lib/js/client/util.modals.client.common";
	import { formatThoughts, onValidityChange, validateThoughts } from "$lib/js/client/util.validations.client";
	import TextArea from "../inputs/TextArea.svelte";
	import ContactModalTwo from "./ContactModalTwo.svelte";

	const arrFormValid = new Array(1),
		holder = getStore("holder");

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
		<h2 class="modal-title">Önerilerinizi Merak <br /> Ediyoruz</h2>
		<div class="t-hint modal-t-hint unimportant-text-color">1/3</div>
	</div>

	<p class="modal-text small-modal-text-max-w m-h-auto">
		Kullanıcılarımızın önerilerini dikkate alıyor ve deneyiminizi daha da güzelleştirmek istiyoruz.
	</p>

	<TextArea
		wrapperClasses="small-modal-input-max-w"
		type="text"
		title="DÜŞÜNCELERİNİZ"
		name="thoughts"
		value={$holder.thoughts}
		tText="En az 10, en fazla 500 karakter olmalı"
		rows={13}
		format={formatThoughts}
		validate={validateThoughts}
		enterKeyHint="done"
		bind:valid={arrFormValid[0]}
	/>

	<div class="modal-buttons flex j-c-c modal-buttons-g">
		<button type="button" class="nude-button modal-button modal-negative-button" on:click={onCancel}> VAZGEÇ </button>

		<button
			type="button"
			disabled={!formValid}
			class="nude-button modal-button modal-positive-button"
			on:click={onContinue}
			class:disabled-nude-button={!formValid}
		>
			DEVAM ET
		</button>
	</div>
</form>

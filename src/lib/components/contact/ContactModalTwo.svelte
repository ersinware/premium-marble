<script>
	import { getStore, performRippleEffectAndWait } from "$lib/js/client/util.client";
	import { closeAllModals, openModal } from "$lib/js/client/util.modals.client.common";
	import {
		formatName,
		formatSurname,
		onValidityChange,
		validateName,
		validateSurname,
	} from "$lib/js/client/util.validations.client";
	import InputText from "../inputs/InputText.svelte";
	import ContactModalThree from "./ContactModalThree.svelte";

	const arrFormValid = new Array(2),
		holder = getStore("holder");

	let formValid, form;

	$: formValid = onValidityChange(arrFormValid);

	async function onCancel(event) {
		await performRippleEffectAndWait(event);

		closeAllModals();
	}

	async function onContinue(event) {
		await performRippleEffectAndWait(event);

		$holder.name = form.querySelector("#name").value;
		$holder.surname = form.querySelector("#surname").value;

		openModal({ component: ContactModalThree });
	}
</script>

<form
	class="modal-content-wrapper flex f-column a-i-c modal-g-v-d t-a-c big-screen-small-modal-content-wrapper-w"
	bind:this={form}
>
	<div>
		<h2 class="modal-title">Kişisel Bilgileriniz</h2>
		<div class="t-hint modal-t-hint unimportant-text-color">2/3</div>
	</div>

	<p class="modal-text small-modal-text-max-w m-h-auto">Size hitap edebilmek için adınıza ihtiyacımız var.</p>

	<InputText
		inputClasses="t-capitalize"
		type="text"
		title="ADINIZ"
		name="name"
		value={$holder.name}
		tText="En az 2, en fazla 25 karakter olmalı"
		format={formatName}
		validate={validateName}
		bind:valid={arrFormValid[0]}
	/>

	<InputText
		inputClasses="t-capitalize"
		type="text"
		title="SOYADINIZ"
		name="surname"
		value={$holder.surname}
		tText="En az 2, en fazla 25 karakter olmalı"
		format={formatSurname}
		validate={validateSurname}
		enterKeyHint="done"
		bind:valid={arrFormValid[1]}
		optional
	/>

	<div class="modal-buttons flex j-c-c modal-buttons-g">
		<button type="button" class="nude-button modal-button modal-negative-button" on:click={onCancel}> VAZGEÇ </button>

		<button
			type="button"
			disabled={!formValid}
			class:disabled-nude-button={!formValid}
			class="nude-button modal-button modal-positive-button"
			on:click={onContinue}
		>
			DEVAM ET
		</button>
	</div>
</form>

<script>
	import { L } from "$lib/js/client/localization/localization.translations.data.client";
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
		holder = getStore("holder"),
		lang = getStore("lang");

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
		<h2 class="modal-title">{L("contact-modal-two-title", $lang)}</h2>
		<div class="t-hint modal-t-hint unimportant-text-color">2/3</div>
	</div>

	<p class="modal-text small-modal-text-max-w m-h-auto">{L("contact-modal-two-description", $lang)}</p>

	<InputText
		inputClasses="t-capitalize"
		type="text"
		title={L("input-title-name", $lang)}
		name="name"
		value={$holder.name}
		tText={L("input-validation-text-name-and-surname", $lang)}
		format={formatName}
		validate={validateName}
		bind:valid={arrFormValid[0]}
	/>

	<InputText
		inputClasses="t-capitalize"
		type="text"
		title={L("input-title-surname", $lang)}
		name="surname"
		value={$holder.surname}
		tText={L("input-validation-text-name-and-surname", $lang)}
		format={formatSurname}
		validate={validateSurname}
		enterKeyHint="done"
		bind:valid={arrFormValid[1]}
		optional
	/>

	<div class="modal-buttons flex j-c-c modal-buttons-g">
		<button type="button" class="nude-button modal-button modal-negative-button" on:click={onCancel}> {L('cancel', $lang)} </button>

		<button
			type="button"
			disabled={!formValid}
			class:disabled-nude-button={!formValid}
			class="nude-button modal-button modal-positive-button"
			on:click={onContinue}
		>
			{L('continue', $lang)}
		</button>
	</div>
</form>

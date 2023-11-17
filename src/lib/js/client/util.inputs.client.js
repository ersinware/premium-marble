import { browser } from "$app/environment";
import { get } from "svelte/store";
import { anyOpenModal, closeLastModal } from "./util.modals.client.common";

if (browser) addEscapeAndEnterListener();

let dontInterruptModal,
	escapeInterceptors = [];

export function init(_dontInterruptModal) {
	dontInterruptModal = _dontInterruptModal;
}

export function registerEscapeInterceptor(id, f) {
	escapeInterceptors.push({ id, f });
}

export function unregisterEscapeInterceptor(id) {
	escapeInterceptors = escapeInterceptors.filter((element) => element.id !== id);
}

/* */

export function areEqualStrings(valueOne, valueTwo) {
	if (!valueOne || !valueTwo) return false;

	return (
		valueOne
			.toString()
			.trim()
			.toLowerCase()
			.localeCompare(valueTwo.toString().trim().toLowerCase(), undefined, { sensitivity: "accent" }) === 0
	);
}

export function addEscapeAndEnterListener() {
	if (document.onkeydown) return;

	document.onkeydown = (event) => {
		const escape = event.key === "Escape" || event.keyCode === 27,
			enter = event.key === "Enter" || event.keyCode === 13;

		if (escape) {
			if (escapeInterceptors.length > 0) {
				escapeInterceptors[escapeInterceptors.length - 1].f();

				return;
			}
            
			if (!get(dontInterruptModal) && anyOpenModal()) closeLastModal();

			return;
		}

		if (enter) {
			focusNext();
			event.preventDefault();
		}
	};
}

export function focusNext(plusOne) {
	const inputs = Array.prototype.slice.call(document.querySelectorAll("input:not(:disabled), textarea:not(:disabled)"));

	if (!inputs) return;

	const currInput = document.activeElement;
	const currInputIndex = inputs.indexOf(currInput);
	let nextInputIndex = currInputIndex + 1;

	if (plusOne) nextInputIndex++;

	const input = inputs[nextInputIndex];
	if (nextInputIndex > inputs.length - 1) {
		currInput?.blur();

		return;
	}

	input.focus();
}

/* */

// inner object desteklemiyor
export function trackFormForDifference(form, dataAtFirst, callback) {
	const _dataAtFirst = structuredClone(dataAtFirst);

	for (const property in _dataAtFirst) _dataAtFirst[property] = _dataAtFirst[property].toString();

	form.addEventListener("input", () => {
		check();
	});

	check();

	function check() {
		let currentData = {};

		for (const node of form.querySelectorAll("input, textarea")) currentData[node.id] = node.value;

		callback(areDataSetsSame(_dataAtFirst, currentData));
	}
}

function areDataSetsSame(dataAtFirst, currentData) {
	for (const property in currentData) if (!areEqualStrings(dataAtFirst[property], currentData[property])) return false;

	return true;
}

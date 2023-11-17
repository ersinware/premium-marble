import { browser } from "$app/environment";

export function onValidityChange(arrFormValid) {
	if (!browser) return false;

	return allTrue(arrFormValid);
}

function allTrue(arr) {
	return !arr.includes(false) && !arr.includes(undefined);
}

/* */

export function formatOnyLetter(value, newLetter, maxLength) {
	if (maxLength && value.length > maxLength) return { preventDefault: true };

	const charCode = newLetter.charCodeAt(0);
	if (
		(charCode < 65 || charCode > 90) && // A-Z
		(charCode < 97 || charCode > 122) && // a-z
        (charCode < 192 || charCode > 591)  // all other letters
	)
		return { preventDefault: true };

	return;
}

export function formatOnyLetterWithSpace(value, newLetter, maxLength) {
	if (maxLength && value.length > maxLength) return { preventDefault: true };

	const charCode = newLetter.charCodeAt(0);
	if (
		(charCode < 65 || charCode > 90) && // A-Z
		(charCode < 97 || charCode > 122) && // a-z
		(charCode < 192 || charCode > 591) && // all other letters
		charCode !== 32 // space
	)
		return { preventDefault: true };

	return;
}

export function formatOnlyNumber(value, newLetter, maxLength) {
	if (value.length > maxLength) return { preventDefault: true };

	if (!/^[0-9]$/.test(newLetter)) return { preventDefault: true };
}

export function formatMaxLength(value, maxLength) {
	if (value.length > maxLength) return { preventDefault: true };
}

/* */

export function validate(minLength, maxLength, value, mayContainSpace, mayContainNumber, mayContainDot) {
	const length = value.length;
	if (length < minLength || length > maxLength) return false;

	for (let i = 0; i < length; i++) {
		const charCode = value.charCodeAt(i);
		if (
			(charCode < 65 || charCode > 90) && // A-Z
			(charCode < 97 || charCode > 122) && // a-z
			(!mayContainNumber || charCode < 48 || charCode > 57) && // 0-9
			(!mayContainSpace || charCode !== 32) && // space
			(!mayContainDot || charCode !== 46) && // .
			(charCode < 192 || charCode > 591) // all other letters
		)
			return false;
	}

	return true;
}

export function validateNumber(minLength, maxLength, value) {
	return /^\d+$/.test(value) && value.length >= minLength && value.length <= maxLength;
}

/* */

export function formatThoughts(value, newLetter) {
    return formatMaxLength(value, 500);
}

export function validateThoughts(value) {
    return value.length >= 10 && value.length <= 500;
}

export function formatName(value, newLetter) {
    return formatOnyLetterWithSpace(value, newLetter, 25);
}

export function validateName(value) {
    return validate(2, 25, value, true);
}

export function formatSurname(value, newLetter) {
    return formatOnyLetter(value, newLetter, 25);
}

export function validateSurname(value) {
    return validate(2, 25, value);
}

export function validateEmailAddress(value) {
	return /^\w+([\._-]?\w+)*@\w+([\._-]?\w+)*(\.\w{2,3})+$/.test(value);
}

/* */

export function formatPhoneNumber(value, newLetter) {
	const phoneNumberBreakpoints = [3, 7, 10];

	if (!/^[0-9]$/.test(newLetter)) return { preventDefault: true };

	if (value.length > 13) return { preventDefault: true };

	for (const breakpoint of phoneNumberBreakpoints) {
		const newPhoneNumber = getNewPhoneNumber(value, breakpoint);

		if (newPhoneNumber) return { newValue: newPhoneNumber };
	}
}

function getNewPhoneNumber(value, breakpoint) {
	if (value.length > breakpoint) {
		const target = value[breakpoint];
		if (target !== " ") return value.substring(0, breakpoint) + " " + target;
	}
}

export function validatePhoneNumber(value) {
	if (value[0] !== "5") return false;

	return /^[0-9 ]{13}$/.test(value);
}

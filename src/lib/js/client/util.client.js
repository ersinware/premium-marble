import ContactModal from "$lib/components/contact/ContactModal.svelte";
import { getContext, setContext } from "svelte";
import { get, writable } from "svelte/store";
import { waitFor } from "../common/util.common";
import { RIPPLE_TYPE_ZERO_DURATION, WAIT_DURATION_FOR_RIPPLE_TYPE_ONE } from "./constants.client";
import { anyOpenLeftMenu, closeLastLeftMenu } from "./util.left.menus.client";
import { anyOpenModal, closeLastModal, openModal } from "./util.modals.client.common";

let rippleTargetInfo, dontInterruptModal,
    lastLampClickedAt = Date.now()

export function init(_rippleTargetInfo, _dontInterruptModal) {
    rippleTargetInfo = _rippleTargetInfo;
    dontInterruptModal = _dontInterruptModal

    initZeroTimeout();
}

function initZeroTimeout() {
    const timeouts = [],
        messageName = "zero-timeout-message";

    function setZeroTimeout(f) {
        timeouts.push(f);
        window.postMessage(messageName, "*");
    }

    function handleMessage(event) {
        if (event.source !== window || event.data !== messageName) return;

        event.stopPropagation();

        if (timeouts.length > 0) timeouts.shift()();
    }

    window.addEventListener("message", handleMessage, true);
    window.setZeroTimeout = setZeroTimeout;
}

export function getStore(key) {
    return getContext(key);
}

export function createStore(key, defaultValue) {
    setContext(key, writable(defaultValue));
}

/* */

export function performRippleEffect(
    event,
    rippleType = 1,
    rippleColor = "var(--ripple-color)",
    borderRadius = "var(--border-radius)"
) {
    const rect = event.currentTarget.getBoundingClientRect();

    rippleTargetInfo.set({
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
        clickX: event.clientX,
        clickY: event.clientY,
        rippleType,
        rippleColor,
        borderRadius,
    });
}

export async function performRippleEffectAndWait(event) {
    performRippleEffect(event);
    await waitFor(WAIT_DURATION_FOR_RIPPLE_TYPE_ONE);
}

export async function performRippleEffectForButtonAndWait(event) {
    performRippleEffect(event, 0, "var(--button-ripple-color)", "1rem");
    await waitFor(RIPPLE_TYPE_ZERO_DURATION);
}

/* */

export function openLamp() {
    document.querySelectorAll('[data-scrollable]').forEach(node => node.classList.remove('o-y-hidden'))
    document.getElementById('lamp').classList.remove('close-lamp')
}

export function closeLamp() {
    document.querySelectorAll('[data-scrollable]').forEach(node => node.classList.add('o-y-hidden'))
    document.getElementById('lamp').classList.add('close-lamp')
}

export async function onLampClick(event) {
    const now = Date.now();

    if (now - lastLampClickedAt < 750) return;

    lastLampClickedAt = now;

    if (anyOpenLeftMenu()) {
        await performRippleEffectAndWait(event)
        closeLastLeftMenu()

        return
    }

    if (!get(dontInterruptModal) && anyOpenModal()) {
        await performRippleEffectAndWait(event);

        if (anyOpenModal()) closeLastModal();
    }
}

/* */

export async function onContactClick(event) {
    await performRippleEffectAndWait(event)

    openModal({ component: ContactModal, addToBackstack: true })
}
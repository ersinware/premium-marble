import { get } from "svelte/store";
import { randomID } from "../common/util.common";
import { closeLamp, openLamp } from "./util.client";

const openStaticModals = [];

let openModals, openDynamicModals, activeInnerModal, holder;

export function init(_openModals, _openDynamicModals, _activeInnerModal, _holder) {
    openModals = _openModals;
    openDynamicModals = _openDynamicModals;
    activeInnerModal = _activeInnerModal;
    holder = _holder;
}

export function openModal(modal) {
    const temp = get(openModals);

    if (temp.length === 0) holder.set({});

    if (modal.static) openStaticModal(modal.id);
    else if (modal.inner) openInnerModal(modal);
    else openDynamicModal(modal);

    temp.unshift(modal);
    openModals.set(temp);

    if (modal.inner) return;

    if (temp.length === 1) closeLamp();
    else closeCurrentModal();
}

export function closeLastModal() {
    const temp = get(openModals),
        modal = temp.shift();

    if (modal.static) closeLastStaticModal(true);
    else if (modal.inner) closeInnerModal();
    else closeLastDynamicModal(true);

    openModals.set(temp);

    if (modal.inner) return;

    if (temp.length === 0) {
        openLamp();
        holder.set({});
    } else openPreviousModal();
}

export function anyOpenModal() {
    return get(openModals).length > 0;
}

function closeCurrentModal() {
    const temp = get(openModals);

    const modal = temp[1];
    if (!modal.addToBackstack) openModals.set(temp.filter((_entry) => _entry !== modal));

    if (modal.static) closeLastStaticModal();
    else closeLastDynamicModal();
}

function openPreviousModal() {
    const modal = get(openModals)[0];
    if (modal.static) openStaticModal(modal.id);
    else openDynamicModal(modal);
}

function openStaticModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("block");
    setTimeout(() => modal.classList.add("open-static-modal"), 0);

    openStaticModals.unshift(id);
}

function closeLastStaticModal(fromStart) {
    const id = fromStart ? openStaticModals.shift() : openStaticModals.pop();
    const modal = document.getElementById(id);
    modal.classList.remove("open-static-modal");
    setTimeout(() => modal.classList.remove("block"), 250);
}

function openDynamicModal(modal) {
    if (!modal.id) modal.id = randomID();

    const temp = get(openDynamicModals);
    temp.unshift(modal);
    openDynamicModals.set(temp);
}

function closeLastDynamicModal(fromStart) {
    const temp = get(openDynamicModals);

    if (fromStart) temp.shift();
    else temp.pop();

    openDynamicModals.set(temp);
}

function openInnerModal(modal) {
    activeInnerModal.set(modal);
}

function closeInnerModal() {
    activeInnerModal.set(null);
}

export function closeAllModals() {
    while (get(openModals).length > 0) closeLastModal();
}

export function addToBackstack(id) {
    for (const modal of get(openModals))
        if (modal.id === id) {
            modal.addToBackstack = true;

            return;
        }
}

export function removeFromBackstack(id) {
    for (const modal of get(openModals))
        if (modal.id === id) {
            modal.addToBackstack = false;

            return;
        }
}

export function removeModal(id) {
    openModals.set(get(openModals).filter((modal) => modal.id !== id));
}

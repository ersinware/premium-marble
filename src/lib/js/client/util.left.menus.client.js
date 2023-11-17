import { get } from "svelte/store";
import { closeLamp, openLamp } from "./util.client";

let
    openLeftMenus,
    openDynamicLeftMenus

export function init(_openLeftMenus, _openDynamicLeftMenus) {
    openLeftMenus = _openLeftMenus
    openDynamicLeftMenus = _openDynamicLeftMenus
}

export function openLeftMenu(menu) {
    const temp = get(openLeftMenus)
    if (temp.length === 0)
        closeLamp()

    openDynamicLeftMenu(menu)

    temp.push(menu)
    openLeftMenus.set(temp)
}

export function closeLastLeftMenu(dontOpenLamp) {
    const temp = get(openLeftMenus)
    if (!dontOpenLamp && temp.length === 1)
        openLamp()

    temp.pop()

    closeLastDynamicLeftMenu()

    openLeftMenus.set(temp)
}

export function anyOpenLeftMenu() {
    return get(openLeftMenus)?.length > 0
}

function openDynamicLeftMenu(menu) {
    const temp = get(openDynamicLeftMenus)
    temp.push(menu)
    openDynamicLeftMenus.set(temp)
}

function closeLastDynamicLeftMenu() {
    const temp = get(openDynamicLeftMenus)
    temp.pop()
    openDynamicLeftMenus.set(temp)
}

export function closeAllLeftMenus() {
    while (get(openLeftMenus).length > 0)
        closeLastLeftMenu()
}
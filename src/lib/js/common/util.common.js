import { browser } from "$app/environment";

export function waitFor(delay) {
    return new Promise(resolve => setTimeout(resolve, delay))
}

export function yieldToMain() {
    if (browser && setZeroTimeout)
        return new Promise(resolve => setZeroTimeout(() => queueMicrotask(resolve)))
    else
        return new Promise(resolve => setTimeout(() => queueMicrotask(resolve), 0))
}

export function getPaths(pathname) {
    return pathname.split('/').filter(value => value)
}

export function randomID() {
    const random = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };

    return random() + random() + "-" + random() + "-" + random() + "-" + random() + "-" + random() + random() + random();
}
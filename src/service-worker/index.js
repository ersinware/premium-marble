import { ERROR_NO_INTERNET_CONNECTION, ONLINE_BACK } from "$lib/js/common/constants.common";
import { build, files, version } from "$service-worker";

const CACHE = `cache-${version}`,
    ASSETS = [...build, ...files];

let cache,
    offline = false;

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);
self.addEventListener("fetch", onFetch);

function onInstall(event) {
    event.waitUntil(self.skipWaiting());
    event.waitUntil(addFilesToCache());
}

async function onActivate(event) {
    event.waitUntil(enableNavigationPreload());
    event.waitUntil(deleteOldCaches());
    event.waitUntil(self.clients.claim());

    async function enableNavigationPreload() {
        if (self.registration.navigationPreload) await self.registration.navigationPreload.enable();
    }
}

function onFetch(event) {
    const url = event.request.url;
    if (url.includes("extension") || !(url.indexOf("http") === 0)) return;

    event.respondWith(respond(event));
}

async function respond(event) {
    const url = new URL(event.request.url)

    if (ASSETS.includes(url.pathname)) return (await getCache()).match(url);

    const preloadResponse = await getPreloadResponse(event);
    if (preloadResponse) return preloadResponse;

    return await getResponse(event.request);
}

async function getPreloadResponse(event) {
    try {
        return await getPreloadResponse();
    } catch (reason) { }

    async function getPreloadResponse() {
        const preloadResponse = await event.preloadResponse;

        if (!preloadResponse) return;

        const request = event.request;
        if (preloadResponse.status === 200 && request.method === "GET") {
            const cache = await getCache();
            cache.put(request, preloadResponse.clone());
        }

        return preloadResponse;
    }
}

async function getResponse(request) {
    let clonedRequest;
    const cache = await getCache();

    try {
        if (offline) {
            try {
                clonedRequest = structuredClone(request);

                return await getResponse(true);
            } catch (error) {
                try {
                    const response = await getResponse(false, true);

                    await onOnline();

                    return response;
                } catch (error) {
                    const response = await cache.match(request);
                    if (response) return response;

                    return getOfflineResponse();
                }
            }
        } else return await getResponse();
    } catch (error) {
        await onOffline();

        const response = await cache.match(request);
        if (response) return response;

        return getOfflineResponse();
    }

    async function getResponse(onlyHTTPCache, noCache) {
        const _request = clonedRequest ?? request;
        let options = {};

        if (onlyHTTPCache) options = { mode: "same-origin", cache: "only-if-cached" };
        else if (noCache) options = { cache: "no-store" };

        const response = await fetch(_request, options);
        if (response.status === 200 && _request.method === "GET") cache.put(_request, response.clone());

        return response;
    }
}

/* */

async function addFilesToCache() {
    const cache = await getCache();
    await cache.addAll(ASSETS);
}

async function deleteOldCaches() {
    for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
}

/* */

async function getCache() {
    if (cache) return cache;

    cache = await caches.open(CACHE);

    return cache;
}

function getOfflineResponse() {
    return new Response(JSON.stringify({ error: "İnternet bağlantınız olmadığından işlem gerçekleştirilemiyor." }), {
        status: 404,
        statusText: ERROR_NO_INTERNET_CONNECTION,
    });
}

/* */

async function onOnline() {
    if (!offline) return;

    offline = false;
    await sendMessageToClient({ type: ONLINE_BACK });
}

async function onOffline() {
    if (offline) return;

    await sendMessageToClient({ type: ERROR_NO_INTERNET_CONNECTION });
    offline = true;
}

/* */

async function sendMessageToClient(message) {
    const clients = await self.clients.matchAll();
    clients.forEach((client) => client.postMessage(message));
}
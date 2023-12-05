import { getLocalizedURL, init as initLocalizationUtil } from '$lib/js/common/localization/localization.util.common';
import { getPaths } from '$lib/js/common/util.common';
import { paths, searchParams, searchValues } from '$lib/js/server/localization/localization.constants.server';
import { getLanguageByHeader } from '$lib/js/server/localization/localization.util.server';
import { initMail } from '$lib/js/server/util.mail.server';
import { redirect } from '@sveltejs/kit';
import { minify } from 'html-minifier';
import { init as initLocalization } from './lib/js/server/localization/localization.constants.util.server';

const minificationOptions = {
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    decodeEntities: true,
    html5: true,
    ignoreCustomComments: [/^#/],
    minifyCSS: true,
    minifyJS: true,
    removeAttributeQuotes: true,
    removeComments: false, // some hydration code needs comments, so leave them in
    removeOptionalTags: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortAttributes: true,
    sortClassName: true
}

init()

function init() {
    initLocalization()
    initLocalizationUtil(paths, searchParams, searchValues)
    initMail()
}

export async function handle({ event, resolve }) {
    const
        pathname = decodeURI(event.url.pathname),
        paths = getPaths(pathname),
        firstPath = paths[0]

    console.log(pathname + event.url.search);

    if (firstPath && (firstPath === 'api' || (firstPath.includes('sitemap'))))
        return await resolve(event)

    event.locals.lang = getLang(event)

    if (!handleURL(paths, event, pathname))
        return await resolve(event)

    let page = ''
    return await resolve(event, {
        transformPageChunk: ({ html, done }) => {
            page += html

            if (done)
                return minify(page.replace('%lang%', event.locals.lang), minificationOptions)
        }
    })
}

function getLang(event) {
    const cookieLang = event.cookies.get('lang')
    if (cookieLang)
        return cookieLang

    return getLanguageByHeader(event.request.headers.get('Accept-Language'))
}

function handleURL(paths, event, pathname) {
    let localizedURL

    try {
        localizedURL = getLocalizedURL(paths, event.url.searchParams, event.locals.lang)
    } catch (error) {
        console.error('error in handleURL > getLocalizedURL, will be handled manually on load functions')
        console.error(error)
        event.locals.manualError = error

        return false
    }

    const requestURL = pathname + decodeURI(event.url.search)
    if (localizedURL !== requestURL) {
        console.log('localizedURL:', localizedURL);
        throw redirect(307, encodeURI(localizedURL))
    }

    return true
}

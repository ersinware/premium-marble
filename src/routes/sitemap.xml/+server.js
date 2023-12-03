import { PUBLIC_DEFAULT_LANGUAGE, PUBLIC_HOST_ADDRESS, PUBLIC_LAST_MOD } from "$env/static/public";
import { arrLangs } from "$lib/js/common/localization/localization.constants.common";
import { getLocalizedPath } from "$lib/js/common/localization/localization.util.common";
import { paths } from "$lib/js/server/localization/localization.constants.server";

export async function GET() {
    return new Response(
        `<?xml version="1.0" encoding="UTF-8" ?>
        <urlset
          xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="https://www.w3.org/1999/xhtml"
          xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
          xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
          xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="https://www.google.com/schemas/sitemap-video/1.1">
            ${await getEntireURL()}
        </urlset>`.trim(),
        { headers: { 'Content-Type': 'application/xml' } }
    )
}

async function getEntireURL() {
    console.time('getEntireURL')

    let theEntire = ''
    for (const [key, value] of paths.entries()) {
        if (value.get('parentPath'))
            continue

        theEntire += getURL([{ pathKey: key, path: value }])
    }

    for (const [pathKey, path] of paths.entries()) {
        const parentPath = path.get('parentPath')
        if (!parentPath)
            continue

        const parentPathKey = getLocalizedPath(parentPath, path.get('lang'))
        theEntire += getURL([{ pathKey: parentPathKey, path: paths.get(parentPathKey) }, { pathKey, path: paths.get(pathKey) }])
    }

    console.timeEnd('getEntireURL')

    return theEntire
}

function getURL(_paths, lastmod) {
    return `<url>${getLoc(_paths)}${getLastMod(lastmod)}${getAlternates(_paths)}</url>`
}

function getLoc(_paths) {
    let _pathKey = PUBLIC_HOST_ADDRESS

    const firstPathKey = _paths[0].pathKey,
        lang = paths.get(firstPathKey).get('lang')

    if (lang !== PUBLIC_DEFAULT_LANGUAGE && lang !== firstPathKey)
        _pathKey += '/' + lang

    if (firstPathKey)
        _pathKey += '/' + firstPathKey

    for (let i = 1; i < _paths.length; i++) {
        const pathKey = _paths[i].pathKey
        if (pathKey)
            _pathKey += '/' + pathKey
    }

    return `<loc>${_pathKey}</loc>`
}

function getLastMod(lastmod) {
    if (lastmod)
        return `<lastmod>${lastmod}</lastmod>`

    return `<lastmod>${PUBLIC_LAST_MOD}</lastmod>`
}

function getAlternates(_paths) {
    let theEntire = ''

    theEntire += `<xhtml:link rel="alternate" hreflang="x-default" href="${PUBLIC_HOST_ADDRESS + getDefaultHref(_paths)}"/>`

    for (const lang of arrLangs)
        theEntire += `<xhtml:link rel="alternate" hreflang="${lang}" href="${getHref(_paths, lang)}"/>`

    return theEntire
}

function getDefaultHref(_paths) {
    let defaultHref = ''

    for (let i = 0; i < _paths.length; i++) {
        if (i !== 0)
            defaultHref += '/'

        const { pathKey, path } = _paths[i]
        defaultHref += path.get(PUBLIC_DEFAULT_LANGUAGE) ?? pathKey
    }

    if (defaultHref)
        return '/' + defaultHref

    return ''
}

function getHref(_paths, lang) {
    let href = PUBLIC_HOST_ADDRESS

    const firstPathKey = _paths[0].path.get(lang) ?? _paths[0].pathKey

    if (lang !== PUBLIC_DEFAULT_LANGUAGE && lang !== firstPathKey)
        href += '/' + lang

    if (firstPathKey)
        href += '/' + firstPathKey

    for (let i = 1; i < _paths.length; i++) {
        const _pathEntry = _paths[i],
            pathKey = _pathEntry.path.get(lang) ?? _pathEntry.pathKey

        if (pathKey)
            href += '/' + pathKey
    }

    return href
}
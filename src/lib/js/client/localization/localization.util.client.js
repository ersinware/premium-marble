import { invalidate } from "$app/navigation";
import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";
import {
    getLocalizedPath,
    getLocalizedSearchParam,
    getLocalizedSearchValue,
    getLocalizedURL
} from "$lib/js/common/localization/localization.util.common.js";
import { getPaths, waitFor } from "$lib/js/common/util.common";
import { get } from "svelte/store";
import { showSnackbar } from "../util.snackbars.client";
import { L } from "./localization.translations.data.client";

const arrWhenLanguageChange = new Map()

let
    lang,
    url,
    origin,
    langFirstTime = true,
    changeURL = true

export function init(_lang, _url, _origin) {
    lang = _lang
    url = _url
    origin = _origin

    lang.subscribe(onLangChange)
}

/* */

async function onLangChange(newLang) {
    if (langFirstTime) {
        langFirstTime = false

        return
    }

    await changeLang(newLang)
    await waitFor(500)

    showSnackbar({ content: L('onLangChange', newLang) }, 2500)
}

/* with _changeURL parameter, user can choose to change URL itself
it works page based! */
export function whenLanguageChange(f, id, _changeURL = true) {
    changeURL = _changeURL
    arrWhenLanguageChange.set(id, f)
}

export function unsubscribeLanguageChange(id, _changeURL = true) {
    arrWhenLanguageChange.delete(id)
    changeURL = _changeURL
}

async function changeLang(newLang) {
    if (changeURL)
        setNewURL(newLang)

    document.cookie = `lang=${newLang}; path=/; max-age=31536000;`
    await invalidate('app:languageChange')

    // start calling functions from end
    const temp = []

    for (const f of arrWhenLanguageChange.values())
        temp.push(f)

    for (let i = temp.length - 1; i >= 0; i--)
        temp.pop()(newLang)
}

/* */

function setNewURL(newLang) {
    const _url = get(url)

    let newURL
    try {
        newURL = getLocalizedURL(getPaths(decodeURI(_url.pathname)), decodeURI(_url.searchParams), newLang)
    } catch (error) {

    }

    if (newURL === '/')
        newURL = ''

    onURLChange(new URL(newURL, _url.origin))
}

export function setURLSearchParam(_page) {
    const
        _url = get(url),
        _lang = get(lang)

    _url.search = _page ? getLocalizedSearchParam('page', _lang) + '=' + getLocalizedSearchValue(_page, _lang) : ''
    onURLChange(decodeURI(_url.toString()))
}

function onURLChange(newURL) {
    if (!newURL)
        return

    window.history.replaceState(window.history.state, window.document.title, decodeURI(newURL.toString()))
    url.set(new URL(newURL))
}

/* */

export function getLocalizedLink(path, lang) {
    if (!path && lang !== PUBLIC_DEFAULT_LANGUAGE)
        return '/' + lang

    if (lang === PUBLIC_DEFAULT_LANGUAGE)
        return `/${getLocalizedPath(path, lang)}`

    return `/${getLocalizedPath(lang, lang)}/${getLocalizedPath(path, lang)}`
}
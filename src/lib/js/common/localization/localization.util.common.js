import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";
import { error } from "@sveltejs/kit";

let paths,
    searchParams,
    searchValues

export function init(_paths, _searchParams, _searchValues) {
    paths
    paths = _paths
    searchParams = _searchParams
    searchValues = _searchValues
}

export function getLocalizedURL(paths, searchParams, lang) {
    let newURL = getLocalizedPaths(paths, lang)

    if (!newURL)
        newURL = '/'

    newURL += getLocalizedSearchParams(searchParams, lang)

    if (lang !== PUBLIC_DEFAULT_LANGUAGE && !newURL.startsWith('/' + lang))
        newURL = '/' + lang + (newURL === '/' ? '' : newURL)

    return newURL
}

export function getLocalizedPaths(paths, lang) {
    let newPathname = ''

    for (let i = 0; i < paths.length; i++) {
        const localizedPath = getLocalizedPath(paths[i], lang)
        if (localizedPath)
            newPathname += '/' + localizedPath
    }

    return newPathname
}

export function getLocalizedPath(path, lang) {
    const _path = paths.get(path)
    if (!_path) 
        throw error(404, { message: 'unknown path' })

    return _path.get('lang') === lang ? path : _path.get(lang)
}

export function getLocalizedSearchParams(searchParams, lang) {
    if (!searchParams)
        return ''

    let newSearchParams = '',
        first = true

    for (const [key, value] of searchParams.entries()) {
        if (first) {
            newSearchParams += '?'
            first = false
        } else
            newSearchParams += '&'

        let localizedSearchParam = getLocalizedSearchParam(key, lang)
        if (value)
            localizedSearchParam += `=${getLocalizedSearchValue(value, lang)}`

        newSearchParams += `${localizedSearchParam}`
    }

    return newSearchParams
}

export function getLocalizedSearchParam(searchParam, lang) {
    const _searchParam = searchParams.get(searchParam)
    if (!_searchParam)
        throw error(404, { message: 'unknown search param' })

    return _searchParam.get('lang') === lang ? searchParam : _searchParam.get(lang)
}

export function getLocalizedSearchValue(searchValue, lang) {
    const _searchValue = searchValues.get(searchValue)
    if (!_searchValue)
        throw error(404, { message: 'unknown search value' })

    if (_searchValue.get('lang') !== lang)
        return _searchValue.get('lang') === lang ? searchValue : _searchValue.get(lang)
}
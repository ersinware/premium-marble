import { paths, searchParams, searchValues } from '$lib/js/server/localization/localization.constants.server.js'
import { error } from '@sveltejs/kit'

export function load({ locals }) {
    const _error = locals.manualError
    if (_error)
        throw error(_error.status, _error.body)

    return {
        lang: locals.lang,
        paths,
        searchParams,
        searchValues,
    }
}
import { paths, searchParams, searchValues } from '$lib/js/server/localization/localization.constants.server.js'

export function load({ locals }) {
    return {
        lang: locals.lang,
        paths,
        searchParams,
        searchValues,
    }
}
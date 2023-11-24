import { error } from '@sveltejs/kit'

export function load({ locals }) {
    const _error = locals.manualError
    if (_error)
        throw error(_error.status, _error.body)
}
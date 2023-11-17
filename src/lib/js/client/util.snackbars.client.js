import { get } from "svelte/store"
import { randomID } from "../common/util.common"

let openSnackbars, bigScreen

export function init(_openSnackbars, _bigScreen) {
    openSnackbars = _openSnackbars
    bigScreen = _bigScreen
}

export function showSnackbar(snackbar, delay) {
    const temp = get(openSnackbars)
    snackbar.id = randomID()

    if (!get(bigScreen))
        temp.push(snackbar)
    else
        temp.unshift(snackbar)

    openSnackbars.set(temp)

    const _delay = delay ?? (temp.length > 1 ? 5000 + temp.length * 500 : 5000)
    setTimeout(() => closeSnackbar(snackbar.id), _delay)
}

export function closeSnackbar(id) {
    const temp = get(openSnackbars).filter(_snackbar => _snackbar.id !== id)
    openSnackbars.set(temp)
}
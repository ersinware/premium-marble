import { arrLangs } from "$lib/js/common/localization/localization.constants.common";

export function match(param) {
    return arrLangs.includes(param)
}
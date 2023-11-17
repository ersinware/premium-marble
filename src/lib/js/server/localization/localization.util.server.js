import { parse as parseAcceptLanguage } from "accept-language-parser";
import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";
import { langs } from "$lib/js/server/localization/localization.constants.server.js";

export function getLanguageByHeader(acceptLanguage) {
    if (!acceptLanguage)
        return PUBLIC_DEFAULT_LANGUAGE

    const parsedAcceptLanguage = parseAcceptLanguage(acceptLanguage)
    for (const parsed of parsedAcceptLanguage)
        if (langs.has(parsed.code))
            return parsed.code

    return PUBLIC_DEFAULT_LANGUAGE
}
import { langs, paths, searchParams, searchValues } from "$lib/js/server/localization/localization.constants.server.js";
import { localizedPaths, localizedSearchParams, localizedSearchValues } from "$lib/js/server/localization/localization.translations.data.server.js";

export function init() {
    constructLangs()
    constructTranslationTables(localizedPaths, paths)
    constructTranslationTables(localizedSearchParams, searchParams)
    constructTranslationTables(localizedSearchValues, searchValues)

    // console.log(langs);
    // console.log(paths);
    // console.log(searchParams);
    // console.log(searchValues);
}

function constructLangs() {
    for (const lang of localizedPaths.keys())
        langs.set(lang, { lang })
}

function constructTranslationTables(source, target) {
    for (const [key, value] of source.entries())
        for (let i = 0; i < value.length; i++) {
            const content = new Map([['lang', key]]),
                _value = value[i]

            for (const [key2, value2] of source.entries()) {
                if (key2 === key)
                    continue

                content.set(key2, value2[i].name)
            }

            target.set(_value.name, content)
        }
}
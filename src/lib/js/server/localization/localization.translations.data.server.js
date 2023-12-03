import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";
import { articles } from "$lib/js/common/util.data.articles";

// FOR OTHER CONSTANTS, LOOK AT common/localization/localization.constants.common.js

export const localizedPaths = new Map([
    [PUBLIC_DEFAULT_LANGUAGE, [
        { name: '' },
        { name: 'ürünler' },
        { name: 'haberler' },
        { name: 'hakkımızda' },
        { name: 'iletişim' },
    ]],

    ['en', [
        { name: 'en' },
        { name: 'products' },
        { name: 'news' },
        { name: 'about-us' },
        { name: 'contact' },
    ]]
]),
    localizedSearchParams = new Map([]),
    localizedSearchValues = new Map([])

for (const key of localizedPaths.keys()) {
    for (const articleLink of articles.get(key).keys())
        localizedPaths.get(key).push({ name: articleLink, parentPath: 'news' })
}
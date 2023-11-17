import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";

// FOR OTHER CONSTANTS, LOOK AT common/localization/localization.constants.common.js

export const localizedPaths = new Map([
    [PUBLIC_DEFAULT_LANGUAGE, [
        { name: '' },
        { name: 'ürünler' },
        { name: 'blog' },
        { name: 'hakkımızda' },
        { name: 'iletişim' },
    ]],

    ['en', [
        { name: 'en' },
        { name: 'products' },
        { name: 'blog' },
        { name: 'about-us' },
        { name: 'contact' },
    ]]
]),
    localizedSearchParams = new Map([]),
    localizedSearchValues = new Map([])
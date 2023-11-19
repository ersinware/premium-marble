import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";

// FOR OTHER CONSTANTS, LOOK AT common/localization/localization.constants.common.js

export const localizedPaths = new Map([
    [PUBLIC_DEFAULT_LANGUAGE, [
        { name: '' },
        { name: 'ürünler' },
        { name: 'blog' },
        { name: 'makale' },
        { name: 'hakkımızda' },
        { name: 'iletişim' },
        { name: 'mermer-secerken-nelere-dikkat-etmelisiniz' },
    ]],

    ['en', [
        { name: 'en' },
        { name: 'products' },
        { name: 'blog' },
        { name: 'article' },
        { name: 'about-us' },
        { name: 'contact' },
        { name: 'what-should-you-pay-care-for-when-choosing-marble' },
    ]]
]),
    localizedSearchParams = new Map([]),
    localizedSearchValues = new Map([])
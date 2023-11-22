export function L(key, lang) {
    return languages[lang].get(key)
}

const tr = new Map([
    ['lang', 'Türkçe'],
    ['turkish', 'Türkçe'],
    ['english', 'İngilizce'],
    ['onLangChange', 'Dil, Türkçe olarak ayarlandı.  '],

    ['lostConnection', 'İnternet bağlantısı koptu. Bazı fonksiyonlar devre dışı kalabilir.'],
    ['onlineBack', 'Tekrar internet bağlantısı kuruldu.'],

    ['homepage', 'Anasayfa'],

    ['jsDisabled', 'Javascript Devre Dışı'],
    ['jsDisabledDescription', "Uygulamayı kullanabilmek için, Javascript'i etkinleştirin."],

    ['app-name', "Premium Mermer"],

    ['homepage', "Anasayfa"],
    ['products', "Ürünler"],
    ['blog', "Blog"],
    ['about-us', "Hakkımızda"],
    ['contact', "İletişim"],

    ['homepage-page-title', "Anasayfa | Premium Mermer"],
    ['products-page-title', "Ürünler | Premium Mermer"],
    ['blog-page-title', "Blog | Premium Mermer"],
    ['about-us-page-title', "Hakkımızda | Premium Mermer"],
    ['contact-page-title', "İletişim | Premium Mermer"],

    ['pages', "SAYFALAR"],
    ['language', "DİL"],
])

const en = new Map([
    ['lang', 'English'],
    ['turkish', 'Turkish'],
    ['english', 'English'],
    ['onLangChange', 'The language is set to English.'],

    ['lostConnection', 'No internet connection. Some functionality may be broken.'],
    ['onlineBack', 'You are online back.'],

    ['homepage', 'Homepage'],

    ['jsDisabled', 'Javascript is Disabled'],
    ['jsDisabledDescription', 'In order to be able to use the application, enable Javascript.'],

    ['app-name', "Premium Marble"],

    ['homepage', "Homepage"],
    ['products', "Products"],
    ['blog', "Blog"],
    ['about-us', "About Us"],
    ['contact', "Contact"],

    ['homepage-page-title', "Homepage | Premium Marble"],
    ['products-page-title', "Products | Premium Marble"],
    ['blog-page-title', "Blog | Premium Mermer"],
    ['about-us-page-title', "About Us | Premium Marble"],
    ['contact-page-title', "Contact | Premium Marble"],

    ['pages', "PAGES"],
    ['language', "LANGUAGE"],
])

const languages = { tr, en }
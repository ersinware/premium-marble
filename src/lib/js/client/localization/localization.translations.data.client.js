export function L(key, lang) {
    return languages[lang].get(key)
}

const tr = new Map([
    ['lang', 'Türkçe'],
    ['turkish', 'Türkçe'],
    ['english', 'İngilizce'],
    ['on-lang-change', 'Dil, Türkçe olarak ayarlandı.  '],

    ['connection-lost', 'İnternet bağlantısı koptu. Bazı fonksiyonlar devre dışı kalabilir.'],
    ['online-back', 'Tekrar internet bağlantısı kuruldu.'],

    ['js-disabled', 'Javascript Devre Dışı'],
    ['js-disabled-description', "Uygulamayı kullanabilmek için, Javascript'i etkinleştirin."],

    ['app-name', "Premium Mermer"],
    ['app-name-logo', "Premium Mermer Logo"],

    ['homepage', "Anasayfa"],
    ['products', "Ürünler"],
    ['news', "Haberler"],
    ['about-us', "Hakkımızda"],
    ['contact', "İletişim"],

    ['homepage-page-title', "Premium Mermer"],
    ['products-page-title', "Ürünler | Premium Mermer"],
    ['news-page-title', "Haberler | Premium Mermer"],
    ['about-us-page-title', "Hakkımızda | Premium Mermer"],
    ['contact-page-title', "İletişim | Premium Mermer"],

    ['pages', "SAYFALAR"],
    ['language', "DİL"],

    ['not-found', "Sayfa Bulunamadı"],

    ['footer-description', "Silifke’nin köklü mermer fabrikalarından olan Premium Mermer Fabrikası, 2005 yılından bu yana son teknolojiyi kullanarak, doğaya zarar vermeden kaliteli mermer üretimi yapıyor."],
    ['footer-address-one', "Organize Sanayi Bölgesi"],
    ['footer-address-two', "4. Cadde, No: 1"],
    ['contact-form', "İletişim Formu"],
    ['sitemap', "SİTE HARİTASI"],
    
    ['slider-item-title-one', "Mermerin Eşsiz Zerafeti"],
    ['slider-item-description-one', "Doğadan ilham alarak işlediğimiz mermer, mekânlarınıza eşsiz bir zerafet katıyor, estetik anlayışınızı yeniden tanımlıyoruz."],
    ['slider-item-title-two', "Taşın Ahengini Hissedin"],
    ['slider-item-description-two', "Her bir mermer bloğu, getirdiği benzersiz ahengiyle sizi etkisi altına alacak. Taşın dokunuşunu hissedin, uyumu yakalayın."],
    ['slider-item-title-three', "Şıklık Yeniden Tanımlanıyor"],
    ['slider-item-description-three', "Mutfaklarınıza modern bir dokunuş katmak için tasarladığımız ürünler, şıklığı tamamen yeniden tanımlıyor."],

    ['text-with-icon-title-one', "Son Sistem Makineler"],
    ['text-with-icon-description-one', "Doğadan çıkardığımız mermerleri son teknolojiyi kullanarak, doğaya zarar vermeden üretim yapıyoruz."],
    ['text-with-icon-title-two', "Deneyimli Ekip"],
    ['text-with-icon-description-two', "Alanında uzman ekibimizin özverili çalışmaları neticesinde kaliteden ödün vermiyoruz."],
    ['text-with-icon-title-three', "Müşteri Memnuniyeti"],
    ['text-with-icon-description-three', "Sürdürülebilir başarılar için müşterilerimizin memnuniyetini ön planda tutmak için elimizden geleni yapıyoruz."],

    ['homepage-section-title-one', "Premium Mermer"],
    ['homepage-section-description-one', "Doğadan ilham alarak tasarlanan her bir blok, modern tasarım ve geleneksel işçilikle birleşerek mekânlarınıza benzersiz bir dokunuş katıyor. Zengin seçeneklerimizle tarzınıza uygun çözümler sunuyoruz."],
    ['homepage-section-button-one', "ÜRÜNLERİMİZ"],

    ['homepage-section-title-two', "Mermerin Ötesinde"],
    ['homepage-section-description-two', "Premium Mermer, uzun yıllara dayanan deneyimiyle öne çıkan bir kuruluştur. Modern tasarım anlayışımız, geleneksel zanaat becerileriyle buluşarak; zarafet, dayanıklılık ve estetiği bir arada sunuyor."],
    ['homepage-section-button-two', "HAKKIMIZDA"],

    ['homepage-section-title-three', "Bilgi ve İlham Kaynağı"],
    ['homepage-section-description-three', "Mermer dünyasının nabzını tutan firmamız, sektöre dair değerli içgörüleri ve ilham verici tasarım önerilerini sizinle buluşturuyor. Yeniliklere dair bilgileri keşfedin."],
    ['homepage-section-button-three', "MAKALELER"],

    ['homepage-section-title-four', "Düşünceleriniz, Değerli"],
    ['homepage-section-description-four', "Müşterilerimizin memnuniyeti bizim için önceliktir. İster soru sormanız, ister bir projeyi tartışmanız, ister sadece merhaba demeniz için buradayız. Sizden haber almak için sabırsızlanıyoruz."],
    ['homepage-section-button-four', "BİZE ULAŞIN"],

    ['products', "Ürünlerimiz"],
    ['products-description', "Doğadan gelen taşın, mermere dönüşümünde hassas işçilik ile üretim yapıyoruz. Yaşamınızın her alanı mermerin eşsiz büyüsü ile baştan tasarlıyor, yaratıyoruz. Seçeceğiniz her bir ürün özenle mimari edilir, kalitesi ile göz kamaştırır."],

    ['dark-night', "Gece Karanlığı"],
    ['explosion-white', "Patlatma Beyaz"],
    ['rain-green', "Yağmur Yeşili"],
    ['striped-travertine', "Şerit Traverten"],
    ['dark-emprador', "Dark Emprador"],
    ['amasya-beige', "Amasya Beji"],
    ['cloud-gray', "Bulut Grisi"],
    ['uludag-black', "Uludağ Siyah"],
    ['venicart-travertine', "Venicart Traverten"],
    ['silifke-beige', "Silifke Beji"],
    ['crema-siva', "Crema Siva"],
    ['crema-taurus', "Crema Taurus"],
    ['cremera-marble', "Cremera Marble"],

    ['news-description', "Premium Mermer, mermerin zarafetini ve dayanıklılığını sizlere sunan bir dünya markasıdır. Haberler sayfasında, mermerle ilgili her şeyi keşfetmek ve sektördeki en son gelişmeleri öğrenmek için doğru yerdesiniz."],

    ['contact-description', "İster soru sormanız, ister bir projeyi tartışmanız, ister sadece merhaba demeniz için buradayız."],
    ['write-to-us', "BİZE YAZIN"],

    ['visit-us', "Ziyaret Edin"],
    ['contact-address-one', "Organize Sanayi Bölgesi"],
    ['contact-address-two', "4. Cadde, No: 1"],

    ['call-us', "Bizi Arayın"],
    ['contact-write-to-us', "Bize Yazın"],

    ['about-us-description-one', "26.000 m² arazi üzerinde 3000 m² kapalı alanda çalışan Premium Mermer, deneyimli kadrosu ve son teknoloji makineleri ile Silifke'den çıkan mermer çeşitlerini işleyip ihracat yaparak hem bölge hem de ülke ekonomisine katkı sağlamaktadır."],

    ['about-us-title-two', "18 Yıllık Deneyim"],
    ['about-us-description-two', "Premium Mermer, perakende ve toptan satıştan gelen geniş tecrübesiyle müşteri taleplerine eksiksiz bir şekilde yanıt veriyor. Kurulduğu yıldan bu yana kalitesini sürekli olarak artıran fabrikamız, her türlü mermer çeşidini istenilen ölçü ve ebatlarda işleyerek müşterilerimizin özel isteklerini karşılamaktadır."],

    ['project-experience', "Proje Tecrübesi"],
    ['different-countries', "Farklı Ülke"],
    ['meter-square-area', "m² Alan"],
    ['for-years-experience', "Yıllık Deneyim"],

    ['about-us-title-three', "Kalitenin Simgesi"],
    ['about-us-description-three', "Premium Mermer olarak, hatasız üretim ve zamanında teslimat prensiplerimizle ön plana çıkıyoruz. Sürekli iyileşmeyi temel felsefemiz olarak benimseyerek personel kalifikasyonu için düzenli eğitim faaliyetleri yürütüyoruz. İhracatta ön sıralarda yer alarak ülke ve şirket gelişimine katkıda bulunuyoruz.Kalitemiz, markamızın simgesidir ve bu, geleceğe attığımız imzadır."],
    ['about-us-title-four', "Daima Yenilikçi"],
    ['about-us-description-four', "Müşterilerimizin değişen ihtiyaç ve beklentilerini doğru algılayarak zamanında karşılamak, sektördeki teknolojik gelişmeleri takip ederek en gelişmiş teknikleri kullanmak, maliyetleri optimum seviyeye çekmek ve çevreye saygılı bir şekilde iş ve işçi güvenliğini temel alan üretim yapma bilinciyle çalışmalarımızı sürdürüyoruz."],

    ['cancel', "VAZGEÇ"],
    ['continue', "DEVAM ET"],

    ['optional', "TERCİHEN"],

    ['contact-modal-one-title', "Önerilerinizi Merak<br/>Ediyoruz"],
    ['contact-modal-one-description', "Müşterilerimizin önerilerini dikkate alıyor ve deneyiminizi daha da güzelleştirmek istiyoruz."],
    ['input-title-thoughts', "DÜŞÜNCELERİNİZ"],
    ['input-validation-text-thoughts', "En az 10, en fazla 500 karakter olmalı"],

    ['contact-modal-two-title', "Kişisel Bilgileriniz"],
    ['contact-modal-two-description', "Size hitap edebilmek için adınıza ihtiyacımız var."],
    ['input-title-name', "ADINIZ"],
    ['input-title-surname', "SOYADINIZ"],
    ['input-validation-text-name-and-surname', "En az 2, en fazla 25 karakter olmalı"],

    ['contact-modal-three-title', "İletişim Bilgileriniz"],
    ['contact-modal-three-description', "Mesajınıza geri dönüş yapabilmemiz için iletişim bilgileriniz gerekli."],
    ['input-title-email', "E-POSTA ADRESİNİZ"],
    ['input-title-phone', "TELEFONUNUZ"],
    ['input-validation-text-email', "xxx@xxx.com formatında olmalı"],
    ['input-validation-text-phone', "5xx xxx xxx xx formatında olmalı"],

    ['send', "GÖNDER"],

    ['delivered-successfuly', "Mesajınız başarıyla iletildi. Size geri dönüş yapacağız."],
    ['error-occured', "Bir hata oluştu. Daha sonra tekrar deneyin."],

    ['corporation-description', "Silifke’nin köklü mermer fabrikalarından olan Premium Mermer Fabrikası, 2005 yılından bu yana son teknolojiyi kullanarak, doğaya zarar vermeden kaliteli mermer üretimi yapıyor."],
    ['street-address', "4. Cadde, No: 1"],
])

const en = new Map([
    ['lang', 'English'],
    ['turkish', 'Turkish'],
    ['english', 'English'],
    ['on-lang-change', 'The language is set to English.'],

    ['connection-lost', 'No internet connection. Some functionality may be broken.'],
    ['online-back', 'You are online back.'],

    ['js-disabled', 'Javascript is Disabled'],
    ['js-disabled-description', 'In order to be able to use the application, enable Javascript.'],

    ['app-name', "Premium Marble"],
    ['app-name-logo', "Premium Marble Logo"],

    ['homepage', "Homepage"],
    ['products', "Products"],
    ['news', "News"],
    ['about-us', "About Us"],
    ['contact', "Contact"],

    ['homepage-page-title', "Premium Marble"],
    ['products-page-title', "Products | Premium Marble"],
    ['news-page-title', "News | Premium Marble"],
    ['about-us-page-title', "About Us | Premium Marble"],
    ['contact-page-title', "Contact | Premium Marble"],

    ['pages', "PAGES"],
    ['language', "LANGUAGE"],

    ['not-found', "Not Found"],

    ['footer-description', "Premium Marble Factory, a longstanding marble facility in Silifke, has been producing quality marble since 2005, using the latest technology and prioritizing environmental sustainability."],
    ['footer-address-one', "Organized Industrial Zone"],
    ['footer-address-two', "4th Avenue, No: 1"],
    ['contact-form', "Contact Form"],
    ['sitemap', "SITE MAP"],

    ['slider-item-title-one', "The Unique Elegance of Marble"],
    ['slider-item-description-one', "By processing marble inspired by nature, we add unique elegance to your spaces, redefining your aesthetic understanding."],
    ['slider-item-title-two', "Feel the Harmony of the Stone"],
    ['slider-item-description-two', "Each marble block will captivate you with its unique harmony. Feel the touch of the stone, capture the harmony."],
    ['slider-item-title-three', "Elegance is being redefined"],
    ['slider-item-description-three', "The products we've designed to add a modern touch to your kitchens completely redefine elegance."],

    ['text-with-icon-title-one', "Cutting-edge machinery"],
    ['text-with-icon-description-one', "We extract marbles from nature and use the latest technology to produce without harming the environment."],
    ['text-with-icon-title-two', "Experienced Team"],
    ['text-with-icon-description-two', "Thanks to the dedicated efforts of our expert team, we do not compromise on quality."],
    ['text-with-icon-title-three', "Customer Satisfaction"],
    ['text-with-icon-description-three', "We prioritize customer satisfaction to foster sustainable success, striving to exceed expectations."],

    ['homepage-section-title-one', "Premium Marble"],
    ['homepage-section-description-one', "Each block, designed inspired by nature, adds a unique touch to your spaces by combining modern design and traditional craftsmanship. We offer a range of rich options, providing solutions match your style."],
    ['homepage-section-button-one', "PRODUCTS"],

    ['homepage-section-title-two', "Beyond Marble"],
    ['homepage-section-description-two', "Premium Marble stands out with its extensive experience over the years. Our modern design philosophy converges with traditional craftsmanship, offering elegance, durability, and aesthetics."],
    ['homepage-section-button-two', "ABOUT US"],

    ['homepage-section-title-three', "Source of Information and Inspiration"],
    ['homepage-section-description-three', "Our company, at the forefront of the marble world, brings valuable insights into the industry and inspiring design suggestions to you. Explore information about innovations."],
    ['homepage-section-button-three', "ARTICLES"],

    ['homepage-section-title-four', "Your Thoughts Matters"],
    ['homepage-section-description-four', "Customer satisfaction is our priority. Whether you have questions, want to discuss a project, or just say hello, we are here for you. We look forward to hearing from you."],
    ['homepage-section-button-four', "CONTACT US"],

    ['products', "Products"],
    ['products-description', "We craft with precision to transform natural stones into marble, redesigning and creating every facet of your life with the unique enchantment of marble. Each chosen product is meticulously crafted, dazzling with its exceptional quality."],

    ['dark-night', "Dark Night"],
    ['explosion-white', "Explosion White"],
    ['rain-green', "Rain Green"],
    ['striped-travertine', "Striped Travertine"],
    ['dark-emprador', "Dark Emprador"],
    ['amasya-beige', "Amasya Beige"],
    ['cloud-gray', "Cloud Gray"],
    ['uludag-black', "Uludağ Black"],
    ['venicart-travertine', "Venicart Travertine"],
    ['silifke-beige', "Silifke Beige"],
    ['crema-siva', "Crema Siva"],
    ['crema-taurus', "Crema Taurus"],
    ['cremera-marble', "Cremera Marble"],

    ['news-description', "Premium Marble is a global brand that offers the elegance and durability of marble. You are in the right place on the News page to explore everything about marble and stay updated on the latest developments in the industry."],

    ['contact-description', "Whether you have questions, want to discuss a project, or just want to say hello, we are here for you."],
    ['write-to-us', "WRITE TO US"],

    ['visit-us', "Visit Us"],
    ['contact-address-one', "Organized Industrial Zone"],
    ['contact-address-two', "4th Avenue, No: 1"],

    ['call-us', "Call Us"],
    ['contact-write-to-us', "Write To Us"],

    ['about-us-description-one', "Operating on a 26,000 m² land with a 3000 m² closed area, Premium Marble processes and exports a variety of marbles originating from Silifke, contributing to both the regional and national economy with its experienced team and state-of-the-art machines."],

    ['about-us-title-two', "18 Years of Experience"],
    ['about-us-description-two', "With extensive experience in both retail and wholesale sales, Premium Marble provides comprehensive responses to customer demands. Since its establishment, our factory has consistently improved its quality, processing all types of marble in desired dimensions to meet our customers' specific requirements."],

    ['project-experience', "Project Experience"],
    ['different-countries', "Different Countries"],
    ['meter-square-area', "m² Area"],
    ['for-years-experience', "Years of Experience"],

    ['about-us-title-three', "Symbol of Quality"],
    ['about-us-description-three', "At Premium Marble, we stand out with our principles of flawless production and timely delivery. Embracing continuous improvement as our fundamental philosophy, we conduct regular training activities for staff qualification. By taking a leading position in exports, we contribute to the country's and the company's development. Our quality is the symbol of our brand and the signature we place on the future."],

    ['about-us-title-four', "Always Innovative"],
    ['about-us-description-four', "We continue our efforts with the awareness of producing based on a commitment to flawless production and on-time delivery, accurately perceiving our customers' changing needs and expectations. We keep pace with technological developments in the industry, use the most advanced techniques, optimize costs, and maintain production that prioritizes environmental and worker safety."],

    ['cancel', "CANCEL"],
    ['continue', "CONTINUE"],

    ['optional', "OPTIONAL"],

    ['contact-modal-one-title', "Your Suggestions<br/>Matter."],
    ['contact-modal-one-description', "We value our customers' suggestions and aim to enhance your experience even further."],
    ['input-title-thoughts', "YOUR THOUGHTS"],
    ['input-validation-text-thoughts', "Should be at least 10, maximum 500 characters."],

    ['contact-modal-two-title', "Personal Information"],
    ['contact-modal-two-description', "We need your name to address you."],
    ['input-title-name', "NAME"],
    ['input-title-surname', "SURNAME"],
    ['input-validation-text-name-and-surname', "Should be at least 2, maximum 25 characters."],

    ['contact-modal-three-title', "Contact Information"],
    ['contact-modal-three-description', "To respond to your message, we need your contact information."],
    ['input-title-email', "EMAIL ADDRESS"],
    ['input-title-phone', "PHONE"],
    ['input-validation-text-email', "Must be in format of xxx@xxx.com"],
    ['input-validation-text-phone', "Must be in format of 5xx xxx xxx xx"],

    ['send', "SEND"],

    ['delivered-successfuly', "Your message has been successfully delivered. We will get back to you."],
    ['error-occured', "An error occurred. Please try again later."],

    ['corporation-description', "Premium Marble Factory, a longstanding marble facility in Silifke, has been producing quality marble since 2005, using the latest technology and prioritizing environmental sustainability."],
    ['street-address', "4th Avenue, No: 1"],
])

const languages = { tr, en }
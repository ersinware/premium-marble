import { PUBLIC_DEFAULT_LANGUAGE } from "$env/static/public";

const content = `<p class="section-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum doloremque natus vel provident? Blanditiisme
				laborum saepe aliquid sequi? Culpa qui, recusandae temporibus molestias cum odio nam sunt ullam in magnam!
				Maiores, ab. Natus animi nostrum, non mollitia a consequatur neque.
			</p>

			<p class="section-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia esse nihil quam cumque omnis dolorum at labore
				impedit voluptates quaerat? Expedita corrupti animi accusamus officiis aliquid perferendis, consequatur sint
				molestiae! Blanditiis magni aliquid laboriosam nihil ea a. Sed explicabo impedit doloremque quam ea nam minima
				ad laborum id beatae? Pariatur sequi ducimus quos quasi ut in, aut dolorum unde. Porro! Tempore fugiat quibusdam
				ea enim cumque voluptate aperiam quis aut! Voluptatem, eveniet sapiente! Reprehenderit laborum, quas ex nostrum
				voluptates architecto quisquam libero in iste ratione explicabo officiis repudiandae, natus nisi. Eius fugiat in
				fugit earum enim voluptates nemo deleniti nulla quas rem soluta qui praesentium iure veritatis odio, illo
				doloremque consequuntur, voluptate necessitatibus dolorum. Asperiores doloremque earum provident ab laboriosam.
			</p>

			<p class="section-text">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta cum officia aperiam, adipisci sint magnam atque
				explicabo similique possimus iusto tenetur tempora recusandae. Atque quisquam, laborum amet iusto voluptas id.
				Optio molestiae, voluptates consequatur nulla, numquam in corrupti quo beatae, commodi dolorem unde error
				officia laboriosam animi ratione repellat laudantium dolorum quia possimus eum ex dolores? Nobis aut aliquid
				modi! Delectus, molestias id mollitia quas veritatis dolore! Cupiditate eaque tempore veniam at id aperiam
				possimus repudiandae illo saepe quia! Autem doloribus quaerat sunt cumque ratione dicta deserunt dolorum
				repudiandae delectus! Temporibus animi libero maiores dolorum, tempore, et sit similique excepturi distinctio
				sint eos dolores cum quas, deleniti quae impedit ipsam! Temporibus odio dicta voluptatum nostrum illo sunt error
				quia dolores! Sunt eaque assumenda quod dolore deserunt unde voluptatum accusantium reprehenderit ullam sint.
				Reiciendis, rerum veritatis aperiam, eaque aliquam, porro saepe facere vero nesciunt id quam sapiente. Iure
				necessitatibus repudiandae tenetur. Optio ipsa provident maxime porro sed cum ullam ipsam ipsum numquam sit?
				Dolorum repudiandae nostrum maxime et, unde facere asperiores nemo corrupti voluptatum hic quaerat? Ipsam
				ratione.
			</p>

			<p class="section-text">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quidem quisquam. Ab vel beatae eius perspiciatis
				veniam nemo delectus commodi, obcaecati illo quibusdam officiis eligendi odit culpa assumenda. Aperiam, sint?
				Ullam quibusdam sequi ipsam numquam nulla ratione quam tempore tempora at ab dolore dolores porro ad voluptatem
				magnam praesentium mollitia, enim quaerat magni sed quidem fugiat rerum. Optio, sequi dicta? Officiis voluptates
				doloribus, facere minima pariatur nemo. Eaque tenetur officiis quos quas quia accusamus deleniti. Obcaecati,
				enim. Quos cupiditate ab adipisci iusto sit repellat laudantium, illum similique neque vel corrupti.
				Voluptatibus repellat quas explicabo animi beatae voluptates atque non ad expedita fugiat, odit assumenda fuga
				pariatur ipsam. Ab perspiciatis cupiditate reiciendis, expedita, iure corrupti excepturi sed sunt esse veniam
				rerum!
			</p>`

const articlesTR = new Map([
    ['mermer-secerken-nelere-dikkat-etmelisiniz', {
        name: 'Mermer Seçerken Nelere Dikkat Etmelisiniz?',
        imageName: '/b1.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content,
    }],
    ['mermer-nasıl-temizlenmeli', {
        name: 'Mermer Nasıl Temizlenmeli?',
        imageName: '/b2.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content
    }],
    ['mermer-bakımı-nasıl-yapılmalı', {
        name: 'Mermer Bakımı Nasıl Yapılmalı?',
        imageName: '/b3.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content,
    }],
    ['mermerin-dünyamızdaki-yeri-ve-tarihçesi', {
        name: 'Mermerin Dünyamızdaki Yeri ve Tarihçesi',
        imageName: '/b4.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content
    }],
    ["türkiye'nin-mermer-potansiyeli", {
        name: "Türkiye'nin Mermer Potansiyeli",
        imageName: '/h2.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content,
    }],
])

const articlesEN = new Map([
    ['what-should-you-pay-care-for-when-choosing-marble', {
        name: 'What Should You Pay Attention to When Choosing Marble?',
        imageName: '/b1.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content,
    }],
    ['how-to-clean-marble', {
        name: 'How to Clean Marble?',
        imageName: '/b2.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content
    }],
    ['how-to-care-for-marble', {
        name: 'How to Care for Marble?',
        imageName: '/b3.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content,
    }],
    ['the-place-and-history-of-marble-in-our-world', {
        name: 'The Place and History of Marble in Our World',
        imageName: '/b4.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content
    }],
    ["turkey's-marble-potential", {
        name: "Turkey's Marble Potential",
        imageName: '/h2.jpg',
        summary: 'Atque ut placeat porro ipsam rem error! Vel voluptas neque, veniam perspiciatis nam, eos est in placeat ut ipsa, quidem et molestias',
        content,
    }],
])

export const articles = new Map([
    [PUBLIC_DEFAULT_LANGUAGE, articlesTR],
    ['en', articlesEN],
])
import {createReadStream, existsSync, readdirSync} from 'fs'

/* THIS IS ONLY FOR DEVELOPMENT MODE */
/* FOR PRODUCTION, THERE IS A MIDDLEWARE */

export function GET({url, setHeaders}) {
    setHeaders({'Cache-Control': 'max-age=31536000,immutable'})

    const
        folderName = decodeURI(url.pathname).replace('/api/', ''),
        path = folderName + '/' + url.search + '.webp'

    if (existsSync(path))
        return new Response(createReadStream(path))

    if (!existsSync(folderName))
        return new Response(null, {status: 404})

    const
        images = readdirSync(folderName),
        ratio = url.searchParams.get('ratio')

    if (ratio)
        for (let i = images.length - 1; i > 0; i--) {
            const
                image = images[i],
                // bunda sıkıntı çıkarsa, .replace('.webp', '') ekle
                _ratio = image.split('&')[2].split('=')[1]

            if (ratio === _ratio)
                return new Response(createReadStream(folderName + '/' + image))
        }

    let
        maxWidth = 0,
        maxWidthPath

    for (const image of images) {
        const width = Number(image.split('&')[1].split('=')[1].replace('.webp', ''))

        if (width > maxWidth) {
            maxWidth = width
            maxWidthPath = image
        }
    }

    return new Response(createReadStream(folderName + '/' + maxWidthPath))
}
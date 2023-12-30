import sizeOf from "buffer-image-size";
import { createReadStream, existsSync, promises as fs, readdirSync } from "fs";
import sharp from "sharp";

export function sendImage(req, res, next) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

    const url = new URL(req.url, "https://www.some.com"),
        folderName = decodeURI(url.pathname).replace("/api/", ""),
        path = folderName + "/" + url.search + ".webp";

    if (existsSync(path)) {
        res.setHeader("Content-Type", "image/webp");
        createReadStream(path).pipe(res);

        return;
    }

    if (!existsSync(folderName)) return res.sendStatus(404);

    const images = readdirSync(folderName),
        ratio = url.searchParams.get("ratio");

    if (ratio)
        for (let i = images.length - 1; i > 0; i--) {
            const image = images[i],
                // bunda sıkıntı çıkarsa, .replace('.webp', '') ekle
                _ratio = image.split("&")[2].split("=")[1];

            if (ratio === _ratio) {
                res.setHeader("Content-Type", "image/webp");
                createReadStream(folderName + "/" + image).pipe(res);

                return;
            }
        }

    let maxWidth = 0,
        maxWidthPath;

    for (const image of images) {
        const width = Number(image.split("&")[1].split("=")[1].replace(".webp", ""));

        if (width > maxWidth) {
            maxWidth = width;
            maxWidthPath = image;
        }
    }

    res.setHeader("Content-Type", "image/webp");
    createReadStream(folderName + "/" + maxWidthPath).pipe(res);
}
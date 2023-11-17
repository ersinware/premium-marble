import sizeOf from "buffer-image-size";
import { createReadStream, existsSync, promises as fs, readdirSync } from "fs";
import sharp from "sharp";

export function sendImage(req, res, next) {
	res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

	const url = new URL(req.url, process.env.PUBLIC_HOST_ADDRESS),
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

/* */

export async function saveImage(imageName, mediaData, image, createdAt, onceRatio) {
	const untilSaved = [],
		imageBuffer = await getImageBuffer(image),
		targetPath = await adjustAndGetTargetDirectory(imageName),
		actualWidth = sizeOf(imageBuffer).width;

	for (const media of mediaData) {
		let _resolve;
		untilSaved.push(new Promise((resolve) => (_resolve = resolve)));

		const options = getOptions(media, actualWidth, targetPath, createdAt, onceRatio);
		if (!options) {
			_resolve();

			continue;
		}

		sharp(imageBuffer)
			.webp({ quality: 40, alphaQuality: 50 })
			.resize(options.resizeOptions)
			.toFile(options.filePath)
			.then(() => onSave(_resolve))
			.catch((error) => {
				return { error: error.message };
			});
	}

	await Promise.all(untilSaved);

	return {};
}

async function getImageBuffer(image) {
	const imageArrayBuffer = await image.arrayBuffer();

	return Buffer.from(new Uint8Array(imageArrayBuffer));
}

async function adjustAndGetTargetDirectory(imageName) {
	const targetPath = "image/" + imageName;

	if (!existsSync(targetPath)) await fs.mkdir(targetPath);

	return targetPath + "/";
}

function getOptions(media, actualWidth, targetPath, createdAt, onceRatio) {
	const photoWidth = media.photoWidth;

	if (photoWidth > actualWidth) return;

	let filePath = targetPath + "?" + "density=" + media.density + "&width=" + photoWidth,
		resizeOptions = { width: photoWidth, withoutEnlargement: true };

	if (media.aspectRatio) {
		resizeOptions.height = Math.round((media.aspectRatio[1] * photoWidth) / media.aspectRatio[0]);

		if (!onceRatio) filePath += "&ratio=" + media.aspectRatio[0] + "-" + media.aspectRatio[1];
	}

	if (createdAt) filePath += "&updated-at=" + createdAt + ".webp";
	else filePath += ".webp";

	return { resizeOptions, filePath };
}

function onSave(resolve) {
	resolve();
}

/* */

export async function removeImages(imageName) {
	await fs.rm("image/" + imageName, { recursive: true, force: true });
}

export async function changeImageName(oldImageName, newImageName) {
	await fs.rename("image/" + oldImageName, "image/" + newImageName);
}

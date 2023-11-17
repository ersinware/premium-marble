import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import { handler } from "./build/handler.js";
import { sendImage } from "./src/lib/js/server/util.image.server.js";

dotenv.config();

const app = express(),
    corsOptions = { origin: process.env.PUBLIC_HOST_ADDRESS };

app
    .options("*", cors(corsOptions))
    .use(cors(corsOptions))
    .use(
        helmet({
            contentSecurityPolicy: false,
            crossOriginEmbedderPolicy: { policy: "require-corp" },
            referrerPolicy: { policy: "strict-origin-when-cross-origin" },
            strictTransportSecurity: { preload: true },
            xDnsPrefetchControl: { allow: true },
            xFrameOptions: { action: "deny" },
        })
    )
    .get("/api/image/:imageName", sendImage)
    .use("/", express.static("static", { immutable: true, maxAge: 31556926000, index: false }))
    .use(handler);

app.listen(3000, onConnect);

async function onConnect() {
    console.log("onConnect");
}

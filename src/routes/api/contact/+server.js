import { sendMail } from "$lib/js/server/util.mail.server.js";
import { json } from "@sveltejs/kit";

export async function PUT({ request }) {
    const success = await sendMail(await request.text());

    if (success) return json({}, { status: 200 });

    return json({ error: "Bir hata meydana geldi. Daha sonra tekrar deneyin." }, { status: 500 });
}

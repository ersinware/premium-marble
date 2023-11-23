import { capitalizeFirstLetter } from "$lib/js/common/util.common.js";
import { sendMail } from "$lib/js/server/util.mail.server.js";
import { json } from "@sveltejs/kit";

export async function PUT({ request }) {
    const body = await request.json(),
        success = await sendMail(getContent(body));

    if (success) return json({}, { status: 200 });

    return json({ error: "Bir hata meydana geldi. Daha sonra tekrar deneyin." }, { status: 500 });
}

function getContent({ name, surname, email, phone, thoughts }) {
    return `
        <div>
            <p>${capitalizeFirstLetter(name)} ${capitalizeFirstLetter(surname) ?? ''}</p>
            <p>${email}</p>
            ${phone ? ('<p>' + phone + '</p>') : ''}

            <br />

            <p>${capitalizeFirstLetter(thoughts)}</p>
        </div>
    `
}
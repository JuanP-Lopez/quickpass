import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    const body = await request.json();

    const res = await fetch(
        "https://quickpass-production.up.railway.app/api/evento/eliminar",
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    );

    return Response.json(res);
}
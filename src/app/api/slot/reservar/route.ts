import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    const res = await fetch(
        "https://quickpass-production.up.railway.app/api/slot/reservar",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    );

    const data = await res.json();

    return Response.json(data, {
        status: res.status
    });
}
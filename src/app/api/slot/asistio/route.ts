import { NextResponse } from "next/server";

export async function PUT(request: Request) {
    const body = await request.json();

    const res = await fetch(
        "https://quickpassapi-production.up.railway.app/api/slot/asistio",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    );

    const data = await res.json();

    return NextResponse.json(data, {
        status: res.status
    });
}
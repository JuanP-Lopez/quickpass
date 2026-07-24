import { NextResponse } from "next/server";

export async function PUT(request: Request) {
    const body = await request.json();

    const res = await fetch(
        "http://localhost:5111/api/slot/rechazar",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }
    );

    return Response.json(res);
}
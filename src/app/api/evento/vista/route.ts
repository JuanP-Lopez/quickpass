import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(`http://localhost:5111/api/evento/${id}`);

    const data = await res.json();

    return NextResponse.json(data);
}
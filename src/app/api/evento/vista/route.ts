import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    const res = await fetch(`https://quickpassapi-production.up.railway.app/api/evento/${id}`);

    const data = await res.json();

    return NextResponse.json(data);
}
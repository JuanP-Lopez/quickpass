import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json(
            { mensaje: "ID de evento requerido" },
            { status: 400 }
        );
    }

    const res = await fetch(
        `https://quickpassapi-production.up.railway.app/api/evento/${id}`
    );

    const text = await res.text();

    console.log("API Evento status:", res.status);
    console.log("API Evento response:", text);

    if (!res.ok) {
        return NextResponse.json(
            {
                mensaje: "Error al obtener evento",
                status: res.status,
                detalle: text
            },
            { status: res.status }
        );
    }

    if (!text) {
        return NextResponse.json(
            { mensaje: "La API devolvió una respuesta vacía" },
            { status: 502 }
        );
    }

    const data = JSON.parse(text);

    return NextResponse.json(data);
}
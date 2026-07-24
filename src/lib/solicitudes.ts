import type { Solicitud } from "@/types/Solicitud";

export async function obtenerSolicitudes(idUsuario: Number): Promise<Solicitud[]> {
    const res = await fetch(`http://localhost:3000/api/evento/solicitudes?id=${idUsuario}`,
                { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("No se pudieron obtener las solicitudes");
    }

    return res.json();
}
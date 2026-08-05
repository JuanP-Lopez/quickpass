export async function obtenerEventos(idUsuario: number) {
    const res = await fetch(`https://quickpass-production.up.railway.app/api/evento/administrador/${idUsuario}`)

    if (!res.ok) {
        throw new Error("No se pudieron obtener las solicitudes");
    }

    return res.json();
}
export async function obtenerTurnosAsignadosHoy(
    idAdministrador: number
) {
    const res = await fetch(`http://localhost:5111/api/slot/hoy?idAdministrador=${idAdministrador}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error("No se pudieron obtener los turnos");
    }

    return await res.json();
}
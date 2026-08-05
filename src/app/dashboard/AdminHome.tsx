"use client"

import { useCallback } from "react"; 

import { useAuth } from "@/hooks/useAuth";
import type { EventoResponse } from "@/types/EventoResponse";

import { obtenerEventos } from "@/lib/eventos";

import { CreateEventCard } from "@/components/ui/create-event/create-event";
import { SheetEvent } from "@/components/ui/event-form/event-form";
import { useEffect, useState } from "react";
import { da } from "date-fns/locale";

export default function AdminEvents() {
    const { usuario } = useAuth();

    const [eventos, setEventos] = useState<EventoResponse[]>([]);

    const cargarEventos = useCallback(async () => {
        if (!usuario) return;

        try {
            const data = await obtenerEventos(usuario?.id);
            console.log("Eventos recuperados: ", data);
            setEventos(data);
        } catch (err) {
            console.log(err);
        }
    }, [usuario])

    useEffect(() => {
        cargarEventos();
    }, [cargarEventos]);

    async function eliminarEvento(idEvento: number) {
        if (!usuario) {
            return;
        }

        const confirmar = window.confirm("¿Deseas eliminar este evento?");

        if (!confirmar) {
            return;
        }

        const res = await fetch("https://quickpass-production.up.railway.app/api/evento/eliminar", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id_Evento: idEvento,
                id_Administrador: usuario?.id,
            }),
        });

        if (!res.ok) {
            alert("No se pudo eliminar el evento");
            return;
        }

        cargarEventos();
    }

    return (
        <div>

            <div className="flex flex-row justify-end m-1">
                <SheetEvent />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">

                {eventos.map((evento) => {
                    return (
                        <CreateEventCard
                            key={evento.id}
                            id={evento.id}
                            title={evento.nombre}
                            description={evento.descripcion}
                            timeStamp={evento.fecha}
                            onDelete={eliminarEvento}
                        />
                    );
                })}

            </div>
        </div>
    );
}
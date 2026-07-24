"use client"

import { useAuth } from "@/hooks/useAuth";
import type { EventoResponse } from "@/types/EventoResponse";

import { CreateEventCard } from "@/components/ui/create-event/create-event";
import { SheetEvent } from "@/components/ui/event-form/event-form";
import { useEffect, useState } from "react";

export default function AdminEvents() {
    const { usuario } = useAuth();

    const [eventos, setEventos] = useState<EventoResponse[]>([]);

    useEffect(() => {

        if (!usuario) return;

        console.log("Usuario:", usuario);
        console.log("Id:", usuario?.id);

        async function obtenerEventos() {
            const res = await fetch(`https://quickpassapi-production.up.railway.app/api/evento/administrador/${usuario?.id}`)

            const eventos = await res.json();

            console.log("Eventos recuperados: ", eventos);

            setEventos(eventos || []);
        }

        obtenerEventos();
    }, [usuario]);

    return (
        <div>
            {/*
                Crear formulario de Admin para generar evento.
                Crear vista de eventos creados por admin, y eventos activos del usuario no admin.
            */}
            <div className="flex flex-row justify-end m-1">
                <SheetEvent />
            </div>

            {/* Apartado del admin*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">

                {/* Guia estructura
                
                <CreateEventCard 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                /> */}

                {eventos.map((evento) => {
                    return (
                        <CreateEventCard
                            key={evento.id}
                            title={evento.nombre}
                            description={evento.descripcion}
                            timeStamp={evento.fecha}
                        />
                    );
                })}

            </div>
        </div>
    );
}
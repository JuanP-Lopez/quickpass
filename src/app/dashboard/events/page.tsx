"use client"

import { NextEvent } from "@/components/ui/next-event/next-event";
import { useState, useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";

import { Header } from "@/components/ui/header/header";

export default function UserEvents() {
    const [eventos, setEventos] = useState<[]>([]);

    const { usuario } = useAuth();

    useEffect(() => {
        if (!usuario) return;

        async function ObtenerTurnos() {
            const res = await fetch(`http://localhost:3000/api/slot/turnos?id=${usuario?.id}`,
                { cache: "no-store" }
            );

            const eventos: [] = await res.json();

            setEventos(eventos);
        }

        ObtenerTurnos();
    }, [usuario])

    console.log(eventos);

    return (
        <div>
            
            <Header header="Eventos"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">

                {eventos.map((evento : any) => {
                    return (
                        <NextEvent
                            key={evento.idEvento}
                            title={evento.nombreEvento}
                            description={evento.descripcion}
                            timeStamp={evento.fecha}
                            timeAsigned={evento.estado}
                        />
                    );
                })}

            </div>
        </div>
    );
}
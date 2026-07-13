"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

import type { EventoResponse } from "@/types/EventoResponse";

import { Header } from "@/components/ui/header/header";
import { CardEvent } from "@/components/ui/event-card/event-card";

export default function Home() {
  const [eventos, setEventos] = useState<EventoResponse[]>([]);

  useEffect(() => {
    async function obtenerEventos() {
      const res = await fetch("https://quickpassapi-production.up.railway.app/api/evento/eventos");

      const eventos: EventoResponse[] = await res.json();

      setEventos(eventos);
    }

    obtenerEventos();
  }, []);

  console.log(eventos);
  return (
    <div className="flex flex-col w-full h-full bg-background text-foreground">

      <Header header="Inicio" />

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">

        {eventos.map((evento) => {
          return (
            <Link key={evento.id} href={`/dashboard/events/${evento.id}`}>
            <CardEvent
              title={evento.nombre}
              description={evento.descripcion}
              timeStamp={evento.fecha}
              hora_inicio={evento.hora_Inicio}
              hora_final={evento.hora_Final}
            />
            </Link>
          );
        })}

      </main>

    </div>
  );
}

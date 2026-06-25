import { Header } from "@/components/ui/header/header";
import { CreateEventCard } from "@/components/ui/create-event/create-event";
import { NextEvent } from "@/components/ui/next-event/next-event";
import { SheetEvent } from "@/components/ui/event-form/event-form";

export default function Events() {
    return (
        <div>

            <Header header="Eventos"/>

            {/*
                Crear formulario de Admin para generar evento.
                Crear vista de eventos creados por admin, y eventos activos del usuario no admin.
            */}
            <div className="flex flex-row justify-end m-1">
                <SheetEvent />
            </div>

            {/* Apartado del admin*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
                
                <CreateEventCard 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                />

                <CreateEventCard 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                />

                <CreateEventCard 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                />

                <CreateEventCard 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                />

                <CreateEventCard 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                />

                <CreateEventCard 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                />
            </div>

            {/* Apartado del usuario*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
                
                <NextEvent 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                    timeAsigned="13:45 p.m"
                />

            </div>

        </div>
    )
}
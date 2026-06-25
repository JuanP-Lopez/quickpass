import Link from "next/link";

import { Header } from "@/components/ui/header/header";
import { CardEvent } from "@/components/ui/event-card/event-card";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-background text-foreground">

      <Header header="Inicio"/>

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
        
        {/* Incluir funcionalidad real:
            map() para renderizar elementos según servidor
        */}
        <CardEvent 
          title="Fila pagos Caja 2" 
          description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
          timeStamp="22/06/2026"
        />
        <CardEvent 
          title="Fila pagos Caja 2" 
          description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
          timeStamp="22/06/2026"
        />
        <CardEvent 
          title="Fila pagos Caja 2" 
          description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
          timeStamp="22/06/2026"
        />
        <CardEvent 
          title="Fila pagos Caja 2" 
          description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
          timeStamp="22/06/2026"
        />
        <CardEvent 
          title="Fila pagos Caja 2" 
          description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
          timeStamp="22/06/2026"
        />
        <CardEvent 
          title="Fila pagos Caja 2" 
          description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
          timeStamp="22/06/2026"
        />

      </main>

    </div>
  );
}

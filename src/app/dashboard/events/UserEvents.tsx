import { NextEvent } from "@/components/ui/next-event/next-event";

export default function UserEvents() {
    return(
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-2">
                
                <NextEvent 
                    title="Fila pagos Caja 2" 
                    description="Pagos con tarjeta unicamente. De 8:00 a.m hasta las 6:30 p.m." 
                    timeStamp="22/06/2026"
                    timeAsigned="13:45 p.m"
                />

            </div>
        </div>
    );
}
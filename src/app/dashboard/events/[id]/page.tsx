import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { DateBadge } from "@/components/ui/date-badge/date-bagde";
import { SlotsBadge } from "@/components/ui/slots-badge/slots-badge";
import { TurnButton } from "@/components/ui/action-button/action-button";

export default async function EventoId({ params }: any) {
    const { id } = await params;

    const res = await fetch(`https://quickpassapi-production.up.railway.app/api/evento/vista?id=${id}`,
        { cache: "no-store" }
    );

    const evento = await res.json();

    const slots = await evento.slots;

    console.log(evento);

    console.log(slots);

    return (
        <div>

            <header className="flex flex-col p-4">
                <div className="flex flex-row items-center gap-4">
                    <img
                        src="https://media.gettyimages.com/id/85324975/es/v%C3%ADdeo/rear-view-of-people-waiting-in-line-at-unemployment-office-phoenix-arizona-usa.jpg?s=640x640&k=20&c=7GsrIk1awyrMS0_uvPdSNmdk51EtoRnx_6gzyZFmX8A="
                        alt="Event cover"
                        className="relative z-20 aspect-video w-1/3 rounded-2xl object-cover brightness-60 grayscale dark:brightness-40"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold text-2xl">{evento.nombre}</span>
                        <span className="font-light italic">{evento.descripcion}</span>
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center gap-4">
                    <span>Inicia: {evento.hora_Inicio}</span>
                    <span>Termina: {evento.hora_Final}</span>

                    <div className="flex flex-col gap-4">
                        <DateBadge date={evento.fecha} />
                        <SlotsBadge slots={`Espacios disponibles: ${evento.slotsDisponibles}`} />
                    </div>

                </div>
            </header>

            <div>
                <Table>
                    <TableCaption>Todos los turnos para este evento.</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-mist-900 font-bold">
                            <TableHead className="font-bold">ID</TableHead>
                            <TableHead className="font-bold">Hr. Inicio</TableHead>
                            <TableHead className="font-bold">Hr. Finalización</TableHead>
                            <TableHead className="font-bold text-right">Estado</TableHead>
                            <TableHead className="font-bold">Acción</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-mist-800">

                        {slots.map((slot: any) => {
                            return (
                                <TableRow key={slot.id}>
                                    <TableCell className="font-medium">{slot.id}</TableCell>
                                    <TableCell>{slot.hora_Inicio}</TableCell>
                                    <TableCell>{slot.hora_Final}</TableCell>
                                    <TableCell className="text-right">{slot.estado}</TableCell>
                                    <TableCell><TurnButton/></TableCell>
                                </TableRow>
                            )
                        })}

                    </TableBody>
                </Table>
            </div>

        </div>
    );
}
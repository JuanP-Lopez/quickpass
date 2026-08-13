import { Header } from "@/components/ui/header/header";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { AsistanceButton } from "@/components/ui/asistance-button/asistance-button";
import { NotAsistanceButton } from "@/components/ui/no-asistance-button/no-asistance-button";

export default function Events() {
    return (
        <div>

            <Header header="Reportes" />

            <div>
                <Table>
                    <TableCaption>Todos los turnos para hoy.</TableCaption>
                    <TableHeader>
                        <TableRow className="bg-mist-900 font-bold">
                            <TableHead className="font-bold">Evento</TableHead>
                            <TableHead className="font-bold">Nombre asistente</TableHead>
                            <TableHead className="font-bold">Correo</TableHead>
                            <TableHead className="font-bold">PIN</TableHead>
                            <TableHead className="font-bold">Hora de asistencia</TableHead>
                            <TableHead className="font-bold w-1 text-center">Acciones</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="bg-mist-800">

                        {/* {slots.map((slot: any) => {
                            return (
                                <TableRow key={slot.id}>
                                    <TableCell className="font-medium">{slot.id}</TableCell>
                                    <TableCell>{slot.hora_Inicio}</TableCell>
                                    <TableCell>{slot.hora_Final}</TableCell>
                                    <TableCell className="text-right">{slot.estado}</TableCell>
                                    <TableCell><TurnButton slotId={slot.id} estado={slot.estado} /></TableCell>
                                </TableRow>
                            )
                        })} */}

                        <TableRow>
                                    <TableCell className="font-medium"></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell className="flex flex-row gap-1"> <AsistanceButton /> <NotAsistanceButton/> </TableCell>
                                </TableRow>

                    </TableBody>
                </Table>
            </div>

        </div>
    )
}
"use client"

import { useState, useEffect, useCallback } from "react";
import { useAuth } from "@/hooks/useAuth";

import { TurnoAsignado } from "@/types/TurnoAsignado";
import { obtenerTurnosAsignadosHoy } from "@/lib/asignados";

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
    const { usuario } = useAuth();
    const [turnos, setTurnos] = useState<TurnoAsignado[]>([]);

    const cargarTurnos = useCallback(async () => {
        if (!usuario) return;

        try {
            const data = await obtenerTurnosAsignadosHoy(usuario.id);
            setTurnos(data);
        } catch (error) {
            console.error(error);
        }
    }, [usuario]);

    useEffect(() => {
        cargarTurnos();
    }, [cargarTurnos]);

    console.log("Turnos recuperados: ", turnos);

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

                        {turnos.map((turno: any) => {
                            return (
                                <TableRow key={turno.idSlot}>
                                    <TableCell className="font-medium">{turno.evento}</TableCell>
                                    <TableCell>{turno.nombreUsuario} {turno.apellidoUsuario}</TableCell>
                                    <TableCell>{turno.correo}</TableCell>
                                    <TableCell>{turno.pin}</TableCell>
                                    <TableCell>{turno.horaInicio}</TableCell>
                                    <TableCell className="flex flex-row gap-1"> 
                                        <AsistanceButton slotId={turno.idSlot} onExecute={cargarTurnos}/>
                                        <NotAsistanceButton slotId={turno.idSlot} onExecute={cargarTurnos}/>
                                    </TableCell>
                                </TableRow>
                            )
                        })}


                    </TableBody>
                </Table>
            </div>

        </div>
    )
}
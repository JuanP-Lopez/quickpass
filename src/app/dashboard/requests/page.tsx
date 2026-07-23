"use client"

import { useState, useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";

import type { Solicitud } from "@/types/Solicitud";

import { Header } from "@/components/ui/header/header";
// import { RequestCard } from "@/components/ui/request-card/request-card";
import { RequestEmpty } from "@/components/ui/requests-empty/requests-empty";
import { SearchBar } from "@/components/ui/searchbar/searchbar";
import { RequestTab } from "@/components/ui/requests-tabs/requests-tabs";
import { RejectButton } from "@/components/ui/reject-button/reject-button";
import { AcceptButton } from "@/components/ui/accept-button/reject-button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Requests() {
    const [solicitudes, setSolicitudes] = useState<Solicitud[]>([]);
    const { usuario } = useAuth();

    useEffect(() => {
        if (!usuario) return;

        async function ObtenerSolicitudes() {
            const res = await fetch(`http://localhost:3000/api/evento/solicitudes?id=${usuario?.id}`,
                { cache: "no-store" }
            );

            const solicitudes: [] = await res.json();

            setSolicitudes(solicitudes);
        }

        ObtenerSolicitudes();
    }, [usuario])

    console.log(solicitudes);

    return (
        <div className="flex-1 flex-col">

            <Header header="Solicitudes" />
            <main className="flex flex-col w-full">
                <div className="p-1 flex flex-col gap-1 justify-between lg:flex-row">
                    <RequestTab />
                    <SearchBar />
                </div>

                <div className="w-full">

                    {
                        solicitudes.length === 0 ? (
                            <RequestEmpty />
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-mist-900 font-bold">
                                        <TableHead className="font-bold">Evento</TableHead>
                                        <TableHead className="font-bold">Solicitante</TableHead>
                                        <TableHead className="font-bold">Correo</TableHead>
                                        <TableHead className="font-bold">Hr. Inicio</TableHead>
                                        <TableHead className="font-bold">Hr. Finalización</TableHead>
                                        <TableHead className="font-bold">Fecha</TableHead>
                                        <TableHead className="font-bold">Acción</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className="bg-mist-800">

                                    {solicitudes.map((solicitud: any) => {
                                        return (
                                            <TableRow key={solicitud.idSlot}>
                                                <TableCell className="font-medium">{solicitud.evento}</TableCell>
                                                <TableCell>{solicitud.nombreUsuario} {solicitud.apellidoUsuario}</TableCell>
                                                <TableCell>{solicitud.correo}</TableCell>
                                                <TableCell>{solicitud.hora_Inicio}</TableCell>
                                                <TableCell>{solicitud.hora_Final}</TableCell>
                                                <TableCell>{solicitud.fecha}</TableCell>
                                                <TableCell className="flex flex-row gap-1">
                                                    <RejectButton slotId={solicitud.idSlot} />
                                                    <AcceptButton slotId={solicitud.idSlot} />
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}

                                </TableBody>
                            </Table>
                        )
                    }

                </div>

            </main>

        </div>
    );
}
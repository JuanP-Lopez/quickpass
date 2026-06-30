"use client"

import { useAuth } from "@/hooks/useAuth";

import { Header } from "@/components/ui/header/header";
import AdminEvents from "@/app/dashboard/events/AdminEvents";
import UserEvents from "@/app/dashboard/events/UserEvents";

export default function Events() {
    const { usuario } = useAuth();
    return (
        <div>

            <Header header="Eventos"/>

            {/* Apartado del administrador*/}
            {usuario?.rol === "Administrador" && (
                <AdminEvents/>
            )}

            {/* Apartado del usuario*/}
            {usuario?.rol === "Usuario" && (
                <UserEvents/>
            )}


        </div>
    )
}
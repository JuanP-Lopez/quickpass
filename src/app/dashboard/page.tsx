"use client"

import { useAuth } from "@/hooks/useAuth";

import { Header } from "@/components/ui/header/header";
import AdminHome from "@/app/dashboard/AdminHome";
import UserHome from "@/app/dashboard/UserHome";

export default function Events() {
    const { usuario } = useAuth();
    return (
        <div className="flex flex-col w-full h-full bg-background text-foreground">

            <Header header="Inicio" />

            {/* Apartado del administrador*/}
            {usuario?.rol === "Administrador" && (
                <AdminHome/>
            )}

            {/* Apartado del usuario*/}
            {usuario?.rol === "Usuario" && (
                <UserHome/>
            )}


        </div>
    )
}
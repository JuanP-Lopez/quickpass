"use client"

import React, { useEffect, useState } from "react";

import { AuthContext } from "@/context/AuthContext";
import { Usuario } from "@/types/Usuario";

interface Props {
    children: React.ReactNode;
}

export default function AuthProvider({children} : Props) {
    const [ usuario, setUsuario ] = useState<Usuario |null>(null);

    useEffect(() => {
        const usuarioGuardado = localStorage.getItem("usuario");

        if (usuarioGuardado) {
            setUsuario(JSON.parse(usuarioGuardado));
        }
    }, []);

    function login (usuario : Usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));

        setUsuario(usuario);
    }

    function logout() {
        localStorage.removeItem("usuario");
        setUsuario(null);
    }

    return (
        <AuthContext.Provider
            value={{
                usuario, login, logout
            }}>
            {children}
        </AuthContext.Provider>
    );
}
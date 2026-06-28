"use client"

import { createContext } from "react";
import { Usuario } from "@/types/Usuario";

export interface AuthContextType {
    usuario: Usuario | null;

    login: (usuario: Usuario) => void;

    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
"use client";

import Link from "next/link";
import ModeToggle from "@/components/mode-toggle/mode-toggle";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputRequired } from "@/components/ui/input-required/input-required";
import { ButtonLogin } from "@/components/ui/button-login/button-login";
import { useState } from "react";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5111/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          password
        })
      });
      console.log(res.status);

      const text = await res.text();
      console.log(text);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div className=" flex flex-col justify-center items-center bg-background text-foreground min-h-screen m-2 gap-2">
      <ModeToggle />

      <Card className="w-full p-4">
        <CardHeader>
          <CardTitle>Crear cuenta</CardTitle>
          <CardDescription>Ingresa tus datos para registrarte.</CardDescription>
          <CardAction>
            <Link href="/">O inicia sesión aquí</Link>
          </CardAction>
        </CardHeader>
        <CardContent>

          <form onSubmit={handleSubmit}>
            <InputRequired
              id="Nombre"
              label="Nombre"
              placeholderText="Ingresa tu nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <InputRequired
              id="Apellido"
              label="Apellido"
              placeholderText="Ingresa tu apellido"
              type="text"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
            <InputRequired
              id="Correo"
              label="Correo electrónico"
              placeholderText="Ingresa tu correo electrónico"
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
            <InputRequired
              id="Password"
              label="Contraseña"
              placeholderText="Ingresa tu contraseña"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonLogin placeholderText="Clic para registrarte" />
          </form>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}

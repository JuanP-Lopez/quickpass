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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const router = useRouter();
  const { login } = useAuth();

  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    try {
      // const res = await fetch("https://quickpassapi-production.up.railway.app/api/auth/login", {
      const res = await fetch("http://localhost:5111/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({
          correo,
          password
        })
      });

      console.log(res);

      const result = await res.json();

      login(result);

      if(res.status == 200) {
        router.push("/dashboard");
      }

    } catch (error) {
      console.log("Error al iniciar sesión: ", error);
    }
  };

  useEffect(() => {
    async function probarAPI() {
      try {
        const res = await fetch("http://localhost:5111/api/test");

        console.log("Status:", res.status);

        const data = await res.json();

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    }

    probarAPI();
  }, []);
  return (
    <div className=" flex flex-col justify-center items-center bg-background text-foreground min-h-screen m-2 gap-2">
      <ModeToggle />

      <Card className="w-full p-4">
        <CardHeader>
          <CardTitle>Iniciar sesión</CardTitle>
          <CardDescription>
            Ingresa tus datos para iniciar sesión.
          </CardDescription>
          <CardAction>
            <Link href="/register">O registrate aquí</Link>
          </CardAction>
        </CardHeader>
        <CardContent>

          <form onSubmit={handleSubmit}>

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

            <ButtonLogin placeholderText="Clic para iniciar sesión" />

          </form>

        </CardContent>
        <CardFooter>
          <p>QuickPass 2026</p>
        </CardFooter>
      </Card>
    </div>
  );
}

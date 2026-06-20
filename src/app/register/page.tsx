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
} from "@/components/ui/card"
import { InputRequired } from "@/components/ui/input-required/input-required";
import { ButtonLogin } from "@/components/ui/button-login/button-login";

export default function Register() {
  return (
    <div className=" flex flex-col justify-center items-center bg-background text-foreground min-h-screen m-2 gap-2">

      <ModeToggle/>

      <Card className="w-full p-4">
        <CardHeader>
          <CardTitle>Crear cuenta</CardTitle>
          <CardDescription>Ingresa tus datos para registrarte.</CardDescription>
          <CardAction>
            <Link href="/">O inicia sesión aquí</Link>
          </CardAction>
        </CardHeader>
        <CardContent>
          <InputRequired label="Nombre de usuario" placeholderText='Ingresa tu nombre' type="text" />
          <InputRequired label="Correo electrónico" placeholderText='Ingresa tu correo electrónico' type="email" />
          <InputRequired label="Contraseña" placeholderText='Ingresa tu contraseña' type="password" />
          <ButtonLogin placeholderText="Clic para registrarte"/>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

    </div>
  );
}

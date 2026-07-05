"use client"

import * as React from "react"

import { useAuth } from "@/hooks/useAuth";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { format } from "date-fns"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { da } from "date-fns/locale";

export function SheetEvent() {
  const { usuario } = useAuth();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDesc] = useState("");
  const [fecha, setFecha] = React.useState<Date | undefined>(undefined)
  const [horaInicio, setHoraInicio] = useState("10:30:00");
  const [horaFinal, setHoraFinal] = useState("11:00:00");

  const [open, setOpen] = React.useState(false)

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    console.log("Enviando evento")
    
    const evento = {
      nombre,
      descripcion: descripcion,
      fecha: fecha?.toISOString().split("T")[0],
      hora_Inicio: horaInicio,
      hora_Final: horaFinal,
      id_Administrador: usuario?.id  
    }

    try {
      const res = await fetch("http://localhost:5111/api/evento/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(evento)
      });

      console.log(evento);

      console.log(res.status);
      const data = await res.json();
      console.log(data);

      setNombre("");
      setDesc("");
      setFecha(undefined);
      setHoraInicio("");
      setHoraFinal("");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Sheet>

        <SheetTrigger asChild>
          <Button variant="success">Registrar evento</Button>
        </SheetTrigger>

        <form onSubmit={handleSubmit}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Crear evento</SheetTitle>
            <SheetDescription>
              Ingresa los datos del evento a crear. Cuando estés listo pulsa en confimar.
            </SheetDescription>
          </SheetHeader>

          <div className="grid flex-1 auto-rows-min gap-2 px-4">
            <div className="grid gap-1">
              <Label htmlFor="sheet-demo-name">Nombre del evento</Label>
              <Input id="sheet-demo-name" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="sheet-demo-username">Descripción del evento</Label>
              <Input id="sheet-demo-username" value={descripcion} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <div className="grid gap-1">

              <FieldGroup className="mx-auto max-w-xs flex-col gap-1">

                <Field>
                  <FieldLabel htmlFor="date-picker-optional">Fecha del evento</FieldLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        id="date-picker-optional"
                        className="w-32 justify-between font-normal"
                      >
                        {fecha ? format(fecha, "PPP") : "Selecciona una fecha"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={fecha}
                        captionLayout="dropdown"
                        defaultMonth={fecha}
                        onSelect={(fecha) => {
                          setFecha(fecha)
                          setOpen(false)
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>

                <Field className="w-32">
                  <FieldLabel htmlFor="time-picker-optional">Hora de inicio</FieldLabel>
                  <Input
                    type="time"
                    id="time-picker-optional"
                    step="1"
                    value={horaInicio}
                    onChange={(e) => setHoraInicio(e.target.value)}
                    className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </Field>
                <Field className="w-32">
                  <FieldLabel htmlFor="time-picker-optional">Hora de finalización</FieldLabel>
                  <Input
                    type="time"
                    id="time-picker-optional"
                    step="1"
                    value={horaFinal}
                    onChange={(e) => setHoraFinal(e.target.value)}
                    className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                  />
                </Field>
              </FieldGroup>

            </div>
          </div>

          <SheetFooter>

            <Button type="submit" onClick={handleSubmit}>Confirmar</Button>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>

          </SheetFooter>
        </SheetContent>

      </form>

    </Sheet>

  )
}

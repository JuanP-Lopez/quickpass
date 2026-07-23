"use client"

import { useAuth } from "@/hooks/useAuth";

import { IconPlus } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function TurnButton({slotId, estado} : any) {

  const { usuario } = useAuth();

  async function reservarTurno() {
    const res = await fetch("/api/slot/reservar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idSlot: slotId,
        idUsuario: usuario?.id
      })
    });

    const data = await res.json();

    console.log(data);
  }

  return (
    <div className="flex gap-2">
      <Button variant="success" disabled={estado !== "Disponible"} onClick={reservarTurno}>
        <IconPlus data-icon="inline-start" /> Elegir turno
      </Button>
    </div>
  )
}

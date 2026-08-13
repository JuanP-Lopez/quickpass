"use client"

import { useAuth } from "@/hooks/useAuth";

import { IconCheck } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function AsistanceButton({slotId, estado} : any) {

  const { usuario } = useAuth();

  async function asistio() {
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
      <Button variant="success" onClick={asistio}>
        <IconCheck data-icon="inline-start" /> Asistió
      </Button>
    </div>
  )
}

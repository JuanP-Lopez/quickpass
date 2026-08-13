"use client"

import { useAuth } from "@/hooks/useAuth";

import { IconX } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function NotAsistanceButton({slotId, estado} : any) {

  const { usuario } = useAuth();

  async function noAsistio() {
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
      <Button variant="destructive" onClick={noAsistio}>
        <IconX data-icon="inline-start" /> No asistió
      </Button>
    </div>
  )
}

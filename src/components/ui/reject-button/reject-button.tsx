"use client"

import { useAuth } from "@/hooks/useAuth";

import { IconTrashFilled } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function RejectButton({slotId} : any) {

  const { usuario } = useAuth();

  async function negarTurno() {
    // const res = await fetch("/api/slot/reservar", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     idSlot: slotId,
    //     idUsuario: usuario?.id
    //   })
    // });

    // const data = await res.json();

    // console.log(data);
  }

  return (
    <div className="flex gap-2">
      <Button variant="destructive" onClick={negarTurno}>
        <IconTrashFilled data-icon="inline-start" /> Rechazar
      </Button>
    </div>
  )
}

"use client"

import { IconCheckFilled } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

import type { Props } from "@/types/Props";

export function AcceptButton({slotId, onExecute } : Props) {

  async function AceptarTurno() {
    const res = await fetch("/api/slot/aceptar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idSlot: slotId,
      }),
    });

    if (!res.ok) {
      alert("No se puede aceptar la solicitud");
      return;
    }

    onExecute?.();
  }

  return (
    <div className="flex gap-2">
      <Button variant="success" onClick={AceptarTurno}>
        <IconCheckFilled data-icon="inline-start" /> Aceptar
      </Button>
    </div>
  )
}

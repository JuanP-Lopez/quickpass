"use client"

import type { Props } from "@/types/Props";

import { useAuth } from "@/hooks/useAuth";

import { IconCheck } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function AsistanceButton({ slotId, onExecute } : Props) {

  async function asistio() {
    const res = await fetch("/api/slot/asistio", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idSlot: slotId
      })
    });

    const data = await res.json();

    console.log(data);
    onExecute?.();
  }

  return (
    <div className="flex gap-2">
      <Button variant="success" onClick={asistio}>
        <IconCheck data-icon="inline-start" /> Asistió
      </Button>
    </div>
  )
}

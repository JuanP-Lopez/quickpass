"use client"

import type { Props } from "@/types/Props";

import { useAuth } from "@/hooks/useAuth";

import { IconX } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function NotAsistanceButton({slotId, onExecute } : Props) {

  async function noAsistio() {
    const res = await fetch("/api/slot/noasistio", {
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
      <Button variant="destructive" onClick={noAsistio}>
        <IconX data-icon="inline-start" /> No asistió
      </Button>
    </div>
  )
}

import { IconPlus } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"

export function TurnButton() {
  return (
    <div className="flex gap-2">
      <Button variant="success">
        <IconPlus data-icon="inline-start" /> Elegir turno
      </Button>
    </div>
  )
}

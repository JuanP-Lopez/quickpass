import { IconBell } from "@tabler/icons-react"
import { RefreshCcwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

import type { Props } from "@/types/Props";

export function RequestEmpty({ onExecute }: Props) {

  async function refresh() {
    onExecute?.();
  }
  return (
    <Empty className="h-full bg-muted/30 mt-1">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>No hay información</EmptyTitle>
        <EmptyDescription className="max-w-xs text-pretty">
          De momento no hay solicitudes. Aparecerán pronto.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" onClick={onExecute}>
          <RefreshCcwIcon />
          Refrescar
        </Button>
      </EmptyContent>
    </Empty>
  )
}

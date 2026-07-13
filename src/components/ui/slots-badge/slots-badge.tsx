import { Badge } from "@/components/ui/badge"
import { User2 } from "lucide-react"

type infoRequired = {
    slots: string
}

export function SlotsBadge({ slots }: infoRequired) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
        <User2 data-icon="inline-start"/>
        {slots}
      </Badge>
    </div>
  )
}

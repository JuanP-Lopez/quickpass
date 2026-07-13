import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

type infoRequired = {
    date: string
}

export function DateBadge({ date }: infoRequired) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
        <Calendar data-icon="inline-start"/>
        {date}
      </Badge>
    </div>
  )
}

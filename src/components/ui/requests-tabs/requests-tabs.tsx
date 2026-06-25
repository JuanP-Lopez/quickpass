import { Clock, User, ClockAlert } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RequestTab() {
  return (
    <Tabs defaultValue="preview" className="grid w-fullgrid-cols-2 md:grid-cols-4">
      <TabsList>
        <TabsTrigger value="assigned">
          <Clock />
          Asignadas
        </TabsTrigger>
        <TabsTrigger value="assited">
          <User />
          Asistidas
        </TabsTrigger>
        <TabsTrigger value="no-assisted">
          <ClockAlert />
          Faltas
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type InfoRequired = {
    usuario :  string,
    evento : string,
    fecha :  string,
    hora : string
}

export function RequestCard({usuario, evento, fecha, hora} : InfoRequired) {
  return (
    <Card className="relative w-full max-w-sm flex flex-row p-0 m-0 gap-0">
      <img
        src="https://media.gettyimages.com/id/85324975/es/v%C3%ADdeo/rear-view-of-people-waiting-in-line-at-unemployment-office-phoenix-arizona-usa.jpg?s=640x640&k=20&c=7GsrIk1awyrMS0_uvPdSNmdk51EtoRnx_6gzyZFmX8A="
        alt="Event cover"
        className="aspect-video w-40 h-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader className="w-full m-1">
        <CardTitle>{usuario}</CardTitle>
        <CardDescription>
          Asistirá al evento: {evento}<br/>
          El: {fecha} a las {hora}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

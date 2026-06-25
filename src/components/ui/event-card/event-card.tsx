import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type InfoRequired = {
    title : string,
    description : string,
    timeStamp : string
}

export function CardEvent({title, description, timeStamp} : InfoRequired) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-blue-400/20" />
      <img
        src="https://media.gettyimages.com/id/85324975/es/v%C3%ADdeo/rear-view-of-people-waiting-in-line-at-unemployment-office-phoenix-arizona-usa.jpg?s=640x640&k=20&c=7GsrIk1awyrMS0_uvPdSNmdk51EtoRnx_6gzyZFmX8A="
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{timeStamp}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Ingresar a la fila</Button>
      </CardFooter>
    </Card>
  )
}

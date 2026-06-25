import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "@/components/ui/date-picker/date-picker";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetEvent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="success">Registrar evento</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Crear evento</SheetTitle>
          <SheetDescription>
            Ingresa los datos del evento a crear. Cuando estés listo pulsa en confimar.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-2 px-4">
          <div className="grid gap-1">
            <Label htmlFor="sheet-demo-name">Nombre del evento</Label>
            <Input id="sheet-demo-name" defaultValue="Evento" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="sheet-demo-username">Descripción del evento</Label>
            <Input id="sheet-demo-username" defaultValue="Descripción" />
          </div>
          <div className="grid gap-1">
            <DatePicker />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Confirmar</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

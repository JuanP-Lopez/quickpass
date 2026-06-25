import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { RequestButton } from "@/components/ui/request-button/request-button";

type InfoRequired = {
    usuario :  string,
    evento : string,
    fecha :  string,
    hora : string
}

export function RequestAccordion({ usuario, evento, fecha, hora }: InfoRequired) {
  return (
    <Accordion type="single" collapsible defaultValue="item-1" className="border-b-2 flex w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="p-1">{usuario}</span>
          <span className="p-1">{evento}</span>
          <span className="p-1">{fecha}</span>
          <span className="p-1">{hora}</span>
        </AccordionTrigger>
        <AccordionContent className="m-1 h-full wrap-break-word">
          El usuario {usuario} asistirá al evento {evento} el día {fecha} a la hora {hora} Para validar su asistencia haz clic en el siguiente botón.
          <RequestButton placeholderText="Validar"/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
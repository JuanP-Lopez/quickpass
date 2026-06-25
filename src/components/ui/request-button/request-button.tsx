import { Scan } from "lucide-react"

import { Button } from "@/components/ui/button"

type InputRequiredProps = {
  placeholderText: string,
};

export function RequestButton({placeholderText} : InputRequiredProps) {
  return (
    <div className="m-1 w-full items-center">
      <Button variant="outline">{placeholderText}<Scan /></Button>
    </div>
  )
}

import ModeToggle from "@/components/mode-toggle/mode-toggle";

type headerInfo = {
    header : string
}

export function Header({header} : headerInfo) {
    return (
        <header className="bg-muted text-foreground flex items-center justify-between border-b p-4">

        <h1 className="text-xl font-semibold">
          {header}
        </h1>

        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>

      </header>
    )
}
import Link from "next/link";
import ModeToggle from "@/components/mode-toggle/mode-toggle";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center bg-background text-foreground min-h-screen m-2 gap-2">

      <ModeToggle/>

      <p>Hola mundo</p>
      

    </div>
  );
}

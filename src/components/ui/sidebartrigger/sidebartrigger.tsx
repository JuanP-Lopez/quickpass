"use client"

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

export function FloatingSidebarTrigger() {
  const { state } = useSidebar()

  return (
    <div
      className="fixed bottom-6 z-50 transition-all duration-300"
      style={{
        left:
          state === "expanded"
            ? "calc(var(--sidebar-width) + 1rem)"
            : "1.5rem",
      }}
    >
      <SidebarTrigger className="h-11 w-11 rounded-full border bg-card shadow-lg" />
    </div>
  )
}
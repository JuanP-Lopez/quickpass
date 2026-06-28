"use client"

import Link from "next/link"

import { useAuth } from "@/hooks/useAuth";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Shield,
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  Ticket,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react"
import { it } from "date-fns/locale";

export function AppSidebar() {
  const { usuario } = useAuth();

  const menuItems = [
    {
      title: "Inicio",
      url: "/dashboard",
      icon: LayoutDashboard,
      roles: ["Administrador", "Usuario"]
    },
    {
      title: "Eventos",
      url: "/dashboard/events",
      icon: CalendarDays,
      roles: ["Administrador", "Usuario"]
    },
    {
      title: "Solicitudes",
      url: "/dashboard/requests",
      icon: ClipboardList,
      roles: ["Administrador"]
    },
    {
      title: "Reportes",
      url: "/dashboard/reports",
      icon: Ticket,
      roles: ["Administrador"]
    },
    {
      title: "Configuracion",
      url: "/dashboard/settings",
      icon: Settings,
      roles: ["Administrador", "Usuario"]
    }
  ]

  const items = menuItems.filter(item => item.roles.includes(usuario?.rol ?? ""));

  console.log(items);
  return (
    <Sidebar>

      {/* HEADER */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Shield />
              <div className="flex flex-col text-left">
                <span className="font-semibold">
                  {usuario?.rol}
                </span>
                <span className="text-xs text-muted-foreground">
                  QUICKPASS
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>

              {items.map(item => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <Icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>

            <div className="flex items-center gap-3 px-2 py-2">

              <Avatar>
                <AvatarFallback>
                  JP
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col flex-1">
                <span className="font-medium">
                  {usuario?.nombre} {usuario?.apellido}
                </span>

                <span className="text-xs text-muted-foreground w-0.5">
                  {usuario?.correo}
                </span>
              </div>

              <button>
                <LogOut className="h-4 w-4" />
              </button>

            </div>

          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

    </Sidebar>
  )
}
  import { ThemeProvider } from "@/components/theme-provider";
  import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
  import { AppSidebar } from "@/components/ui/sidebar/sidebar";

  import type { Metadata } from "next";
  import { Geist, Geist_Mono, Inter } from "next/font/google";
  import "./globals.css";
  import { cn } from "@/lib/utils";

  const inter = Inter({subsets:['latin'],variable:'--font-sans'});

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export const metadata: Metadata = {
    title: "QuickPass Dashboard",
    description: "Gestiona tus accesos en unos clics",
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main className="min-h-full flex flex-col">
          <SidebarTrigger />
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main  >
      </SidebarProvider>
    );
  }

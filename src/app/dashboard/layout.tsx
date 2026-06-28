import AuthProvider from "@/providers/AuthProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

import { FloatingSidebarTrigger } from "@/components/ui/sidebartrigger/sidebartrigger";
import { AppSidebar } from "@/components/ui/sidebar/sidebar";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
      <main className="flex-1 flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
          {children}
          </AuthProvider>
          <div className="fixed bottom-4 left-4 z-50">
            <FloatingSidebarTrigger />
          </div>
        </ThemeProvider>
      </main  >
    </SidebarProvider>
  );
}

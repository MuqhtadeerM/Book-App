"use client";

import { Sidebar } from "./sidebar";
import { Header } from "@/shared/header";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#FFFDF6]">
      <Sidebar />

      <main className="ml-[326px] mr-[43px]">
        <Header />

        <div className="pt-[42px]">{children}</div>
      </main>
    </div>
  );
}

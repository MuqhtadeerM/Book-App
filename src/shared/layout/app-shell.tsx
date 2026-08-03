"use client";

import { Sidebar } from "./sidebar";
import { Header } from "@/shared/header";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#FFFDF6] overflow-x-hidden">
      <div className="flex items-start gap-[35px] px-[40px] pt-[30px]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <main className="flex-1 min-w-0 pb-[80px]">
          <Header />

          <div className="mt-[28px]">{children}</div>
        </main>
      </div>
    </div>
  );
}

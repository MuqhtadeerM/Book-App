"use client";

import { Menu, Bell } from "lucide-react";

import { Button } from "@/shared/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { toggleSidebar } from "@/store/slices/uiSlice";

export function Topbar() {
  const dispatch = useAppDispatch();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => dispatch(toggleSidebar())}
      >
        <Menu />
      </Button>

      <h1 className="font-semibold text-lg">Book Reading Platform</h1>

      <Button variant="ghost" size="icon">
        <Bell />
      </Button>
    </header>
  );
}

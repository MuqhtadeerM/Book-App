"use client";

import Link from "next/link";

import { Sheet, SheetContent } from "@/shared/ui/sheet";

import { navigation } from "@/shared/config/navigation";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSidebar } from "@/store/slices/uiSlice";

export function MobileSidebar() {
  const open = useAppSelector((state) => state.ui.sidebarOpen);

  const dispatch = useAppDispatch();

  return (
    <Sheet open={open} onOpenChange={(value) => dispatch(setSidebar(value))}>
      <SheetContent side="left" className="w-64">
        <div className="mt-8 space-y-3">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => dispatch(setSidebar(false))}
              className="block rounded-lg px-3 py-2 hover:bg-muted"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

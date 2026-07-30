"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/shared/config/navigation";
import { cn } from "@/shared/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 shrink-0 border-r bg-background">
      <div className="flex h-full w-full flex-col p-6">
        <h2 className="mb-10 text-2xl font-bold">📚 BookApp</h2>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 transition-colors",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                )}
              >
                <Icon size={20} />
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/shared/config/navigation";
import { cn } from "@/shared/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r bg-background md:flex">
      <div className="flex h-full w-full flex-col p-6">
        <Link href="/" className="mb-10 flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt=""
            width={28}
            height={28}
            priority
          />
          <span className="text-xl font-bold text-foreground">
            Chai<span className="text-primary">Reader</span>
          </span>
        </Link>

        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-[var(--duration-fast)]",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
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

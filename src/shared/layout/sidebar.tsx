"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { navigation } from "@/shared/config/navigation";
import { cn } from "@/shared/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-7 top-8 z-40 hidden md:block">
      <div
        className="
          h-[538px]
          w-64
          rounded-3xl
          bg-[#FFF9EB]
          p-5
          shadow-[0_10px_35px_rgba(0,0,0,0.04)]
        "
      >
        {/* Logo */}
        <Link href="/" className="mb-8 flex items-center">
          <Image
            src="/images/logo.png"
            alt="Chai Reader"
            width={148}
            height={40}
            priority
            className="h-auto w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <motion.div
                key={item.href}
                whileHover={{ x: 3 }}
                transition={{
                  duration: 0.18,
                  ease: "easeOut",
                }}
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex h-11 items-center gap-3 rounded-xl px-4 text-[15px] font-medium transition-all duration-200",

                    active
                      ? "bg-white text-[#2F80ED] shadow-sm"
                      : "text-[#666666] hover:bg-white/70 hover:text-[#222222]",
                  )}
                >
                  <Icon size={18} strokeWidth={1.8} />

                  <span>{item.title}</span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

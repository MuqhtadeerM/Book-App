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
    <aside className="hidden md:block w-[256px] shrink-0">
      <div className="w-[256px] h-[558px] rounded-[16px] border border-[#EFE8D2] bg-[#FFF8E8] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        {/* ================= Logo ================= */}
        <div className="flex items-center h-[39px] w-[195px] ml-[30px] mt-[25px]">
          <Link href="/browse" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Chai Reader"
              width={200}
              height={36}
              priority
              className="object-contain"
            />
          </Link>
        </div>

        {/* ================= Navigation ================= */}
        <nav className="mt-[34px] flex flex-col gap-[4px] px-[10px]">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <motion.div
                key={item.href}
                whileHover={{ x: 2 }}
                transition={{ duration: 0.18 }}
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex h-[40px] items-center rounded-[10px] px-[14px] transition-all duration-200",
                    active
                      ? "bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                      : "hover:bg-white/70",
                  )}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.75}
                    className={cn(
                      "transition-colors",
                      active ? "text-[#4A4A4A]" : "text-[#777777]",
                    )}
                  />

                  <span
                    className={cn(
                      "ml-[14px] text-[15px] font-normal leading-none tracking-[-0.01em] transition-colors",
                      active ? "font-medium text-[#3A3A3A]" : "text-[#6D6D6D]",
                    )}
                  >
                    {item.title}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

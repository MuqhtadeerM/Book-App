"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="relative h-[237px] w-[1130px] overflow-visible rounded-[12px] border border-[#E7E3D7] bg-white"
    >
      {/* ================= Left Content ================= */}

      <div className="absolute left-[34px] top-[32px]">
        <h1 className="w-[888px] text-[28px] font-medium leading-[150%] tracking-[-0.01em] text-[#2F2C44]">
          The Echo of our <span className="font-semibold">Silent Pages</span>
        </h1>

        <p className="mt-3 w-[576px] text-[18px] font-normal leading-[159%] text-[#666666] opacity-80">
          A global publishing technology pavilion designed to run alongside
          major international book fairs
        </p>

        <Link
          href="#"
          className="mt-6 inline-flex items-center gap-3 text-[18px] font-medium text-[#333333] transition-all duration-200 hover:gap-5"
        >
          Explore More
          <ArrowRight size={20} strokeWidth={2} />
        </Link>
      </div>

      {/* ================= Right Illustration ================= */}

      <div className="absolute right-0 top-0 h-full w-[540px] overflow-visible">
        {/* Decorative Background */}

        <Image
          src="/images/hero-bg.png"
          alt=""
          width={752}
          height={558}
          priority
          className="absolute right-[28px] top-[-10px] h-[258px] w-[352px] select-none object-contain"
        />

        {/* Book */}

        <motion.div
          initial={{
            rotate: 5.36,
          }}
          whileHover={{
            rotate: -23,
            scale: 1.03,
            y: -4,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            absolute
            left-[110px]
            top-[-45px]
            z-20
            origin-center
          "
          style={{
            transform: "rotate(-45.36deg)",
          }}
        >
          <Image
            src="/images/hero-book.png"
            alt="Hero Book"
            width={369}
            height={444}
            priority
            className="
              h-[344px]
              w-[569px]
              select-none
              object-contain
              drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)]
            "
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

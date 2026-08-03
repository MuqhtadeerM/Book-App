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
      className="relative h-[237px]  w-full max-w-[2000px] rounded-[12px] border border-[#E7E3D7] bg-white overflow-visible top-[20px]"
    >
      {/* Left Content */}
      <div className="absolute left-[42px] top-[34px]">
        <h1 className="w-[390px] text-[28px] font-medium leading-[150%] tracking-[-0.01em] text-[#2F2C44]">
          The Echo of our <span className="font-semibold">Silent Pages</span>
        </h1>

        <p className="mt-3 w-[560px] text-[16px] leading-[160%] text-[#6C6C6C]">
          A global publishing technology pavilion designed to run alongside
          major international book fairs
        </p>

        <Link
          href="#"
          className="mt-6 inline-flex items-center gap-3 text-[18px] font-medium text-[#2F2F2F]"
        >
          Explore More
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Background */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        width={252}
        height={258}
        priority
        className="absolute right-[10px] top-[10px] h-[58px] w-[340px] object-contain select-none pointer-events-none"
      />

      {/* Book */}
      <motion.div
        whileHover={{ rotate: -22, y: -3, scale: 1.02 }}
        transition={{ duration: 0.25 }}
        className="absolute right-[18px] top-[-30px] z-20 w-[300px]"
        style={{ transform: "rotate(-25.36deg)" }}
      >
        <Image
          src="/images/hero-book.png"
          alt="Hero Book"
          width={269}
          height={544}
          priority
          className="h-[244px] w-[269px] object-contain drop-shadow-[0_22px_30px_rgba(0,0,0,.18)]"
        />
      </motion.div>
    </motion.section>
  );
}

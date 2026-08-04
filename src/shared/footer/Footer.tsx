"use client";

import Image from "next/image";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import FooterWave from "./FooterWave";

export default function Footer() {
  return (
    <footer
      className="
        relative
        mt-2
        h-[641px]
        w-full
        overflow-hidden
        bg-[#F4F8FF]
      "
    >
      <div
        className="
          mx-auto
          flex
          h-full
          max-w-[1366px]
          justify-between
          px-[90px]
          pt-[48px]
        "
      >
        {/* Left */}

        <div className="max-w-[720px] right-[40px]">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Chai Reader"
              width={305}
              height={50}
              priority
            />
          </Link>

          <p
            className="
              mt-10
              max-w-[610px]
              text-[18px]
              leading-[42px]
              text-[#606060]
            "
          >
            Chai Reader is an AI-powered book commerce platform designed to
            transform how people discover and experience books—through reading,
            chatting with books, and more. It is owned and operated by Ailaysa
            Technologies Pvt Ltd.
          </p>
        </div>

        {/* Right */}

        <div className="flex gap-[90px]">
          <FooterLinks
            title="Quick Links"
            links={["About", "Contact", "Home", "FAQ", "Support / Help Center"]}
          />

          <FooterLinks
            title="For Partners"
            links={["For Authors", "For Publishers", "Become a Partner"]}
          />

          <FooterLinks
            title="Legal"
            links={["Terms & Conditions", "Privacy Policy", "Cookie Policy"]}
          />
        </div>
      </div>

      <FooterWave />
    </footer>
  );
}

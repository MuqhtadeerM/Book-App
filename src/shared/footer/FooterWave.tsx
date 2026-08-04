"use client";

import Image from "next/image";

export default function FooterWave() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[210px] overflow-hidden">
      {/* Layer 1 */}
      <Image
        src="/images/footer/wave-1.png"
        alt=""
        fill
        priority
        className="absolute bottom-0 object-cover pointer-events-none select-none"
      />

      {/* Layer 2 */}
      <Image
        src="/images/footer/wave-2.png"
        alt=""
        fill
        priority
        className="absolute bottom-0 object-cover pointer-events-none select-none"
      />

      {/* Layer 3 */}
      <Image
        src="/images/footer/wave-3.png"
        alt=""
        fill
        priority
        className="absolute bottom-0 object-cover pointer-events-none select-none"
      />
    </div>
  );
}

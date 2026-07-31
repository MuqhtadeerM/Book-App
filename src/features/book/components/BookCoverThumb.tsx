import Image from "next/image";

interface BookCoverThumbProps {
  src: string;
  alt: string;
}

export function BookCoverThumb({ src, alt }: BookCoverThumbProps) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted shadow-[var(--shadow-sm)] transition-transform duration-[var(--duration-normal)] group-hover:-translate-y-1">
      <Image src={src} alt={alt} fill sizes="160px" className="object-cover" />
    </div>
  );
}

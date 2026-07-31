import Image from "next/image";

import { Button } from "@/shared/ui/button";

interface CartItemRowProps {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  price: number;
  quantity: number;
  onRemove: (id: string) => void;
}

export function CartItemRow({
  id,
  title,
  author,
  coverImage,
  price,
  quantity,
  onRemove,
}: CartItemRowProps) {
  return (
    <div className="flex items-center gap-4 border-b py-4 last:border-none">
      <div className="relative h-20 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
        <Image
          src={coverImage}
          alt={title}
          fill
          sizes="56px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-medium text-foreground">
          {title}
        </h3>
        <p className="truncate text-xs text-muted-foreground">{author}</p>
        <p className="mt-1 text-sm font-semibold text-foreground">
          ${price.toFixed(2)}{" "}
          <span className="text-muted-foreground">× {quantity}</span>
        </p>
      </div>

      <Button variant="ghost" size="sm" onClick={() => onRemove(id)}>
        Remove
      </Button>
    </div>
  );
}

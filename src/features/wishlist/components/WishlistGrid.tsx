interface WishlistGridProps {
  bookIds: string[];
}

export function WishlistGrid({ bookIds }: WishlistGridProps) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {bookIds.map((id) => (
        <div
          key={id}
          className="flex aspect-[3/4] items-center justify-center rounded-xl border border-dashed text-xs text-muted-foreground"
        >
          Book {id}
        </div>
      ))}
    </div>
  );
}

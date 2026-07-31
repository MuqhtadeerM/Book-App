interface CarouselPanelProps {
  title: string;
  children?: React.ReactNode;
  isEmpty?: boolean;
  emptyMessage?: string;
}

export function CarouselPanel({
  title,
  children,
  isEmpty = false,
  emptyMessage = "Nothing to show here yet.",
}: CarouselPanelProps) {
  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold text-foreground sm:text-xl">
        {title}
      </h2>

      {isEmpty ? (
        <p className="mt-4 text-sm text-muted-foreground">{emptyMessage}</p>
      ) : (
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      )}
    </section>
  );
}

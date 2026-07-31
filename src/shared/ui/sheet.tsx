"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/shared/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetPortal = SheetPrimitive.Portal;

type SheetOverlayRef = React.ElementRef<typeof SheetPrimitive.Overlay>;
type SheetOverlayProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Overlay
>;

const SheetOverlay = React.forwardRef<SheetOverlayRef, SheetOverlayProps>(
  function SheetOverlay({ className, ...props }, ref) {
    return (
      <SheetPrimitive.Overlay
        className={cn("fixed inset-0 z-50 bg-black/40", className)}
        {...props}
        ref={ref}
      />
    );
  },
);
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-[var(--shadow-lg)] transition ease-in-out",
  {
    variants: {
      side: {
        left: "inset-y-0 left-0 h-full border-r",
        right: "inset-y-0 right-0 h-full border-l",
      },
    },
    defaultVariants: { side: "left" },
  },
);

type SheetContentRef = React.ElementRef<typeof SheetPrimitive.Content>;
interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<SheetContentRef, SheetContentProps>(
  function SheetContent({ side = "left", className, children, ...props }, ref) {
    return (
      <SheetPortal>
        <SheetOverlay />
        <SheetPrimitive.Content
          ref={ref}
          className={cn(sheetVariants({ side }), className)}
          {...props}
        >
          {children}
          <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        </SheetPrimitive.Content>
      </SheetPortal>
    );
  },
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetContent };

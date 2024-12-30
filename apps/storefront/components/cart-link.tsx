"use client";

import { Route } from "@/config/routes";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@workspace/ui/components/button";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export function CartLink() {
  const { itemsCount } = useCart();

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="relative [&_svg]:size-7 size-12"
    >
      <Link href={Route.Cart}>
        <ShoppingCartIcon />
        <span className="sr-only">Show cart</span>
        {itemsCount > 0 && (
          <div className="absolute top-0 right-0 flex items-center justify-center size-4 bg-info text-info-foreground rounded-full text-xs">
            {itemsCount}
          </div>
        )}
      </Link>
    </Button>
  );
}

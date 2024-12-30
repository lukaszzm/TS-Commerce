import { CartLink } from "@/components/cart-link";
import { Route } from "@/config/routes";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto p-4 flex justify-between items-center gap-4">
        <Link
          href={Route.Products}
          className="text-2xl font-bold"
          aria-label="Return to home page"
        >
          <span className="text-muted-foreground">TS</span> Commerce
        </Link>
        <CartLink />
      </div>
    </header>
  );
}

import { Route } from "@/config/routes";
import { Category } from "@/types";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { URLSearchParams } from "node:url";

export function CategoryLink({ id, name }: Pick<Category, "id" | "name">) {
  const href =
    Route.Products +
    "?" +
    new URLSearchParams({ categoryId: id.toString() }).toString();

  return (
    <Link href={href}>
      <Button className="w-full justify-start" variant="ghost">
        {name}
      </Button>
    </Link>
  );
}

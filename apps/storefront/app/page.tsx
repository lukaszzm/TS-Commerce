import { Route } from "@/config/routes";
import { redirect } from "next/navigation";

export default function Page() {
  return redirect(Route.Products);
}

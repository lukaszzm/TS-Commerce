import { Route } from "@/config/routes";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

type SearchParams = Promise<{ orderId?: string }>;

export default async function OrderConfirmationPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { orderId } = await searchParams;

  return (
    <>
      <h1 className="text-4xl font-bold">Order Confirmation (ID: {orderId})</h1>
      <p>Your order has been confirmed. Thank you for shopping with us!</p>
      <Button size="lg" className="mt-4 max-w-56 mx-auto" asChild>
        <Link href={Route.Products}>Back to store</Link>
      </Button>
    </>
  );
}

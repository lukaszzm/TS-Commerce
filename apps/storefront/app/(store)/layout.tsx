import { getCart } from "@/actions/cart";
import { Header } from "@/components/header";
import { CartProvider } from "@/contexts/cart-provider";
import { PropsWithChildren } from "react";

export default async function StoreLayout({ children }: PropsWithChildren) {
  const cart = await getCart();

  return (
    <CartProvider initCart={cart}>
      <main className="min-h-screen flex flex-col w-full">
        <Header />
        {children}
      </main>
    </CartProvider>
  );
}

import { PropsWithChildren } from "react";

export default function CartLayout({ children }: PropsWithChildren) {
  return (
    <div className="container p-8 mx-auto flex flex-col gap-6">
      <h1 className="text-4xl font-semibold">Your Cart</h1>
      {children}
    </div>
  );
}

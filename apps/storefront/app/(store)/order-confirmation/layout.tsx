import { PropsWithChildren } from "react";

export default function OrderConfirmationLayout({
  children,
}: PropsWithChildren) {
  return (
    <div className="grid place-content-center container mx-auto flex-1 text-center space-y-4">
      {children}
    </div>
  );
}

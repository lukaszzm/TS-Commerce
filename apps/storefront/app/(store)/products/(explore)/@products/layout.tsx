import { PropsWithChildren } from "react";

export default function ProductsLayout({ children }: PropsWithChildren) {
  return (
    <div className="py-4 px-8 space-y-6">
      <h2 className="font-semibold text-xl">Products:</h2>
      <div className="flex flex-wrap gap-5">{children}</div>
    </div>
  );
}

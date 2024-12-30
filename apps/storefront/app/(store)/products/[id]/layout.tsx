import { PropsWithChildren } from "react";

export default async function ProductLayout({ children }: PropsWithChildren) {
  return (
    <div className="container p-8 mx-auto flex flex-col gap-6">{children}</div>
  );
}

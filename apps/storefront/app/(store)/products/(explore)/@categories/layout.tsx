import { PropsWithChildren } from "react";

export default function CategoriesLayout({ children }: PropsWithChildren) {
  return (
    <aside className="space-y-6 border-r border-border py-4 px-8">
      <h2 className="font-semibold text-xl">Categories:</h2>
      <ul className="space-y-3">{children}</ul>
    </aside>
  );
}

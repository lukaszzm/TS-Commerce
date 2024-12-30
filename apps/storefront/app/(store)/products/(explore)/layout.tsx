import { Banner } from "@/components/banner";
import React from "react";

interface ProductExploreLayoutProps {
  children: React.ReactNode;
  categories: React.ReactNode;
  products: React.ReactNode;
}

export default function ProductExploreLayout({
  children,
  categories,
  products,
}: ProductExploreLayoutProps) {
  return (
    <>
      <Banner />
      <div className="container mx-auto p-4 flex gap-2">
        {categories}
        {products}
      </div>
      {children}
    </>
  );
}

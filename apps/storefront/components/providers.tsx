"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { CartProvider } from "@/contexts/cart-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      <CartProvider>{children}</CartProvider>
    </NextThemesProvider>
  );
}

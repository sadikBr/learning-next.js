"use client";

import { ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider className="flex h-full w-full flex-col">
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  );
}

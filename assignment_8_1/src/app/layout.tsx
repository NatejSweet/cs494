"use client";
import { AnimalsContextProvider } from "@/context/animalsContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimalsContextProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </AnimalsContextProvider>
  );
}

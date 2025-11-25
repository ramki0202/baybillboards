import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Bay Billboards",
  description: "Digital billboard platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased scroll-smooth bg-white">
        {children}
      </body>
    </html>
  );
}

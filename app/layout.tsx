import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "yassir's portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>
          <section className="min-h-screen">
            <main>{children}</main>
          </section>
        </Providers>
      </body>
    </html>
  );
}

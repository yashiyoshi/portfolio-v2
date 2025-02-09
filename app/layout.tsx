"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background">
        <QueryClientProvider client={queryClient}>
          <section className="min-h-screen">
            <main>{children}</main>
          </section>
        </QueryClientProvider>
      </body>
    </html>
  );
}

"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import Head from "next/head";

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>yassir's 2025</title>
      </Head>
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

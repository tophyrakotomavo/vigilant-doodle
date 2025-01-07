import { Toaster } from "@/app/_components/ui/sonner";
import ReactQueryProvider from "@/packages/react-query/provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Staf - FPVM",
  description:
    "Welcome to Staf - FPVM, your portal to explore and connect with the vibrant community of Ampandrana Taninanandrano.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale ?? "en"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <NextTopLoader color="green" />
          {children}
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

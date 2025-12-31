import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { SpoilerGuardProvider } from "@/components/spoiler-guard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Grand Line Archives - One Piece Theories & Lore",
  description: "The definitive open-source hub for One Piece theories and lore. Explore interconnected evidence chains and join the community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpoilerGuardProvider>
          <Navigation />
          {children}
        </SpoilerGuardProvider>
      </body>
    </html>
  );
}

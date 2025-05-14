import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Banner from '@/components/layouts/Banner';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import BackToTopButton from '@/components/ui/BackToTopButton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: 'ContigoU Health Services',
    description: 'Connecting Patients to Healthcare Solutions',
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
      <Banner />
      <Header />
      {children}
      <Footer />
      <BackToTopButton />

      </body>
    </html>
  );
}

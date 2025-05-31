import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Paula Fatosme - Psicóloga",
  description: "Atendimento online para adultos",
  viewport: "width=device-width, initial-scale=1",
  creator: "Samuel Carvalho",
  authors:[{name: 'Samuel Carvalho', url: 'https://github.com/thecarvalhosamuel'}],
  keywords:['psicologia', 'psicologa', 'terapia', 'aconselhamento', 'saude', 'saude mental', 'mente'],
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

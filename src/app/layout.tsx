import type { Metadata } from "next";
import { Fira_Code, Fira_Sans_Condensed, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/header";

const montserratSan = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Paula Fatosme - Psicóloga",
  description: "Atendimento online para adultos",
  viewport: "width=device-width, initial-scale=1",
  creator: "Samuel Carvalho",
  authors: [{ name: 'Samuel Carvalho', url: 'https://github.com/thecarvalhosamuel' }],
  keywords: ['psicologia', 'psicologa', 'terapia', 'aconselhamento', 'saude', 'saude mental', 'mente'],
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
        className={`${montserratSan.variable} ${firaCode.variable} antialiased item-center justify-center flex w-full max-w-7xl mx-auto`}
      >
        <Header />
        <div className="flex w-full">
          {children}
        </div>
      </body>
    </html>
  );
}

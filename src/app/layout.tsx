import type { Metadata } from "next";
import { Fira_Code, Fira_Sans_Condensed, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/common/header";
import { Footer2 } from "@/components/common/footer";
import { Powered } from "@/components/common/powered";

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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body
        className={`${montserratSan.variable} ${firaCode.variable} antialiased item-center justify-center flex flex-col w-full mx-auto max-w-[90rem]`}
      >
        <Header />
        <div className="flex w-full mt-16">
          {children}
        </div>
        <Footer2 />
        <Powered />
      </body>
    </html>
  );
}

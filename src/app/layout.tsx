import type { Metadata } from 'next'
import { Fira_Code, Fira_Sans_Condensed, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/common/header'
import { Footer2 } from '@/components/common/footer'
import { Powered } from '@/components/common/powered'
import Head from 'next/head'

const montserratSan = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Maria Paula Fatosme - Psicóloga',
  description: 'Atendimento online para adultos',
  viewport: 'width=device-width, initial-scale=1',
  creator: 'Samuel Carvalho',
  authors: [
    { name: 'Samuel Carvalho', url: 'https://github.com/thecarvalhosamuel' },
  ],
  keywords: [
    'psicologia',
    'psicologa',
    'terapia',
    'aconselhamento',
    'saude',
    'saude mental',
    'mente',
  ],
  category: 'health',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br'>
      <Head>
        {/* Favicon tradicional */}
        <link rel="icon" type="image/png" sizes="512x512" href="/favicons/favicon-512x512.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicons/favicon-256x256.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicons/favicon-192x192.png" />
        <link rel="icon" type="image/png" sizes="152x152" href="/favicons/favicon-152x152.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicons/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/favicons/favicon-64x64.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon-180x180.png" />

        {/* Android/Chrome */}
        <link rel="manifest" href="/favicons/site.webmanifest" />

        {/* Meta para tema do navegador */}
        <meta name="theme-color" content="#ffffff" />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        />
      </Head>
      <body
        className={`${montserratSan.variable} ${firaCode.variable} `}
      >
        <div className='item-center mx-auto flex w-full max-w-[90rem] flex-col justify-center antialiased '>
          <Header />
          <div className='mt-16 flex w-full'>{children}</div>
        </div>
        <div className='w-full flex-col justify-center antialiased bg-[#A96058] mt-4'>
          <div className='item-center mx-auto flex w-full max-w-[90rem] flex-col justify-center mt-8 pb-4'>
            <Footer2 />
          </div>
        </div>
        <Powered />
      </body>
    </html>
  )
}

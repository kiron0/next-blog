import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NextAuthSessionProvider from "./provider/sessionProvider";
import { Toaster } from 'react-hot-toast';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Blog || TOUFIQ HASAN KIRON',
  description: 'It is fullstack blog application. It is made with Next.js, TypeScript, Tailwind CSS, NextAuth.js, MongoDB, and Mongoose.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
        <Toaster />
      </body>
    </html>
  )
}

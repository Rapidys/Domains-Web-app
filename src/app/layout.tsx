import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from "react";
import Layout from "src/components/layout";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Domains',
  description: 'desc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Layout>
          {children}
      </Layout>
      </body>
    </html>
  )
}

import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'
import ThemeProvider from '@/context/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900'
  ],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: 'DevFlow',
  description: 'DevFlow Next.js 13 is a clone of Stack Over flow',
  icons: {
    icon: '/assets/images/site-logo.svg'
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient, hover:text-primary-500'
            }
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}

import { ReactNode } from 'react'
import './globals.css'
import { IBM_Plex_Sans as ibmPlexSans } from 'next/font/google'

const plex = ibmPlexSans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={plex.className}>{children}</body>
    </html>
  )
}

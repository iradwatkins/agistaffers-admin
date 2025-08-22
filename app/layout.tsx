import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AGI Staffers Admin Dashboard',
  description: 'Admin Dashboard for AGI Staffers Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
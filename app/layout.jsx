import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rajwant Morya - Social Media Manager',
  description: 'Professional portfolio of Rajwant Morya, an experienced Social Media Manager specializing in digital marketing and content strategy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-background">
          {children}
        </main>
      </body>
    </html>
  )
}

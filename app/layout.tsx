import Navbar from '@/components/Navbar'
import './globals.css'
import { Raleway } from 'next/font/google'
import Footer from '@/components/Footer'

const font = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: "Sumona's Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}

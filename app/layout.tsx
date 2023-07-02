import Navbar from '@/components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const font = Poppins({ subsets: ['latin'],weight: ['400'] })

export const metadata = {
  title: "Sumona Shimu",
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

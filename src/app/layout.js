import Navbar from '@/components/navbar'
import './globals.css'
import { Sora } from 'next/font/google'
import ParticleComponent from '@/components/particle'
import Footer from '@/components/footer'

const sora = Sora({ subsets: ['latin'] })

export const metadata = {
  title: 'Nareswara Porto',
  description: 'Nareswara Portofolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
      <ParticleComponent />
      {/* <Navbar /> */}
        {children}
      <Footer/>
      </body>
    </html>
  )
}

import { Header } from '@/components/header'
import './globals.css'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Portia',
  description: 'My Personal Portfolio'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${nunito.className} bg-zinc-950 text-zinc-500`}>
        <Header />

        {children}
      </body>
    </html>
  )
}

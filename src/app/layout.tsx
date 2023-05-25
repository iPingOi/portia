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
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

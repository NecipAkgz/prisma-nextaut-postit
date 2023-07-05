import { Roboto } from 'next/font/google'
import Nav from './auth/Nav'
import QueryWrapper from './auth/QueryWrapper'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Post it!',
  description: 'Post it if you can',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        className={`mx-4 bg-gray-200 md:mx-48 xl:mx-96 ${roboto.className}`}>
        <QueryWrapper>
          <Nav />
          {children}
        </QueryWrapper>
      </body>
    </html>
  )
}

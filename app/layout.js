import NavBar from '../components/NavBar/navBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Theme, ThemePanel } from '@radix-ui/themes'
import "@radix-ui/themes/styles.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Goldsplit',
  description: 'Get the most out of your splits with Goldsplit!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance='dark' accentColor='amber'>
          <NavBar/>
          {children}
        </Theme>
      </body>
    </html>
  )
}

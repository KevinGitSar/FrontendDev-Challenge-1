import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Log in - Prepr Network',
  description: 'Preprlabs\' Log in Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>{children}</body>
    </html>
  )
}

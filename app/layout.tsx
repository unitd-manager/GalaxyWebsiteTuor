import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "./components/ui/toaster"
import { ThemeProvider } from "./components/providers"
import Navigation from "./components/Navigation"
import WhatsAppButton from "./components/WhatsAppButton"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Islamic Travel Hub',
  description: 'Your trusted partner for Islamic travel experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

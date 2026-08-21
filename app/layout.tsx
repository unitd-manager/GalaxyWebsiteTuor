import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "./components/ui/toaster"
import { ThemeProvider } from "./components/providers"
// MACA nav is disabled on the homepage now that the Tourist page has its own
// navbar (TouristNavbar) built in. Re-enable by uncommenting the import and
// the <Navigation /> usage below if you restore the MACA homepage.
// import Navigation from "./components/Navigation"
import WhatsAppButton from "./components/WhatsAppButton"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Galaxy Travels',
  description:
    'Galaxy Tours & Travels — handpicked international tour packages across Asia, the Middle East, and the Indian Ocean. Flights, stays, and guided sightseeing, all planned for you.',
  icons: {
    icon: '/lovable-uploads/galaxy-logo.png',
    shortcut: '/lovable-uploads/galaxy-logo.png',
    apple: '/lovable-uploads/galaxy-logo.png',
  },
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
          {/* <Navigation /> */}
          {children}
          <WhatsAppButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
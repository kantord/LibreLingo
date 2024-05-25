import "./globals.css"
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode
}
 
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="container">
        {children}
        </div>
      </body>
    </html>
  )
}

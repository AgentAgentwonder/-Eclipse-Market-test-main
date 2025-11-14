import type React from "react"
import { APIProvider } from "@/lib/api-context"
import { Geist, Geist_Mono } from "next/font/google"
import { useState } from "react"
import Sidebar from "@/components/sidebar"
import TopNav from "@/components/top-nav"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <title>Eclipse Market Trading</title>
        <meta name="description" content="Professional Crypto Trading Software" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <APIProvider>
          <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={sidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
              <TopNav onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
              <main className="flex-1 overflow-auto fade-in">{children}</main>
            </div>
          </div>
        </APIProvider>
      </body>
    </html>
  )
}

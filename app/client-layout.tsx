"use client"

import type React from "react"
import { APIProvider, useAPIKeys } from "@/lib/api-context"
import { Geist, Geist_Mono } from 'next/font/google'
import { useState, useEffect } from "react"
import Sidebar from "@/components/sidebar"
import TopNav from "@/components/top-nav"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

function LayoutContent({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { apiKeys } = useAPIKeys()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const htmlElement = document.documentElement
    htmlElement.setAttribute("data-theme", apiKeys?.theme || "eclipse")
    htmlElement.classList.add("dark")
  }, [apiKeys?.theme])

  if (!mounted) return null

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
        <main className="flex-1 overflow-auto fade-in">{children}</main>
      </div>
    </div>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Eclipse Market Trading</title>
        <meta name="description" content="Professional Crypto Trading Software" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <APIProvider>
          <LayoutContent>{children}</LayoutContent>
        </APIProvider>
      </body>
    </html>
  )
}

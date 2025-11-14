"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  TrendingUp,
  Wallet,
  Settings,
  LogOut,
  ChevronRight,
  ChevronDown,
  Eye,
  Brain,
  AlertCircle,
  Users,
  BookOpen,
} from "lucide-react"
import { useState } from "react"

interface SidebarProps {
  isOpen: boolean
}

interface MenuItem {
  label: string
  href?: string
  icon: React.ReactNode
  submenu?: MenuItem[]
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const pathname = usePathname()
  const [expandedMenus, setExpandedMenus] = useState<string[]>([])

  const toggleSubmenu = (label: string) => {
    setExpandedMenus((prev) => (prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]))
  }

  const menuItems: MenuItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      label: "Trading",
      href: "/trading",
      icon: <TrendingUp className="w-5 h-5" />,
      submenu: [
        { label: "Spot Trading", href: "/trading/spot", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Futures", href: "/trading/futures", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Paper Trading", href: "/trading/paper", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Order Book", href: "/trading/orderbook", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "P2P Marketplace", href: "/trading/p2p", icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <Wallet className="w-5 h-5" />,
      submenu: [
        { label: "Holdings", href: "/portfolio/holdings", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Positions", href: "/portfolio/positions", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Performance", href: "/portfolio/performance", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Trading History", href: "/portfolio/history", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Wallets", href: "/portfolio/wallets", icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      label: "Market Surveillance",
      href: "/market",
      icon: <Eye className="w-5 h-5" />,
      submenu: [
        { label: "Market Trends", href: "/market/trends", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Fresh Coins", href: "/market/fresh-coins", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Fresh Buyers", href: "/market/fresh-buyers", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Sentiment", href: "/market/sentiment", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Watchlist", href: "/market/watchlist", icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      label: "AI Analysis",
      href: "/ai",
      icon: <Brain className="w-5 h-5" />,
      submenu: [
        { label: "Predictions", href: "/ai/predictions", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "AI Assistant", href: "/ai/assistant", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Risk Scores", href: "/ai/risk", icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      label: "Governance & Alerts",
      href: "/governance",
      icon: <AlertCircle className="w-5 h-5" />,
      submenu: [
        { label: "Proposals", href: "/governance/proposals", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Alerts", href: "/governance/alerts", icon: <ChevronRight className="w-4 h-4" /> },
        { label: "Voice Control", href: "/governance/voice", icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
  ]

  const bottomMenuItems: MenuItem[] = [
    {
      label: "Workspaces",
      href: "/workspaces",
      icon: <Users className="w-5 h-5" />,
    },
    {
      label: "Learning",
      href: "/learning",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      label: "Settings",
      href: "/settings",
      icon: <Settings className="w-5 h-5" />,
    },
  ]

  const isMenuItemActive = (item: MenuItem) => {
    return pathname === item.href || item.submenu?.some((sub) => pathname.startsWith(sub.href!))
  }

  return (
    <aside
      className={`bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300 ease-out overflow-hidden flex flex-col ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      {/* Top padding */}
      <div className="h-16 border-b border-sidebar-border flex items-center px-6">
        <span className="font-bold text-lg tracking-wide">Menu</span>
      </div>

      {/* Main menu items */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => (
            <li key={item.label}>
              <div
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isMenuItemActive(item)
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                } ${item.submenu ? "cursor-pointer" : ""}`}
                onClick={() => item.submenu && toggleSubmenu(item.label)}
              >
                {item.submenu ? (
                  <>
                    {item.icon}
                    <span className="text-sm font-medium flex-1">{item.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        expandedMenus.includes(item.label) ? "rotate-180" : ""
                      }`}
                    />
                  </>
                ) : (
                  <>
                    <Link href={item.href!} className="flex items-center gap-3 flex-1">
                      {item.icon}
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  </>
                )}
              </div>
              {item.submenu && expandedMenus.includes(item.label) && (
                <ul className="ml-6 mt-2 space-y-1">
                  {item.submenu.map((subitem) => (
                    <li key={subitem.href}>
                      <Link
                        href={subitem.href!}
                        className={`flex items-center gap-2 px-3 py-2 rounded text-xs transition-colors ${
                          pathname === subitem.href
                            ? "bg-sidebar-primary/60 text-sidebar-primary-foreground"
                            : "text-sidebar-foreground/80 hover:bg-sidebar-accent/40"
                        }`}
                      >
                        {subitem.icon}
                        {subitem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom menu items */}
      <div className="border-t border-sidebar-border p-4 space-y-2">
        <ul className="space-y-1">
          {bottomMenuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href!}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${
                  pathname === item.href
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-destructive/20 hover:text-destructive transition-colors text-sm mt-4">
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  )
}

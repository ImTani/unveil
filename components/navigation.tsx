"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { 
  Search, Menu, Home, TrendingUp, BookOpen, 
  Info, Sun, Moon, BarChart2, X 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { useStore } from "@/lib/store"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/trends", label: "Trends", icon: TrendingUp },
  { href: "/stories", label: "Stories", icon: BarChart2 },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/about", label: "About", icon: Info },
]

export function Navigation() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useStore()

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="md:hidden"
                >
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="left" className="glass-panel">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link 
                        key={item.href} 
                        href={item.href}
                        className={`flex items-center space-x-2 p-2 rounded-lg transition-colors
                          ${pathname === item.href 
                            ? 'bg-white/10 text-white' 
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                          }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
            
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              <Link href="/">UNVEIL</Link>
            </motion.h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavItem 
                key={item.href}
                href={item.href}
                icon={<item.icon className="h-5 w-5" />}
                label={item.label}
                isActive={pathname === item.href}
              />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {isSearchOpen ? (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "200px", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                className="relative"
              >
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full bg-white/5"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-6 w-6" />
                </Button>
              </motion.div>
            )}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <Sun className="h-6 w-6" />
                ) : (
                  <Moon className="h-6 w-6" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavItem({ 
  href, 
  icon, 
  label, 
  isActive 
}: { 
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          variant="ghost" 
          className={`flex items-center space-x-2 relative ${
            isActive ? 'text-white' : 'text-white/70'
          }`}
        >
          {icon}
          <span>{label}</span>
          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-viral to-important"
            />
          )}
        </Button>
      </motion.div>
    </Link>
  )
}
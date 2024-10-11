import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "./ThemeProvider"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  setCurrentPage: (page: string) => void;
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    setIsOpen(false)
  }

  return (
    <header className="bg-background border-b-4 border-foreground">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <div className="pacman"></div>
          <span className="text-2xl font-bold text-primary">RetroGaming</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><Button variant="outline" onClick={() => setCurrentPage('home')}>Home</Button></li>
            <li><Button variant="outline" onClick={() => setCurrentPage('games')}>Games</Button></li>
            <li><Button variant="outline" onClick={() => setCurrentPage('contact')}>Contact</Button></li>
          </ul>
        </nav>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handlePageChange('home')}>
                Home
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handlePageChange('games')}>
                Games
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handlePageChange('contact')}>
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="secondary" className="w-full">Sign Up</Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="secondary" className="hidden md:inline-flex">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
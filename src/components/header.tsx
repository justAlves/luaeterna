import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/images/logo.png'
import { Button } from './ui/button'
import { Heart } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      {/* Backdrop blur background */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm -z-10"></div>

      {/* Header content */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            className="w-auto h-12 md:h-16"
          />
        </Link>
        <Link href="/criar">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity">
            Crie sua Lua Eterna
            <Heart className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </header>
  )
}

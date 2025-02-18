import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/images/logo.png'
import { Button } from './ui/button'

export default function Header() {
  return (
    <header
      className="flex justify-between items-center px-4 -mt-24"
    >
      <Image
        src={Logo}
        alt="Logo"
        width={300}
        height={300}
      />
      <Button>
        Crie sua Lua Eterna
      </Button>
    </header>
  )
}

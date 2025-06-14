'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/common/ui/drawer'
import { Button } from '@/components/common/ui/button'
import Image from 'next/image'

const navLinks = [
  { href: '#sobre', label: 'Sobre mim' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#faq', label: 'FAQ' },
  { href: '#agendar', label: 'Agendar' },
]

export function Header() {
  return (
    <header className='fixed top-0 left-0 z-50 w-full bg-[#A96058] shadow-sm md:rounded-b-xl'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>
        {/* Logo */}
        <div className='flex justify-between'>
          <span>&emsp;</span>
          <Link href='/' className='text-2xl font-bold'>
            <Image
              src='/images/logo.webp'
              alt='Maria Paula Fatosme'
              width={1000}
              height={40}
              className='h-8 w-auto object-contain scale-200 sm:ml-4'
            />
          </Link>
        </div>
        {/* Desktop Menu */}
        <nav className='hidden gap-6 md:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-sm font-medium transition-colors hover:text-indigo-600'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Drawer */}
        <div className='md:hidden'>
          <Drawer direction='right'>
            <DrawerTrigger asChild>
              <Button variant='ghost' size='icon'>
                <Menu className='h-6 w-6' />
              </Button>
            </DrawerTrigger>

            <DrawerContent className='ml-auto flex h-full w-64 flex-col border-l bg-white'>
              {/* Header do drawer */}
              <div className='flex items-center justify-between border-b px-4 py-4 bg-[#A96058]'>
                {/* <span className='text-lg font-bold'>Menu</span> */}
                <div className='flex justify-between'>
                  <span>&emsp;</span>
                  <Image
                    src='/images/logo.webp'
                    alt='Maria Paula Fatosme'
                    width={1000}
                    height={40}
                    className='h-8 w-auto object-contain scale-200 sm:ml-4'
                  />
                </div>
                <DrawerClose asChild>
                  <Button variant='ghost' size='icon'>
                    <X className='h-5 w-5' color='white' />
                  </Button>
                </DrawerClose>
              </div>

              {/* Navegação */}
              <nav className='flex flex-col gap-4 px-4 py-6'>
                {navLinks.map((link) => (
                  <DrawerClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className='text-base font-medium transition-colors hover:text-indigo-600'
                    >
                      {link.label}
                    </Link>
                  </DrawerClose>
                ))}
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  )
}

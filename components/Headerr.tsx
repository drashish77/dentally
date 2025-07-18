'use client'

import { routes } from '@/data/route'
import Link from 'next/link'
import { FileText, Menu, X } from 'lucide-react'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

import { ThemeToggle } from './theme-toggle'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'

const Headerr = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='px-2 md:p-0 md:container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-2 group'>
          <Link href='/' className='flex items-center gap-2'>
            <div className='text-2xl md:text-3xl group-hover:scale-110'>
              <Image src='/logo_n.png' height={150} width={150} alt='logo' />
            </div>
            {/* <div className=''>
              <div className='text-base md:text-xl font-bold text-[#0077cc]  group-hover:text-blue-800 '>
                Officer Maker
              </div>
              <div className='text-[6px] md:text-sm font-medium text-gray-500 group-hover:text-gray-800  '>
                Prep Smart. Rank High.
              </div>
            </div> */}
          </Link>
        </div>

        <nav className='hidden md:flex items-center gap-6'>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium ${
                pathname === route.href
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-2'>
          <ThemeToggle />

          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>

          <SignedOut>
            <div className='hidden md:flex gap-2'>
              <Button variant='outline' size='sm' asChild>
                <Link href='/sign-in'>Login</Link>
              </Button>
              <Button size='sm' asChild>
                <Link href='/sign-up'>Sign Up</Link>
              </Button>
            </div>
          </SignedOut>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className='md:hidden'>
              <Button variant='ghost' size='icon'>
                <Menu className='h-5 w-5' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right' className='w-[300px] sm:w-[400px]'>
              <div className='flex flex-col gap-6 py-6'>
                <div className='flex items-center justify-between'>
                  <Link
                    href='/'
                    className='flex items-center gap-2'
                    onClick={() => setIsOpen(false)}
                  >
                    <FileText className='h-6 w-6' />
                    <span className='text-xl font-bold'>ExamPortal</span>
                  </Link>
                  <Button
                    variant='ghost'
                    size='icon'
                    onClick={() => setIsOpen(false)}
                  >
                    <X className='h-5 w-5' />
                    <span className='sr-only'>Close menu</span>
                  </Button>
                </div>

                <nav className='flex flex-col gap-4'>
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-sm font-medium ${
                        pathname === route.href
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>

                <SignedOut>
                  <div className='flex flex-col gap-2'>
                    <Button variant='outline' asChild>
                      <Link href='/sign-in' onClick={() => setIsOpen(false)}>
                        Login
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href='/sign-up' onClick={() => setIsOpen(false)}>
                        Sign Up
                      </Link>
                    </Button>
                  </div>
                </SignedOut>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Headerr

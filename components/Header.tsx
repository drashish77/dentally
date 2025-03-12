import { FileText } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
  //   const [isSubmitted, setIsSubmitted] = useState(false)
  //   const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds

  return (
    <div>
      {' '}
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between'>
          <Link href='/' className='flex items-center gap-2'>
            <FileText className='h-6 w-6' />
            <span className='text-xl font-bold'>ExamPortal</span>
          </Link>
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='/'
              className='text-sm font-medium text-muted-foreground hover:text-primary'
            >
              Home
            </Link>
            <Link href='/testexam' className='text-sm font-medium text-primary'>
              Test Exam
            </Link>
            <Link
              href='/result'
              className='text-sm font-medium text-muted-foreground hover:text-primary'
            >
              Results
            </Link>
            <Link
              href='/dashboard'
              className='text-sm font-medium text-muted-foreground hover:text-primary'
            >
              Dashboard
            </Link>
            <Link
              href='/contactus'
              className='text-sm font-medium text-muted-foreground hover:text-primary'
            >
              Contact Us
            </Link>
          </nav>
          <div className='flex items-center gap-2'>
            <ThemeToggle />
            {/* {!isSubmitted && (
              <div className='flex items-center gap-2 bg-muted px-3 py-1 rounded-md'>
                <Clock className='h-4 w-4 text-muted-foreground' />
                <span
                  className={`text-sm font-medium ${
                    timeLeft < 60 ? 'text-red-500' : ''
                  }`}
                >
                  {formatTime(timeLeft)}
                </span>
              </div>
            )} */}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header

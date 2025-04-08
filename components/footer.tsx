import Link from 'next/link'

const Footer=()=> {
  return (
    <footer className='w-full border-t py-6'>
      <div className='container flex flex-col items-center justify-between gap-4 md:flex-row'>
        <p className='text-center text-sm leading-loose text-muted-foreground md:text-left'>
          © 2024 ExamPortal. All rights reserved.
        </p>
        <div className='flex items-center gap-4'>
          <Link
            href='/terms'
            className='text-sm text-muted-foreground hover:underline'
          >
            Terms of Service
          </Link>
          <Link
            href='/privacy'
            className='text-sm text-muted-foreground hover:underline'
          >
            Privacy Policy
          </Link>
          <Link
            href='/contactus'
            className='text-sm text-muted-foreground hover:underline'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
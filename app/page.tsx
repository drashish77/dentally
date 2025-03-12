import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, FileText, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between '>
          <Link href='/' className='flex items-center gap-2'>
            <FileText className='h-6 w-6' />
            <span className='text-xl font-bold'>ExamPortal</span>
          </Link>
          <nav className='hidden md:flex items-center gap-6'>
            <Link href='/' className='text-sm font-medium text-primary'>
              Home
            </Link>
            <Link
              href='/testexam'
              className='text-sm font-medium text-muted-foreground hover:text-primary'
            >
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
            <Button asChild>
              <Link href='/dashboard'>Login</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/50'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Prepare for your exams with confidence
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Take practice tests, track your progress, and improve your
                    scores with our comprehensive exam portal.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button asChild size='lg'>
                    <Link href='/testexam'>Start Practice Test</Link>
                  </Button>
                  <Button variant='outline' size='lg' asChild>
                    <Link href='/dashboard'>View Dashboard</Link>
                  </Button>
                </div>
              </div>
              <Image
                src='/exam_hero.jpg?height=550&width=550'
                width={550}
                height={550}
                alt='Hero Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last'
              />
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                  What&apos;s New
                </div>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
                  Latest Updates
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Stay up to date with the latest features and improvements to
                  our exam portal.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3'>
              <Card>
                <CardHeader>
                  <CardTitle>New Test Series</CardTitle>
                  <CardDescription>Mathematics Advanced Series</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Our new advanced mathematics test series is now available
                    with 500+ practice questions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full'
                    asChild
                  >
                    <Link href='/testexam'>Try Now</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enhanced Analytics</CardTitle>
                  <CardDescription>Track your progress better</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    We&apos;ve improved our analytics dashboard to provide more
                    insights into your performance.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full'
                    asChild
                  >
                    <Link href='/dashboard'>View Dashboard</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Mobile App</CardTitle>
                  <CardDescription>Practice on the go</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Download our new mobile app to practice exams anytime,
                    anywhere, even offline.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant='outline' size='sm' className='w-full'>
                    Download App
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/50'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>
                  Dashboard Preview
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Get a glimpse of our comprehensive dashboard to track your
                  exam progress.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2'>
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Exams</CardTitle>
                  <CardDescription>Your scheduled tests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='flex items-center gap-4'>
                      <Calendar className='h-5 w-5 text-muted-foreground' />
                      <div>
                        <p className='font-medium'>Physics Test - Module 1</p>
                        <p className='text-sm text-muted-foreground'>
                          Tomorrow, 10:00 AM
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Calendar className='h-5 w-5 text-muted-foreground' />
                      <div>
                        <p className='font-medium'>Chemistry Final Exam</p>
                        <p className='text-sm text-muted-foreground'>
                          May 15, 2:00 PM
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center gap-4'>
                      <Calendar className='h-5 w-5 text-muted-foreground' />
                      <div>
                        <p className='font-medium'>Mathematics Practice Test</p>
                        <p className='text-sm text-muted-foreground'>
                          May 18, 9:00 AM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full'
                    asChild
                  >
                    <Link href='/dashboard'>
                      View All Exams
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Results</CardTitle>
                  <CardDescription>Your latest test scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <Star className='h-5 w-5 text-yellow-500' />
                        <div>
                          <p className='font-medium'>Biology Mock Test</p>
                          <p className='text-sm text-muted-foreground'>
                            Completed on May 2
                          </p>
                        </div>
                      </div>
                      <div className='text-right'>
                        <p className='font-medium'>85%</p>
                        <p className='text-sm text-muted-foreground'>
                          Rank: 12
                        </p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <Star className='h-5 w-5 text-yellow-500' />
                        <div>
                          <p className='font-medium'>English Literature</p>
                          <p className='text-sm text-muted-foreground'>
                            Completed on April 28
                          </p>
                        </div>
                      </div>
                      <div className='text-right'>
                        <p className='font-medium'>92%</p>
                        <p className='text-sm text-muted-foreground'>Rank: 5</p>
                      </div>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-4'>
                        <Star className='h-5 w-5 text-yellow-500' />
                        <div>
                          <p className='font-medium'>Computer Science</p>
                          <p className='text-sm text-muted-foreground'>
                            Completed on April 25
                          </p>
                        </div>
                      </div>
                      <div className='text-right'>
                        <p className='font-medium'>78%</p>
                        <p className='text-sm text-muted-foreground'>
                          Rank: 18
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant='outline'
                    size='sm'
                    className='w-full'
                    asChild
                  >
                    <Link href='/result'>
                      View All Results
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className='flex justify-center'>
              <Button size='lg' asChild>
                <Link href='/dashboard'>
                  Go to Full Dashboard
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
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
    </div>
  )
}

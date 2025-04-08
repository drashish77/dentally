import Link from 'next/link'
import { Book } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { subjects } from '@/data/subjects'

export default async function SubjectsPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  return (
    <div className='container py-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Dental Subjects</h1>
          <Button asChild>
            <Link href='/dashboard'>Back to Dashboard</Link>
          </Button>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {subjects.map((subject) => (
            <Card key={subject.id} className='overflow-hidden'>
              <CardHeader className='pb-2'>
                <CardTitle>{subject.name}</CardTitle>
                <CardDescription>{subject.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Book className='h-4 w-4' />
                  <span>Multiple chapters available</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full'>
                  <Link href={`/subjects/${subject.id}`}>View Chapters</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

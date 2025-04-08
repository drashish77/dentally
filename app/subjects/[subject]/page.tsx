import Link from 'next/link'
import { ArrowLeft, BookOpen } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { getSubjectById } from '@/data/subjects'
import { getChaptersBySubjectId } from '@/data/chapters'

interface SubjectPageProps {
  params: {
    subject: string
  }
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  const subject = getSubjectById(params.subject)

  if (!subject) {
    notFound()
  }

  const chapters = getChaptersBySubjectId(params.subject)

  return (
    <div className='container py-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <div>
            <div className='flex items-center gap-2 mb-2'>
              <Button variant='outline' size='sm' asChild>
                <Link href='/subjects'>
                  <ArrowLeft className='h-4 w-4 mr-1' />
                  All Subjects
                </Link>
              </Button>
            </div>
            <h1 className='text-3xl font-bold'>{subject.name}</h1>
            <p className='text-muted-foreground mt-1'>{subject.description}</p>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {chapters.map((chapter) => (
            <Card key={chapter.id}>
              <CardHeader className='pb-2'>
                <CardTitle>{chapter.name}</CardTitle>
                <CardDescription>{chapter.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <BookOpen className='h-4 w-4' />
                  <span>Comprehensive study material</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full'>
                  <Link href={`/subjects/${params.subject}/${chapter.id}`}>
                    Study Chapter
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

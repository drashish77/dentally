import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { notFound } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getSubjectById } from '@/data/subjects'
import {
  getChapter,
  getChaptersBySubjectId,
  getChapterContent
} from '@/data/chapters'

interface ChapterPageProps {
  params: {
    subject: string
    chapter: string
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  const subject = getSubjectById(params.subject)
  const chapter = getChapter(params.subject, params.chapter)

  if (!subject || !chapter) {
    notFound()
  }

  const chapterContent = getChapterContent(params.subject, params.chapter)
  const allChapters = getChaptersBySubjectId(params.subject)

  // Find current chapter index to determine next/previous chapters
  const currentIndex = allChapters.findIndex((c) => c.id === params.chapter)
  const prevChapter = currentIndex > 0 ? allChapters[currentIndex - 1] : null
  const nextChapter =
    currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null

  return (
    <div className='container py-8'>
      <div className='flex flex-col gap-8 max-w-4xl mx-auto'>
        <div className='flex items-center gap-2 mb-2'>
          <Button variant='outline' size='sm' asChild>
            <Link href={`/subjects/${params.subject}`}>
              <ArrowLeft className='h-4 w-4 mr-1' />
              Back to {subject.name}
            </Link>
          </Button>
        </div>

        <div>
          <h1 className='text-3xl font-bold mb-2'>{chapter.name}</h1>
          <p className='text-muted-foreground'>{chapter.description}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Chapter Overview</CardTitle>
          </CardHeader>
          <CardContent className='prose dark:prose-invert max-w-none'>
            {chapterContent ? (
              <>
                {chapterContent.sections.map((section, index) => (
                  <div key={index} className='mb-6'>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>

                    {section.subsections && section.subsections.length > 0 && (
                      <div className='ml-6 mt-4'>
                        {section.subsections.map((subsection, subIndex) => (
                          <div key={subIndex} className='mb-4'>
                            <h4 className='font-medium'>{subsection.title}</h4>
                            <p>{subsection.content}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <p>
                This chapter content is currently being developed. Please check
                back soon for the complete study material on {chapter.name}.
              </p>
            )}
          </CardContent>
        </Card>

        <div className='flex justify-between'>
          {prevChapter ? (
            <Button variant='outline' asChild>
              <Link href={`/subjects/${params.subject}/${prevChapter.id}`}>
                <ArrowLeft className='h-4 w-4 mr-1' />
                Previous: {prevChapter.name}
              </Link>
            </Button>
          ) : (
            <Button variant='outline' asChild>
              <Link href={`/subjects/${params.subject}`}>
                <ArrowLeft className='h-4 w-4 mr-1' />
                Back to All Chapters
              </Link>
            </Button>
          )}

          {nextChapter && (
            <Button asChild>
              <Link href={`/subjects/${params.subject}/${nextChapter.id}`}>
                Next: {nextChapter.name}
                <ArrowRight className='h-4 w-4 ml-1' />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { Clock, FileText, Filter, Search } from 'lucide-react'
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
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  testExams,
  getCategories,
  getTestExamsByCategory
} from '@/data/testExams'

export default async function TestExamsPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  const categories = getCategories()

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
      case 'Hard':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <div className='container py-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-3xl font-bold'>Test Exams</h1>
            <p className='text-muted-foreground mt-1'>
              Choose from our comprehensive collection of practice tests
            </p>
          </div>
          <Button asChild>
            <Link href='/dashboard'>Back to Dashboard</Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className='grid gap-6 md:grid-cols-4'>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle>Total Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>{testExams.length}</div>
              <p className='text-sm text-muted-foreground'>
                Available practice tests
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>{categories.length}</div>
              <p className='text-sm text-muted-foreground'>
                Different subject areas
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle>Easy Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>
                {testExams.filter((exam) => exam.difficulty === 'Easy').length}
              </div>
              <p className='text-sm text-muted-foreground'>Beginner friendly</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle>Advanced Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>
                {testExams.filter((exam) => exam.difficulty === 'Hard').length}
              </div>
              <p className='text-sm text-muted-foreground'>
                Challenge yourself
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className='flex items-center gap-4'>
          <div className='relative flex-1 max-w-md'>
            <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
            <Input
              type='search'
              placeholder='Search tests...'
              className='pl-8'
            />
          </div>
          <Button variant='outline' size='sm'>
            <Filter className='h-4 w-4 mr-2' />
            Filter
          </Button>
        </div>

        {/* Test Categories */}
        <Tabs defaultValue='all'>
          <TabsList className='grid w-full grid-cols-3'>
            <TabsTrigger value='all'>All Tests</TabsTrigger>
            <TabsTrigger value='dental'>Dental</TabsTrigger>
            <TabsTrigger value='general'>General</TabsTrigger>
          </TabsList>

          <TabsContent value='all' className='mt-6'>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {testExams.map((exam) => (
                <Card key={exam.id} className='overflow-hidden'>
                  <CardHeader className='pb-2'>
                    <div className='flex items-start justify-between'>
                      <div className='flex-1'>
                        <CardTitle className='text-lg'>{exam.title}</CardTitle>
                        <CardDescription className='mt-1'>
                          {exam.description}
                        </CardDescription>
                      </div>
                      <Badge className={getDifficultyColor(exam.difficulty)}>
                        {exam.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-2'>
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <FileText className='h-4 w-4' />
                        <span>{exam.subject}</span>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <Clock className='h-4 w-4' />
                        <span>
                          {exam.duration} minutes • {exam.totalQuestions}{' '}
                          questions
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full'>
                      <Link href={`/testexams/${exam.id}`}>Start Test</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='dental' className='mt-6'>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {getTestExamsByCategory('Dental').map((exam) => (
                <Card key={exam.id} className='overflow-hidden'>
                  <CardHeader className='pb-2'>
                    <div className='flex items-start justify-between'>
                      <div className='flex-1'>
                        <CardTitle className='text-lg'>{exam.title}</CardTitle>
                        <CardDescription className='mt-1'>
                          {exam.description}
                        </CardDescription>
                      </div>
                      <Badge className={getDifficultyColor(exam.difficulty)}>
                        {exam.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-2'>
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <FileText className='h-4 w-4' />
                        <span>{exam.subject}</span>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <Clock className='h-4 w-4' />
                        <span>
                          {exam.duration} minutes • {exam.totalQuestions}{' '}
                          questions
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full'>
                      <Link href={`/testexams/${exam.id}`}>Start Test</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value='general' className='mt-6'>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
              {getTestExamsByCategory('General').map((exam) => (
                <Card key={exam.id} className='overflow-hidden'>
                  <CardHeader className='pb-2'>
                    <div className='flex items-start justify-between'>
                      <div className='flex-1'>
                        <CardTitle className='text-lg'>{exam.title}</CardTitle>
                        <CardDescription className='mt-1'>
                          {exam.description}
                        </CardDescription>
                      </div>
                      <Badge className={getDifficultyColor(exam.difficulty)}>
                        {exam.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className='space-y-2'>
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <FileText className='h-4 w-4' />
                        <span>{exam.subject}</span>
                      </div>
                      <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                        <Clock className='h-4 w-4' />
                        <span>
                          {exam.duration} minutes • {exam.totalQuestions}{' '}
                          questions
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className='w-full'>
                      <Link href={`/testexams/${exam.id}`}>Start Test</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

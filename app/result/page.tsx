import Link from 'next/link'
import { Calendar, Search } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { ResultChart } from '@/components/result-chart'

export default function Result() {
  return (
    <div className='container py-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <h1 className='text-3xl font-bold'>Results</h1>
          <div className='flex items-center gap-2'>
            <Button variant='outline' size='sm' asChild>
              <Link href='/dashboard'>Back to Dashboard</Link>
            </Button>
            <Button size='sm' asChild>
              <Link href='/testexam'>Take New Test</Link>
            </Button>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle>Total Tests Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>12</div>
              <p className='text-sm text-muted-foreground'>
                Out of 24 available tests
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle>Average Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>82%</div>
              <p className='text-sm text-muted-foreground'>
                +5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='pb-2'>
              <CardTitle>Best Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>Physics</div>
              <p className='text-sm text-muted-foreground'>
                Average score: 94%
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
            <CardDescription>Your exam scores over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='h-[300px]'>
              <ResultChart />
            </div>
          </CardContent>
        </Card>

        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>Test Results</h2>
          <div className='flex items-center gap-2'>
            <div className='relative'>
              <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
              <Input
                type='search'
                placeholder='Search results...'
                className='pl-8 w-[200px] md:w-[300px]'
              />
            </div>
          </div>
        </div>

        <Tabs defaultValue='all'>
          <TabsList>
            <TabsTrigger value='all'>All Results</TabsTrigger>
            <TabsTrigger value='recent'>Recent</TabsTrigger>
            <TabsTrigger value='best'>Best Scores</TabsTrigger>
          </TabsList>

          <TabsContent value='all' className='mt-6'>
            <Card>
              <CardContent className='p-6'>
                <div className='space-y-6'>
                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-primary/10 p-3'>
                          <Calendar className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>Biology Mock Test</h3>
                          <p className='text-sm text-muted-foreground'>
                            Completed on May 2, 2024
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>85%</Badge>
                          <Badge variant='outline'>Rank: 12</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          34/40 correct answers
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexam'>Retake</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-primary/10 p-3'>
                          <Calendar className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>English Literature</h3>
                          <p className='text-sm text-muted-foreground'>
                            Completed on April 28, 2024
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>92%</Badge>
                          <Badge variant='outline'>Rank: 5</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          46/50 correct answers
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexam'>Retake</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-primary/10 p-3'>
                          <Calendar className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>Computer Science</h3>
                          <p className='text-sm text-muted-foreground'>
                            Completed on April 25, 2024
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>78%</Badge>
                          <Badge variant='outline'>Rank: 18</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          39/50 correct answers
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexam'>Retake</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className='flex justify-center'>
                <Button variant='outline'>Load More Results</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value='recent' className='mt-6'>
            <Card>
              <CardContent className='p-6'>
                <div className='space-y-6'>
                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-primary/10 p-3'>
                          <Calendar className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>Biology Mock Test</h3>
                          <p className='text-sm text-muted-foreground'>
                            Completed on May 2, 2024
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>85%</Badge>
                          <Badge variant='outline'>Rank: 12</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          34/40 correct answers
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexam'>Retake</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-primary/10 p-3'>
                          <Calendar className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>English Literature</h3>
                          <p className='text-sm text-muted-foreground'>
                            Completed on April 28, 2024
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>92%</Badge>
                          <Badge variant='outline'>Rank: 5</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          46/50 correct answers
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexam'>Retake</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='best' className='mt-6'>
            <Card>
              <CardContent className='p-6'>
                <div className='space-y-6'>
                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-primary/10 p-3'>
                          <Calendar className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>Physics - Mechanics</h3>
                          <p className='text-sm text-muted-foreground'>
                            Completed on April 20, 2024
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>94%</Badge>
                          <Badge variant='outline'>Rank: 3</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          47/50 correct answers
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexam'>Retake</Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-primary/10 p-3'>
                          <Calendar className='h-6 w-6 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>English Literature</h3>
                          <p className='text-sm text-muted-foreground'>
                            Completed on April 28, 2024
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>92%</Badge>
                          <Badge variant='outline'>Rank: 5</Badge>
                        </div>
                        <p className='text-sm text-muted-foreground'>
                          46/50 correct answers
                        </p>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm'>
                          View Details
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexam'>Retake</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

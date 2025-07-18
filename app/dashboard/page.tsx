import Link from 'next/link'
import { Calendar, Clock, BookOpen } from 'lucide-react'
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { ExamChart } from '@/components/exam-chart'
import { subjects } from '@/data/subjects'
import { testExams } from '@/data/testExams'

export default async function Dashboard() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  // Get the first 3 subjects to display on the dashboard
  const featuredSubjects = subjects.slice(0, 3)
  // Get the first 3 test exams to display on the dashboard
  const featuredTests = testExams.slice(0, 3)

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
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <div className='flex items-center gap-2'>
            <Button variant='outline' size='sm' asChild>
              <Link href='/testexams'>Browse Tests</Link>
            </Button>
            <Button size='sm' asChild>
              <Link href='/result'>View Results</Link>
            </Button>
          </div>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
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
              <CardTitle>Current Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold'>15</div>
              <p className='text-sm text-muted-foreground'>
                Top 10% of all students
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Performance</CardTitle>
            <CardDescription>
              Your exam scores and rankings over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='h-[300px]'>
              <ExamChart />
            </div>
          </CardContent>
        </Card>

        {/* Featured Test Exams Section */}
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>Featured Test Exams</h2>
          <Button asChild>
            <Link href='/testexams'>View All Tests</Link>
          </Button>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {featuredTests.map((exam) => (
            <Card key={exam.id}>
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
                    <BookOpen className='h-4 w-4' />
                    <span>{exam.subject}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Clock className='h-4 w-4' />
                    <span>
                      {exam.duration} minutes • {exam.totalQuestions} questions
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

        {/* Study Materials Section */}
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold'>Study Materials</h2>
          <Button asChild>
            <Link href='/subjects'>View All Subjects</Link>
          </Button>
        </div>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {featuredSubjects.map((subject) => (
            <Card key={subject.id}>
              <CardHeader className='pb-2'>
                <CardTitle>{subject.name}</CardTitle>
                <CardDescription>{subject.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <BookOpen className='h-4 w-4' />
                  <span>Multiple chapters available</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className='w-full'>
                  <Link href={`/subjects/${subject.id}`}>Study Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Tabs defaultValue='upcoming'>
          <div className='flex items-center justify-between'>
            <h2 className='text-2xl font-bold'>Exam Timetable</h2>
            <TabsList>
              <TabsTrigger value='upcoming'>Upcoming</TabsTrigger>
              <TabsTrigger value='past'>Past</TabsTrigger>
              <TabsTrigger value='all'>All</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value='upcoming' className='mt-6'>
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
                          <h3 className='font-semibold'>
                            Endodontics - Basic Principles
                          </h3>
                          <p className='text-sm text-muted-foreground'>
                            Comprehensive Assessment
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Clock className='h-4 w-4 text-muted-foreground' />
                          <span className='text-sm'>
                            May 12, 2024 - 10:00 AM
                          </span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Badge>30 minutes</Badge>
                          <Badge variant='outline'>15 questions</Badge>
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm' asChild>
                          <Link href='/testexams/endodontics-basics'>
                            Practice
                          </Link>
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexams/endodontics-basics'>
                            Start Exam
                          </Link>
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
                          <h3 className='font-semibold'>
                            Periodontics - Disease Classification
                          </h3>
                          <p className='text-sm text-muted-foreground'>
                            Mid-term Assessment
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Clock className='h-4 w-4 text-muted-foreground' />
                          <span className='text-sm'>
                            May 15, 2024 - 2:00 PM
                          </span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Badge>25 minutes</Badge>
                          <Badge variant='outline'>12 questions</Badge>
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm' asChild>
                          <Link href='/testexams/periodontics-classification'>
                            Practice
                          </Link>
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexams/periodontics-classification'>
                            Start Exam
                          </Link>
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
                          <h3 className='font-semibold'>
                            Oral Pathology - Common Lesions
                          </h3>
                          <p className='text-sm text-muted-foreground'>
                            Advanced Examination
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Clock className='h-4 w-4 text-muted-foreground' />
                          <span className='text-sm'>
                            May 18, 2024 - 9:00 AM
                          </span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Badge>35 minutes</Badge>
                          <Badge variant='outline'>18 questions</Badge>
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm' asChild>
                          <Link href='/testexams/oral-pathology-lesions'>
                            Practice
                          </Link>
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexams/oral-pathology-lesions'>
                            Start Exam
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='past' className='mt-6'>
            <Card>
              <CardContent className='p-6'>
                <div className='space-y-6'>
                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-muted p-3'>
                          <Calendar className='h-6 w-6 text-muted-foreground' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>
                            General Knowledge - Basic
                          </h3>
                          <p className='text-sm text-muted-foreground'>
                            Practice Test
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Clock className='h-4 w-4 text-muted-foreground' />
                          <span className='text-sm'>April 28, 2024</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>92%</Badge>
                          <Badge variant='outline'>Rank: 5</Badge>
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm' asChild>
                          <Link href='/result'>View Result</Link>
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexams/general-knowledge-basic'>
                            Retake
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className='rounded-lg border p-4'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                      <div className='flex items-start gap-4'>
                        <div className='rounded-full bg-muted p-3'>
                          <Calendar className='h-6 w-6 text-muted-foreground' />
                        </div>
                        <div>
                          <h3 className='font-semibold'>
                            Dental Anatomy - Basic Structures
                          </h3>
                          <p className='text-sm text-muted-foreground'>
                            Foundation Test
                          </p>
                        </div>
                      </div>
                      <div className='flex flex-col md:items-end gap-1'>
                        <div className='flex items-center gap-2'>
                          <Clock className='h-4 w-4 text-muted-foreground' />
                          <span className='text-sm'>April 25, 2024</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <Badge variant='secondary'>78%</Badge>
                          <Badge variant='outline'>Rank: 18</Badge>
                        </div>
                      </div>
                      <div className='flex gap-2'>
                        <Button variant='outline' size='sm' asChild>
                          <Link href='/result'>View Result</Link>
                        </Button>
                        <Button size='sm' asChild>
                          <Link href='/testexams/dental-anatomy-basics'>
                            Retake
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='all' className='mt-6'>
            <Card>
              <CardContent className='p-6'>
                <div className='space-y-6'>
                  <p className='text-center text-muted-foreground'>
                    Showing all exams ({testExams.length} total)
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// import Link from 'next/link'
// import { Calendar, Clock, BookOpen } from 'lucide-react'
// import { currentUser } from '@clerk/nextjs/server'
// import { redirect } from 'next/navigation'

// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card'
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
// import { Badge } from '@/components/ui/badge'
// import { ExamChart } from '@/components/exam-chart'
// import { subjects } from '@/data/subjects'

// export default async function Dashboard() {
//   const user = await currentUser()

//   if (!user) {
//     redirect('/sign-in')
//   }

//   // Get the first 3 subjects to display on the dashboard
//   const featuredSubjects = subjects.slice(0, 3)

//   return (
//     <div className='container py-8'>
//       <div className='flex flex-col gap-8'>
//         <div className='flex items-center justify-between'>
//           <h1 className='text-3xl font-bold'>Dashboard</h1>
//           <div className='flex items-center gap-2'>
//             <Button variant='outline' size='sm' asChild>
//               <Link href='/testexam'>Take New Test</Link>
//             </Button>
//             <Button size='sm' asChild>
//               <Link href='/result'>View Results</Link>
//             </Button>
//           </div>
//         </div>

//         <div className='grid gap-6 md:grid-cols-3'>
//           <Card>
//             <CardHeader className='pb-2'>
//               <CardTitle>Total Tests</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className='text-3xl font-bold'>24</div>
//               <p className='text-sm text-muted-foreground'>
//                 12 completed, 12 upcoming
//               </p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className='pb-2'>
//               <CardTitle>Average Score</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className='text-3xl font-bold'>82%</div>
//               <p className='text-sm text-muted-foreground'>
//                 +5% from last month
//               </p>
//             </CardContent>
//           </Card>
//           <Card>
//             <CardHeader className='pb-2'>
//               <CardTitle>Current Rank</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className='text-3xl font-bold'>15</div>
//               <p className='text-sm text-muted-foreground'>
//                 Top 10% of all students
//               </p>
//             </CardContent>
//           </Card>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle>Monthly Performance</CardTitle>
//             <CardDescription>
//               Your exam scores and rankings over time
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className='h-[300px]'>
//               <ExamChart />
//             </div>
//           </CardContent>
//         </Card>

//         {/* Study Materials Section */}
//         <div className='flex items-center justify-between'>
//           <h2 className='text-2xl font-bold'>Study Materials</h2>
//           <Button asChild>
//             <Link href='/subjects'>View All Subjects</Link>
//           </Button>
//         </div>

//         <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
//           {featuredSubjects.map((subject) => (
//             <Card key={subject.id}>
//               <CardHeader className='pb-2'>
//                 <CardTitle>{subject.name}</CardTitle>
//                 <CardDescription>{subject.description}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className='flex items-center gap-2 text-sm text-muted-foreground'>
//                   <BookOpen className='h-4 w-4' />
//                   <span>Multiple chapters available</span>
//                 </div>
//               </CardContent>
//               <CardFooter>
//                 <Button asChild className='w-full'>
//                   <Link href={`/subjects/${subject.id}`}>Study Now</Link>
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         <Tabs defaultValue='upcoming'>
//           <div className='flex items-center justify-between'>
//             <h2 className='text-2xl font-bold'>Exam Timetable</h2>
//             <TabsList>
//               <TabsTrigger value='upcoming'>Upcoming</TabsTrigger>
//               <TabsTrigger value='past'>Past</TabsTrigger>
//               <TabsTrigger value='all'>All</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value='upcoming' className='mt-6'>
//             <Card>
//               <CardContent className='p-6'>
//                 <div className='space-y-6'>
//                   <div className='rounded-lg border p-4'>
//                     <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                       <div className='flex items-start gap-4'>
//                         <div className='rounded-full bg-primary/10 p-3'>
//                           <Calendar className='h-6 w-6 text-primary' />
//                         </div>
//                         <div>
//                           <h3 className='font-semibold'>Physics - Mechanics</h3>
//                           <p className='text-sm text-muted-foreground'>
//                             Module 1 Final Exam
//                           </p>
//                         </div>
//                       </div>
//                       <div className='flex flex-col md:items-end gap-1'>
//                         <div className='flex items-center gap-2'>
//                           <Clock className='h-4 w-4 text-muted-foreground' />
//                           <span className='text-sm'>
//                             May 12, 2024 - 10:00 AM
//                           </span>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                           <Badge>2 hours</Badge>
//                           <Badge variant='outline'>50 questions</Badge>
//                         </div>
//                       </div>
//                       <div className='flex gap-2'>
//                         <Button variant='outline' size='sm' asChild>
//                           <Link href='/testexam'>Practice</Link>
//                         </Button>
//                         <Button size='sm'>Start Exam</Button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='rounded-lg border p-4'>
//                     <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                       <div className='flex items-start gap-4'>
//                         <div className='rounded-full bg-primary/10 p-3'>
//                           <Calendar className='h-6 w-6 text-primary' />
//                         </div>
//                         <div>
//                           <h3 className='font-semibold'>
//                             Chemistry - Organic Chemistry
//                           </h3>
//                           <p className='text-sm text-muted-foreground'>
//                             Mid-term Assessment
//                           </p>
//                         </div>
//                       </div>
//                       <div className='flex flex-col md:items-end gap-1'>
//                         <div className='flex items-center gap-2'>
//                           <Clock className='h-4 w-4 text-muted-foreground' />
//                           <span className='text-sm'>
//                             May 15, 2024 - 2:00 PM
//                           </span>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                           <Badge>1.5 hours</Badge>
//                           <Badge variant='outline'>40 questions</Badge>
//                         </div>
//                       </div>
//                       <div className='flex gap-2'>
//                         <Button variant='outline' size='sm' asChild>
//                           <Link href='/testexam'>Practice</Link>
//                         </Button>
//                         <Button size='sm'>Start Exam</Button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='rounded-lg border p-4'>
//                     <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                       <div className='flex items-start gap-4'>
//                         <div className='rounded-full bg-primary/10 p-3'>
//                           <Calendar className='h-6 w-6 text-primary' />
//                         </div>
//                         <div>
//                           <h3 className='font-semibold'>
//                             Dental Anatomy - Final
//                           </h3>
//                           <p className='text-sm text-muted-foreground'>
//                             Comprehensive Examination
//                           </p>
//                         </div>
//                       </div>
//                       <div className='flex flex-col md:items-end gap-1'>
//                         <div className='flex items-center gap-2'>
//                           <Clock className='h-4 w-4 text-muted-foreground' />
//                           <span className='text-sm'>
//                             May 18, 2024 - 9:00 AM
//                           </span>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                           <Badge>3 hours</Badge>
//                           <Badge variant='outline'>60 questions</Badge>
//                         </div>
//                       </div>
//                       <div className='flex gap-2'>
//                         <Button variant='outline' size='sm' asChild>
//                           <Link href='/testexam'>Practice</Link>
//                         </Button>
//                         <Button size='sm'>Start Exam</Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value='past' className='mt-6'>
//             <Card>
//               <CardContent className='p-6'>
//                 <div className='space-y-6'>
//                   <div className='rounded-lg border p-4'>
//                     <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                       <div className='flex items-start gap-4'>
//                         <div className='rounded-full bg-muted p-3'>
//                           <Calendar className='h-6 w-6 text-muted-foreground' />
//                         </div>
//                         <div>
//                           <h3 className='font-semibold'>Endodontics Quiz</h3>
//                           <p className='text-sm text-muted-foreground'>
//                             Basic Principles
//                           </p>
//                         </div>
//                       </div>
//                       <div className='flex flex-col md:items-end gap-1'>
//                         <div className='flex items-center gap-2'>
//                           <Clock className='h-4 w-4 text-muted-foreground' />
//                           <span className='text-sm'>April 28, 2024</span>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                           <Badge variant='secondary'>92%</Badge>
//                           <Badge variant='outline'>Rank: 5</Badge>
//                         </div>
//                       </div>
//                       <div className='flex gap-2'>
//                         <Button variant='outline' size='sm' asChild>
//                           <Link href='/result'>View Result</Link>
//                         </Button>
//                         <Button size='sm' asChild>
//                           <Link href='/testexam'>Retake</Link>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='rounded-lg border p-4'>
//                     <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                       <div className='flex items-start gap-4'>
//                         <div className='rounded-full bg-muted p-3'>
//                           <Calendar className='h-6 w-6 text-muted-foreground' />
//                         </div>
//                         <div>
//                           <h3 className='font-semibold'>
//                             Periodontics Assessment
//                           </h3>
//                           <p className='text-sm text-muted-foreground'>
//                             Gum Disease Classification
//                           </p>
//                         </div>
//                       </div>
//                       <div className='flex flex-col md:items-end gap-1'>
//                         <div className='flex items-center gap-2'>
//                           <Clock className='h-4 w-4 text-muted-foreground' />
//                           <span className='text-sm'>April 25, 2024</span>
//                         </div>
//                         <div className='flex items-center gap-2'>
//                           <Badge variant='secondary'>78%</Badge>
//                           <Badge variant='outline'>Rank: 18</Badge>
//                         </div>
//                       </div>
//                       <div className='flex gap-2'>
//                         <Button variant='outline' size='sm' asChild>
//                           <Link href='/result'>View Result</Link>
//                         </Button>
//                         <Button size='sm' asChild>
//                           <Link href='/testexam'>Retake</Link>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>

//           <TabsContent value='all' className='mt-6'>
//             <Card>
//               <CardContent className='p-6'>
//                 <div className='space-y-6'>
//                   {/* This would show all exams, both past and upcoming */}
//                   <p className='text-center text-muted-foreground'>
//                     Showing all exams (6 total)
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   )
// }

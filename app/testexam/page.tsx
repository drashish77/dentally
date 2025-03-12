'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  FileText,
  XCircle
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { ThemeToggle } from '@/components/theme-toggle'

// Sample questions for the test
const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: [
      { id: 'a', text: 'London' },
      { id: 'b', text: 'Berlin' },
      { id: 'c', text: 'Paris' },
      { id: 'd', text: 'Madrid' }
    ],
    correctAnswer: 'c'
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: [
      { id: 'a', text: 'Venus' },
      { id: 'b', text: 'Mars' },
      { id: 'c', text: 'Jupiter' },
      { id: 'd', text: 'Saturn' }
    ],
    correctAnswer: 'b'
  },
  {
    id: 3,
    question: 'What is the chemical symbol for gold?',
    options: [
      { id: 'a', text: 'Go' },
      { id: 'b', text: 'Gd' },
      { id: 'c', text: 'Au' },
      { id: 'd', text: 'Ag' }
    ],
    correctAnswer: 'c'
  },
  {
    id: 4,
    question: 'Which of the following is not a primary color?',
    options: [
      { id: 'a', text: 'Red' },
      { id: 'b', text: 'Blue' },
      { id: 'c', text: 'Green' },
      { id: 'd', text: 'Yellow' }
    ],
    correctAnswer: 'd'
  },
  {
    id: 5,
    question: 'What is the largest mammal on Earth?',
    options: [
      { id: 'a', text: 'African Elephant' },
      { id: 'b', text: 'Blue Whale' },
      { id: 'c', text: 'Giraffe' },
      { id: 'd', text: 'Polar Bear' }
    ],
    correctAnswer: 'b'
  }
]

export default function TestExam() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({})
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0 && !isSubmitted) {
      handleSubmit()
    }
  }, [timeLeft, isSubmitted])

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  // Handle answer selection
  const handleAnswerSelect = (questionId: number, answerId: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId
    })
  }

  // Navigate to next question
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  // Navigate to previous question
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  // Calculate progress percentage
  const progressPercentage =
    (Object.keys(selectedAnswers).length / questions.length) * 100

  // Submit the test
  const handleSubmit = () => {
    let correctAnswers = 0

    // Calculate score
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    setScore((correctAnswers / questions.length) * 100)
    setIsSubmitted(true)
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-16 items-center justify-between'>
          <div className='flex items-center gap-2'>
            <FileText className='h-6 w-6' />
            <span className='text-xl font-bold'>ExamPortal</span>
          </div>
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
            {!isSubmitted && (
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
            )}
          </div>
        </div>
      </header>
      <main className='flex-1 container py-8'>
        {!isSubmitted ? (
          <div className='flex flex-col gap-6 max-w-3xl mx-auto'>
            <div className='flex items-center justify-between'>
              <h1 className='text-2xl font-bold'>General Knowledge Test</h1>
              <div className='flex items-center gap-2'>
                <span className='text-sm text-muted-foreground'>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
              </div>
            </div>

            <Progress value={progressPercentage} className='h-2' />

            <Card className='w-full'>
              <CardHeader>
                <CardTitle className='text-xl'>
                  {questions[currentQuestion].question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedAnswers[questions[currentQuestion].id] || ''}
                  onValueChange={(value) =>
                    handleAnswerSelect(questions[currentQuestion].id, value)
                  }
                  className='space-y-3'
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div
                      key={option.id}
                      className={`flex items-center rounded-lg border p-4 transition-colors ${
                        selectedAnswers[questions[currentQuestion].id] ===
                        option.id
                          ? 'bg-primary/10 border-primary'
                          : ''
                      }`}
                    >
                      <RadioGroupItem
                        value={option.id}
                        id={`option-${option.id}`}
                        className='mr-3'
                      />
                      <Label
                        htmlFor={`option-${option.id}`}
                        className='flex-1 cursor-pointer'
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button
                  variant='outline'
                  onClick={handlePrevQuestion}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className='mr-2 h-4 w-4' /> Previous
                </Button>
                {currentQuestion < questions.length - 1 ? (
                  <Button onClick={handleNextQuestion}>
                    Next <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={
                      Object.keys(selectedAnswers).length < questions.length
                    }
                  >
                    Submit Test
                  </Button>
                )}
              </CardFooter>
            </Card>

            <div className='flex justify-center gap-2'>
              {questions.map((_, index) => (
                <Button
                  key={index}
                  variant={
                    currentQuestion === index
                      ? 'default'
                      : selectedAnswers[index + 1]
                      ? 'outline'
                      : 'ghost'
                  }
                  size='icon'
                  className='w-8 h-8'
                  onClick={() => setCurrentQuestion(index)}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        ) : (
          <div className='flex flex-col gap-6 max-w-3xl mx-auto'>
            <Card>
              <CardHeader>
                <CardTitle>Test Results</CardTitle>
                <CardDescription>
                  You scored {score.toFixed(0)}% (
                  {Math.round((score * questions.length) / 100)} out of{' '}
                  {questions.length} questions correct)
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-6'>
                {questions.map((question, index) => (
                  <div key={question.id} className='border rounded-lg p-4'>
                    <div className='flex items-start gap-2'>
                      <div className='mt-1'>
                        {selectedAnswers[question.id] ===
                        question.correctAnswer ? (
                          <CheckCircle className='h-5 w-5 text-green-500' />
                        ) : (
                          <XCircle className='h-5 w-5 text-red-500' />
                        )}
                      </div>
                      <div className='flex-1'>
                        <h3 className='font-medium'>
                          {index + 1}. {question.question}
                        </h3>
                        <div className='mt-2 space-y-2'>
                          {question.options.map((option) => (
                            <div
                              key={option.id}
                              className={`p-2 rounded-md ${
                                option.id === question.correctAnswer
                                  ? 'bg-green-100 dark:bg-green-900/20'
                                  : selectedAnswers[question.id] === option.id
                                  ? 'bg-red-100 dark:bg-red-900/20'
                                  : ''
                              }`}
                            >
                              {option.text}
                              {option.id === question.correctAnswer && (
                                <span className='ml-2 text-sm text-green-600 dark:text-green-400'>
                                  (Correct answer)
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button variant='outline' asChild>
                  <Link href='/dashboard'>
                    <ArrowLeft className='mr-2 h-4 w-4' /> Back to Dashboard
                  </Link>
                </Button>
                <Button asChild>
                  <Link href='/result'>
                    View All Results <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        )}
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

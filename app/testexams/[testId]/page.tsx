'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react'
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
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { getTestExamById } from '@/data/testExams'

interface TestExamPageProps {
  params: {
    testId: string
  }
}

export default function TestExamPage({ params }: TestExamPageProps) {
  const testExam = getTestExamById(params.testId)

  if (!testExam) {
    notFound()
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({})
  const [timeLeft, setTimeLeft] = useState(testExam.duration * 60) // Convert minutes to seconds
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
    if (currentQuestion < testExam.questions.length - 1) {
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
    (Object.keys(selectedAnswers).length / testExam.questions.length) * 100

  // Submit the test
  const handleSubmit = () => {
    let correctAnswers = 0

    // Calculate score
    testExam.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    setScore((correctAnswers / testExam.questions.length) * 100)
    setIsSubmitted(true)
  }

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
      {!isSubmitted ? (
        <div className='flex flex-col gap-6 max-w-4xl mx-auto'>
          <div className='flex items-center justify-between'>
            <div>
              <div className='flex items-center gap-2 mb-2'>
                <Button variant='outline' size='sm' asChild>
                  <Link href='/testexams'>
                    <ArrowLeft className='h-4 w-4 mr-1' />
                    All Tests
                  </Link>
                </Button>
              </div>
              <h1 className='text-2xl font-bold'>{testExam.title}</h1>
              <div className='flex items-center gap-2 mt-1'>
                <Badge className={getDifficultyColor(testExam.difficulty)}>
                  {testExam.difficulty}
                </Badge>
                <Badge variant='outline'>{testExam.subject}</Badge>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <span className='text-sm text-muted-foreground'>
                Question {currentQuestion + 1} of {testExam.questions.length}
              </span>
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
            </div>
          </div>

          <Progress value={progressPercentage} className='h-2' />

          <Card className='w-full'>
            <CardHeader>
              <CardTitle className='text-xl'>
                {testExam.questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={
                  selectedAnswers[testExam.questions[currentQuestion].id] || ''
                }
                onValueChange={(value) =>
                  handleAnswerSelect(
                    testExam.questions[currentQuestion].id,
                    value
                  )
                }
                className='space-y-3'
              >
                {testExam.questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center rounded-lg border p-4 transition-colors ${
                      selectedAnswers[
                        testExam.questions[currentQuestion].id
                      ] === option.id
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
              {currentQuestion < testExam.questions.length - 1 ? (
                <Button onClick={handleNextQuestion}>
                  Next <ArrowRight className='ml-2 h-4 w-4' />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={
                    Object.keys(selectedAnswers).length <
                    testExam.questions.length
                  }
                >
                  Submit Test
                </Button>
              )}
            </CardFooter>
          </Card>

          <div className='flex justify-center gap-2 flex-wrap'>
            {testExam.questions.map((_, index) => (
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
        <div className='flex flex-col gap-6 max-w-4xl mx-auto'>
          <Card>
            <CardHeader>
              <CardTitle>Test Results - {testExam.title}</CardTitle>
              <CardDescription>
                You scored {score.toFixed(0)}% (
                {Math.round((score * testExam.questions.length) / 100)} out of{' '}
                {testExam.questions.length} questions correct)
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              {testExam.questions.map((question, index) => (
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
                      <div className='mt-2 space-y-2 border border-red-500'>
                        {question.options.map((option) => (
                          <div
                            key={option.id}
                            className={`p-2 rounded-md  ${
                              option.id === question.correctAnswer
                                ? 'bg-green-100 dark:bg-green-900 text-green-500'
                                : selectedAnswers[question.id] === option.id
                                ? 'bg-red-100 dark:bg-red-900 text-red-500'
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
                      {question.explanation && (
                        <div className='mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md'>
                          <p className='text-sm text-blue-800 dark:text-blue-200'>
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className='flex justify-between'>
              <Button variant='outline' asChild>
                <Link href='/testexams'>
                  <ArrowLeft className='mr-2 h-4 w-4' /> Back to Tests
                </Link>
              </Button>
              <div className='flex gap-2'>
                <Button variant='outline' asChild>
                  <Link href='/dashboard'>Dashboard</Link>
                </Button>
                <Button asChild>
                  <Link href='/result'>
                    View All Results <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

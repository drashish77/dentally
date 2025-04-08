import { Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function ContactUs() {
  return (
    <div className='container py-8'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col items-center text-center space-y-4 pb-8'>
          <h1 className='text-3xl font-bold'>Contact Us</h1>
          <p className='text-muted-foreground max-w-[700px]'>
            Have questions about our exam portal? We&apos;re here to help. Fill
            out the form below or use one of our contact methods.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Phone className='h-5 w-5' />
                <span>Phone</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>+1 (555) 123-4567</p>
              <p className='text-sm text-muted-foreground mt-1'>
                Monday to Friday, 9am to 5pm
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <Mail className='h-5 w-5' />
                <span>Email</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>support@examportal.com</p>
              <p className='text-sm text-muted-foreground mt-1'>
                We&apos;ll respond within 24 hours
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                <MapPin className='h-5 w-5' />
                <span>Office</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>123 Education Street</p>
              <p>Suite 456, Learning City</p>
              <p className='text-sm text-muted-foreground mt-1'>
                Visit us by appointment
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className='mt-8'>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className='grid gap-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-2'>
                  <Label htmlFor='name'>Name</Label>
                  <Input id='name' placeholder='Your name' />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Your email address'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='subject'>Subject</Label>
                <Input id='subject' placeholder='What is this regarding?' />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  placeholder='Your message'
                  className='min-h-[150px]'
                />
              </div>
              <Button type='submit' className='w-full md:w-auto'>
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className='mt-8'>
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div>
                <h3 className='font-semibold'>How do I reset my password?</h3>
                <p className='text-muted-foreground mt-1'>
                  You can reset your password by clicking on the &quot;Forgot
                  Password&quot; link on the login page. You&apos;ll receive an
                  email with instructions.
                </p>
              </div>
              <div>
                <h3 className='font-semibold'>
                  Can I access the exams on mobile devices?
                </h3>
                <p className='text-muted-foreground mt-1'>
                  Yes, our platform is fully responsive and works on all devices
                  including smartphones and tablets.
                </p>
              </div>
              <div>
                <h3 className='font-semibold'>
                  How are the rankings calculated?
                </h3>
                <p className='text-muted-foreground mt-1'>
                  Rankings are calculated based on your score, the time taken to
                  complete the exam, and the difficulty level of the questions.
                </p>
              </div>
              <div>
                <h3 className='font-semibold'>Can I retake an exam?</h3>
                <p className='text-muted-foreground mt-1'>
                  Yes, you can retake any practice exam. For official exams,
                  retake policies may vary based on your institution&apos;s
                  guidelines.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

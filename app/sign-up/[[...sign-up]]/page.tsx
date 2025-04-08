import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className='flex items-center justify-center py-12'>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-primary hover:bg-primary/90 text-primary-foreground',
            footerActionLink: 'text-primary hover:text-primary/90'
          }
        }}
        routing='path'
        path='/sign-up'
        signInUrl='/sign-in'
        redirectUrl='/dashboard'
      />
    </div>
  )
}

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='flex items-center justify-center py-12'>
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-primary hover:bg-primary/90 text-primary-foreground',
            footerActionLink: 'text-primary hover:text-primary/90'
          }
        }}
        routing='path'
        path='/sign-in'
        signUpUrl='/sign-up'
        redirectUrl='/dashboard'
      />
    </div>
  )
}

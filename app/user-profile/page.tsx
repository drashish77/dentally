import { UserProfile } from '@clerk/nextjs'

export default function UserProfilePage() {
  return (
    <div className='container py-12'>
      <h1 className='text-3xl font-bold mb-8'>Your Profile</h1>
      <UserProfile
        appearance={{
          elements: {
            formButtonPrimary:
              'bg-primary hover:bg-primary/90 text-primary-foreground',
            footerActionLink: 'text-primary hover:text-primary/90'
          }
        }}
        path='/user-profile'
      />
    </div>
  )
}

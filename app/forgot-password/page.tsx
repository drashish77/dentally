// import { ForgotPassword } from '@clerk/nextjs'

// export default function ForgotPasswordPage() {
//   return (
//     <div className='flex items-center justify-center py-12'>
//       <ForgotPassword
//         appearance={{
//           elements: {
//             formButtonPrimary:
//               'bg-primary hover:bg-primary/90 text-primary-foreground',
//             footerActionLink: 'text-primary hover:text-primary/90'
//           }
//         }}
//         routing='path'
//         path='/forgot-password'
//         signInUrl='/sign-in'
//       />
//     </div>
//   )
// }

'use client'
import React, { useState, useEffect } from 'react'
import { useAuth, useSignIn } from '@clerk/nextjs'
import type { NextPage } from 'next'
import { useRouter } from 'next/navigation'

const ForgotPasswordPage: NextPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [successfulCreation, setSuccessfulCreation] = useState(false)
  const [secondFactor, setSecondFactor] = useState(false)
  const [error, setError] = useState('')

  const router = useRouter()
  const { isSignedIn } = useAuth()
  const { isLoaded, signIn, setActive } = useSignIn()

  useEffect(() => {
    if (isSignedIn) {
      router.push('/')
    }
  }, [isSignedIn, router])

  if (!isLoaded) {
    return null
  }

  // Send the password reset code to the user's email
  async function create(e: React.FormEvent) {
    e.preventDefault()
    await signIn
      ?.create({
        strategy: 'reset_password_phone_code',
        identifier: phoneNumber
      })
      .then(() => {
        setSuccessfulCreation(true)
        setError('')
      })
      .catch((err) => {
        console.error('error', err.errors[0].longMessage)
        setError(err.errors[0].longMessage)
      })
  }

  // Reset the user's password.
  // Upon successful reset, the user will be
  // signed in and redirected to the home page
  async function reset(e: React.FormEvent) {
    e.preventDefault()
    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_phone_code',
        code,
        password
      })
      .then((result) => {
        // Check if 2FA is required
        if (result.status === 'needs_second_factor') {
          setSecondFactor(true)
          setError('')
        } else if (result.status === 'complete') {
          // Set the active session to
          // the newly created session (user is now signed in)
          setActive({ session: result.createdSessionId })
          setError('')
        } else {
          console.log(result)
        }
      })
      .catch((err) => {
        console.error('error', err.errors[0].longMessage)
        setError(err.errors[0].longMessage)
      })
  }

  return (
    <div>
      <h1>Forgot Password?</h1>
      <form onSubmit={!successfulCreation ? create : reset}>
        {!successfulCreation && (
          <>
            <label htmlFor='phoneNumber'>Provide your phone number</label>
            <input
              type='tel'
              placeholder='e.g +1234567890'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <button>Send password reset code</button>
            {error && <p>{error}</p>}
          </>
        )}

        {successfulCreation && (
          <>
            <label htmlFor='password'>Enter your new password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor='code'>
              Enter the password reset code that was sent to your phone number
            </label>
            <input
              type='text'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />

            <button>Reset</button>
            {error && <p>{error}</p>}
          </>
        )}

        {secondFactor && (
          <p>2FA is required, but this UI does not handle that</p>
        )}
      </form>
    </div>
  )
}

export default ForgotPasswordPage

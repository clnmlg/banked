'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import CustomInput from './CustomInput'
import { authFormSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'
import PlaidLink from './PlaidLink'

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const formSchema = authFormSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const router = useRouter()

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      if (type === 'sign-up') {
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          email: data.email,
          password: data.password,
        }
        const newUser = await signUp(userData)
        setUser(newUser)
      }
      if (type === 'sign-in') {
        const response = await signIn({
          email: data.email,
          password: data.password,
        })
        if (response) router.push('/')
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1 mb-3">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Banked logo"
          />
          <h1 className="text-26 font-imb-plex-serif font-bold text-black-1">
            Banked.
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:36 font-semibold text-gray-900">
            {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign up'}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? 'Link your account to get started'
                : 'please enter your details'}
            </p>
          </h1>
        </div>
      </header>
      {/* {user ? ( */}
      <div className="flex flex-col gap-4">
        <PlaidLink user={user} variant="primary" />
      </div>
      {/* ) : ( */}
      <>
        {' '}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {type === 'sign-up' && (
              <>
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="firstName"
                    label="Firstname"
                    placeholder="Enter your firstname"
                  />
                  <CustomInput
                    control={form.control}
                    name="lastName"
                    label="Lastname"
                    placeholder="Enter your lastname"
                  />
                </div>

                <CustomInput
                  control={form.control}
                  name="address1"
                  label="Address"
                  placeholder="Enter your specific address"
                />
                <CustomInput
                  control={form.control}
                  name="city"
                  label="City"
                  placeholder="Enter your city"
                />
                <div className="flex gap-4">
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="Enter your state"
                  />
                  <CustomInput
                    control={form.control}
                    name="postalCode"
                    label="Postal Code"
                    placeholder="Enter your postal code"
                  />
                </div>

                <CustomInput
                  control={form.control}
                  name="dateOfBirth"
                  label="Date of birth"
                  placeholder="YYYY-MM-DD"
                />
              </>
            )}
            <CustomInput
              control={form.control}
              name="email"
              label="Email"
              placeholder="Enter your email"
            />
            <CustomInput
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
            />
            <div className="flex flex-col gap-4">
              <Button type="submit" className="form-btn" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> &nbsp;
                    Loading ...
                  </>
                ) : type === 'sign-in' ? (
                  'Sign in'
                ) : (
                  'Sign up'
                )}
              </Button>
            </div>
          </form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === 'sign-in'
                ? "Don't have an account?"
                : 'Already have an account ?'}
            </p>
            <Link
              className="form-link"
              href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
            >
              {type === 'sign-in' ? 'Sign-up' : 'Sign-in'}
            </Link>
          </footer>
        </Form>
      </>
      {/*   )} */}
    </section>
  )
}

export default AuthForm

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-muted">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
              <CardDescription>Enter your email and password to create your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input id="email" type="email" name='email' placeholder="example@email.com" required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password">Password</label>
                  {/* <Link href="/forgot_password" className="text-sm font-medium text-primary hover:underline" prefetch={false}>
                    Forgot Password?
                  </Link> */}
                </div>
                <Input id="password" type="password" name='password' required />
              </div>
              <div>
                <label>Confirm Password</label>
                <Input  type='password' name='confirmpassword' required/>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <div className="text-center text-sm text-muted-foreground">
                already have an account?{" "}
                <Link href="/login" className="font-medium text-primary hover:underline" prefetch={false}>
                  Login
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      )
}

export default Page

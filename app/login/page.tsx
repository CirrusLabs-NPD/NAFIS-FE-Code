"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowRight, AtSign, Eye, EyeOff, Facebook, ChromeIcon as Google, LockKeyhole, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-primary/20 to-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <span className="text-xl font-bold text-primary-foreground">CP</span>
            </div>
          </div>
          <CardTitle className="text-2xl">Welcome to CareerPath</CardTitle>
          <CardDescription>Your AI-powered career development platform</CardDescription>
        </CardHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="name@example.com" required className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Eye className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                  {!isLoading && <ArrowRight className="h-4 w-4" />}
                </Button>

                <div className="my-4 flex items-center">
                  <div className="flex-1 border-t"></div>
                  <div className="mx-4 text-sm text-muted-foreground">or continue with</div>
                  <div className="flex-1 border-t"></div>
                </div>

                <div className="flex gap-3 w-full">
                  <Button variant="outline" className="flex-1 gap-2" type="button">
                    <Google className="h-4 w-4" />
                    <span>Google</span>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" type="button">
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </Button>
                </div>
              </CardFooter>
            </form>
          </TabsContent>

          {/* Register Tab */}
          <TabsContent value="register">
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      <Input id="first-name" placeholder="John" required className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input id="register-email" type="email" placeholder="name@example.com" required className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="register-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="pl-10 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-1 top-1"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-muted-foreground" />
                      ) : (
                        <Eye className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <div className="relative">
                    <LockKeyhole className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="confirm-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col">
                <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Create Account"}
                  {!isLoading && <ArrowRight className="h-4 w-4" />}
                </Button>

                <div className="my-4 flex items-center">
                  <div className="flex-1 border-t"></div>
                  <div className="mx-4 text-sm text-muted-foreground">or continue with</div>
                  <div className="flex-1 border-t"></div>
                </div>

                <div className="flex gap-3 w-full">
                  <Button variant="outline" className="flex-1 gap-2" type="button">
                    <Google className="h-4 w-4" />
                    <span>Google</span>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" type="button">
                    <Facebook className="h-4 w-4" />
                    <span>Facebook</span>
                  </Button>
                </div>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}

"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Track Your Calories, Transform Your Life
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Personalized nutrition tracking based on your unique
                    profile. Search foods, calculate BMI, and reach your health
                    goals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1.5" asChild>
                    <Link href="/dashboard">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                      Sign in to FitStack
                    </CardTitle>
                    <CardDescription>
                      Track your calories and reach your fitness goals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center">
                    <Button
                      onClick={() =>
                        signIn("google", { callbackUrl: "/dashboard" })
                      }
                      variant="outline"
                      className="w-full flex items-center gap-2"
                    >
                      <Image
                        src="https://www.google.com/favicon.ico"
                        alt="Google logo"
                        width={20}
                        height={20}
                      />
                      Sign in with Google
                    </Button>
                  </CardContent>
                  <CardFooter className="flex flex-col text-center text-sm text-muted-foreground">
                    <p>
                      By signing in, you agree to our Terms of Service and
                      Privacy Policy.
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

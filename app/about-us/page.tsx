"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <Card className="max-w-3xl w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">About Us</CardTitle>
        </CardHeader>
        <CardContent className="text-lg space-y-4">
          <p>
            Welcome to <span className="font-semibold text-blue-600">FitStack</span>, 
            your ultimate companion in achieving your fitness goals. Our mission is to
            empower individuals with precise calorie tracking and insightful health analytics.
          </p>
          <p>
            Whether you&apos;re aiming to lose weight, gain muscle, or simply maintain a 
            healthy lifestyle, our tools provide accurate calculations and valuable insights.
          </p>
          <p>
            FitStack leverages cutting-edge technology to make nutrition tracking effortless.
            From calorie intake recommendations to BMI calculations, we offer science-backed 
            solutions to help you make informed health choices.
          </p>
          <p className="font-semibold">
            Join us today and take control of your health!
          </p>
          <div className="flex justify-center">
            <Link href="/dashboard" className="text-blue-600 hover:underline">
              Go to Dashboard →
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

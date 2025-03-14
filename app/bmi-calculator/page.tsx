"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(Number(bmiValue.toFixed(1)));
  };
  return (
    <Card className="min-h-screen mx-4 my-20">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">BMI Calculator</CardTitle>
        <CardDescription className="text-md">
          Calculate your Body Mass Index (BMI) to assess your weight relative to
          your height.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Weight (kg): </Label>
            <Input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="Weight (kg)"
              className="w-full px-3"
            />
          </div>
          <div className="space-y-2">
            <Label>Height (cm): </Label>
            <Input
              type="number"
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="Height (cm)"
              className="w-full px-3"
            />
          </div>
          <Button
            onClick={calculateBMI}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          >
            Calculate
          </Button>
          {bmi && (
            <CardHeader className="text-center">
              <CardDescription className="text-2xl font-bold">
                Your BMI is{" "}
                <span className="text-blue-600 dark:text-blue-400">{bmi}</span>
              </CardDescription>
            </CardHeader>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

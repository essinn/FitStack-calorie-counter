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
  const [healthStatus, setHealthStatus] = useState<string>("");
  const [advice, setAdvice] = useState("");

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100;
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBMI(Number(bmiValue.toFixed(1)));

    let status = "";
    let healthAdvice = "";

    if (bmiValue < 18.5) {
      status = "Underweight";
      healthAdvice = "Consider increasing your calorie intake with a balanced diet.";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      status = "Normal weight";
      healthAdvice = "Maintain your healthy lifestyle with regular exercise and a balanced diet.";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      status = "Overweight";
      healthAdvice = "Incorporate regular physical activity and monitor your calorie intake.";
    } else {
      status = "Obese";
      healthAdvice = "Consult a healthcare professional for a personalized weight management plan.";
    }
    setHealthStatus(status);
    setAdvice(healthAdvice);
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

              onChange={(e) => {
                const value = e.target.value;
                setWeight(value);
                setBMI(null);
                setHealthStatus("");
                setAdvice("");
              }}
              placeholder="Weight (kg)"
              className="w-full px-3"
            />
          </div>
          <div className="space-y-2">
            <Label>Height (cm): </Label>
            <Input
              type="number"
              value={height}

              onChange={(e) => {
                const value = e.target.value;
                setHeight(value);
                setBMI(null);
                setHealthStatus("");
                setAdvice("");
              }}
              placeholder="Height (cm)"
              className="w-full px-3"
            />
          </div>
          <Button
          onClick={calculateBMI}
          variant="default" // ✅ tells the Button to use your theme’s green
          className="w-full px-6 py-3 font-semibold"
          >
          Calculate
          </Button>

          {bmi && (
            <CardHeader className="text-center">
              <CardDescription className="text-2xl font-bold">
                Your BMI is{" "}
                <span className="text-primary">{bmi}</span>
              </CardDescription>
              <CardDescription className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                Health Status:{" "}
                <span className="text-primary">
                  {healthStatus}
                </span>
              </CardDescription>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-4 border-l-4 border-blue-600">
                <p className="text-gray-700 dark:text-gray-300 font-medium">{advice}</p>
              </div>
            </CardHeader>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

export default function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [calories, setCalories] = useState(null);

  const activityLevels = {
    sedentary: 1.2,
    "lightly active": 1.375,
    "moderately active": 1.55,
    "very active": 1.725,
    "extra active": 1.9,
  };

  const calculateCalories = () => {
    if (!weight || !height || !age) {
      alert("Please enter valid numbers for weight, height, and age.");
      return;
    }

    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);

    let bmr;
    if (gender === "male") {
      bmr = 10 * w + 6.25 * h - 5 * a + 5;
    } else {
      bmr = 10 * w + 6.25 * h - 5 * a - 161;
    }

    const activityMultiplier =
      activityLevels[activityLevel as keyof typeof activityLevels];
    const result = bmr * activityMultiplier;

    setCalories(Math.round(result) as unknown as null);
  };
  return (
    <Card className="min-h-screen mx-4 my-20">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Calorie Intake Calculator
        </CardTitle>
        <CardDescription className="text-md">
          Calculate your Calorie Intake based on your gender, age, weight,
          height, and activity level.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-5">
          <div className="space-y-2">
            <Label>Gender: </Label>
            <Select value={gender} onValueChange={value => setGender(value)}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Age: </Label>
            <Input
              type="number"
              value={age}
              onChange={(e) => {
                const newAge = parseInt(e.target.value, 10);
                if (newAge > 0 || e.target.value === "") {
                  setAge(e.target.value);
                }
              }}
              placeholder="Age"
              className="w-full px-3 text-gray-700 dark:text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label>Weight (kg): </Label>
            <Input
              type="number"
              value={weight}
              onChange={(e) => {
                const newWeight = parseFloat(e.target.value);
                if (newWeight > 0 || e.target.value === "") {
                  setWeight(e.target.value);
                }
              }}
              placeholder="Weight (kg)"
              className="w-full px-3 text-gray-700 dark:text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label>Height (cm): </Label>
            <Input
              type="number"
              value={height}
              onChange={(e) => {
                const newHeight = parseFloat(e.target.value);
                if (newHeight > 0 || e.target.value === "") {
                  setHeight(e.target.value);
                }
              }}
              placeholder="Height (cm)"
              className="w-full px-3 text-gray-700 dark:text-gray-200"
            />
          </div>
          <div className="space-y-2">
            <Label>Activity Level: </Label>
            <Select
              value={activityLevel}
              onValueChange={value => setActivityLevel(value)}
            >
              <SelectTrigger id="activity-level">
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(activityLevels).map(level => (
                  <SelectItem key={level} value={level}>
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            onClick={calculateCalories}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-200"
          >
            Calculate
          </Button>
          {calories && (
            <CardHeader className="text-center">
              <CardDescription className="text-2xl font-bold">
                Your Calorie Intake is{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {calories}
                </span>
              </CardDescription>
            </CardHeader>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

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
            <Select value={gender} onValueChange={(value) => {
              setGender(value);
              setCalories(null);
            }}
            >
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
                const value = e.target.value;
                const parsed = parseInt(value, 10);
                if (parsed > 0 || value === "") {
                  setAge(value);
                  setCalories(null);
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
                const value = e.target.value;
                const parsed = parseFloat(value);
                if (parsed > 0 || value === "") {
                  setWeight(value);
                  setCalories(null);
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
                const value = e.target.value;
                if (/^[1-9]\d*$|^$/.test(value)) {
                  setHeight(value);
                  setCalories(null);
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
              onValueChange={(value) => {
                setActivityLevel(value);
                setCalories(null);
              }}
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
          variant="default"
          className="w-full px-6 py-3 font-semibold"
          >
          Calculate
          </Button>
          {calories && (
            <CardHeader className="text-center">
              <CardDescription className="text-2xl font-bold">
                Your Calorie Intake is <span className="text-primary">{calories}</span> kcal  
              </CardDescription> 
            </CardHeader>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

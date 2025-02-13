"use client";
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
    <div className="min-h-screen">
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Calorie Intake Calculator</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate your Calorie Intake based on your gender, age, weight,
            height, and activity level.
          </p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-xl mx-auto">
          <div className="space-y-6">
            <label className="block mb-2 font-medium">Gender: </label>
            <select value={gender} onChange={e => setGender(e.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label className="block mb-2 font-medium">Age: </label>
            <input
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
              placeholder="Age"
              className="w-full px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
            />
            <label className="block mb-2 font-medium">Weight (kg): </label>
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="Weight (kg)"
              className="w-full px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
            />
            <label className="block mb-2 font-medium">Height (cm): </label>
            <input
              type="number"
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="Height (cm)"
              className="w-full px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
            />
            <label className="block mb-2 font-medium">Activity Level: </label>
            <select
              value={activityLevel}
              onChange={e => setActivityLevel(e.target.value)}
            >
              {Object.keys(activityLevels).map(level => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <button
              onClick={calculateCalories}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Calculate
            </button>
            {calories && (
              <div className="mt-6 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                  Your Calorie Intake is{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {calories}
                  </span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

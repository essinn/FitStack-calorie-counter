"use client";
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
    <div className="min-h-screen">
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate your Body Mass Index (BMI) to assess your weight relative
            to your height.
          </p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl shadow-xl p-8 max-w-xl mx-auto">
          <div className="space-y-6">
            <input
              type="number"
              value={weight}
              onChange={e => setWeight(e.target.value)}
              placeholder="Weight (kg)"
              className="w-full px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
            />
            <input
              type="number"
              value={height}
              onChange={e => setHeight(e.target.value)}
              placeholder="Height (cm)"
              className="w-full px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
            />
            <button
              onClick={calculateBMI}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Calculate
            </button>
            {bmi && (
              <div className="mt-6 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                <p className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
                  Your BMI is{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    {bmi}
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

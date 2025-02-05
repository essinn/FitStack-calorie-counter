"use client";

import { useState } from "react";
import { FoodSearch } from "@/components/food-search";

type LogEntry = {
  id: string;
  name: string;
  calories: number;
  timestamp: Date;
};

export default function CalorieLog() {
  const [entries, setEntries] = useState<LogEntry[]>([]);

  const addEntry = (food: {
    code: string;
    product_name: string;
    nutriments: { energy_kcal_100g: number };
  }) => {
    setEntries([
      ...entries,
      {
        id: food.code,
        name: food.product_name,
        calories: food.nutriments.energy_kcal_100g || 0,
        timestamp: new Date(),
      },
    ]);
  };

  const totalCalories = entries.reduce((sum, entry) => sum + entry.calories, 0);

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Calorie Tracker</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Search and log your daily food intake to track your calorie
            consumption.
          </p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Add Food</h2>
          <FoodSearch />
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Today's Log</h2>
            <div className="bg-blue-100 dark:bg-blue-900 px-6 py-3 rounded-lg">
              <span className="text-lg font-semibold text-blue-800 dark:text-blue-200">
                Total Calories: {totalCalories}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {entries.map(entry => (
              <div
                key={entry.id}
                className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md flex justify-between items-center"
              >
                <span className="text-gray-800 dark:text-gray-200 font-medium">
                  {entry.name}
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {entry.calories} kcal
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div>
      <h1>Calorie Tracker</h1>
      <FoodSearch />
      <h2>Total Calories: {totalCalories}</h2>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            {entry.name} - {entry.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
}

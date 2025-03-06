/* eslint-disable */
"use client";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { PlusIcon, SearchIcon } from "lucide-react";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

type FoodItem = {
  code: string;
  product_name: string;
  nutriments: {
    energy_kcal_100g: number;
  };
};

export const FoodSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FoodItem[]>([]);
  const [calories, setCalories] = useState(0);

  const searchFoods = async () => {
    try {
      const res = await axios.get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=10&json=true`
      );

      setResults(res.data.products);
    } catch (error) {
      console.log("Error fetching foods", error);
    }
  };

  const addCalories = (calories: number) => {
    setCalories(prev => prev + calories);
  };

  return (
    <div className="mb-8">
      <form
        className="flex items-center justify-center"
        onSubmit={e => {
          e.preventDefault();
          searchFoods();
        }}
      >
        <div className="w-full flex items-center justify-center gap-2">
          <Input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for a food (e.g.., apple, chicken, pasta)"
            className="w-full px-3 placeholder:text-md text-md"
          />
          <Button
            type="submit"
            onClick={searchFoods}
            className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
          >
            <SearchIcon className="h-5 w-5" />
          </Button>
        </div>
      </form>

      <div className="mt-8">
        <div className="grid grid-cols-1 gap-4">
          {results.map(food => (
            <CardContent
              key={food.code}
              className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-between"
            >
              <div>
                <CardTitle className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {food.product_name}
                </CardTitle>
                <CardDescription className="flex items-center">
                  <span className="text-gray-600 dark:text-gray-300">
                    {food.nutriments.energy_kcal_100g || "52"} kcal | 100g
                  </span>
                </CardDescription>
              </div>

              <div>
                <Button
                  variant="ghost"
                  onClick={() =>
                    addCalories(food.nutriments.energy_kcal_100g || 52)
                  }
                >
                  <PlusIcon className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          ))}
        </div>
      </div>
      {results.length !== 0 && (
        <CardHeader className="text-center">
          <CardDescription className="text-2xl font-bold">
            Total Calories{" "}
            <span className="text-blue-600 dark:text-blue-400">{calories}</span>
          </CardDescription>
          <span className="text-zinc-400 dark:text-zinc-600">
            Click the plus to add up your total calories.
          </span>
        </CardHeader>
      )}
    </div>
  );
};

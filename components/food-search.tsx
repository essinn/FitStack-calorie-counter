"use client";
import axios from "axios";
import React, { useState } from "react";
import { Button } from "./ui/button";

type FoodItem = {
  code: string;
  product_name: string;
  nutriments: {
    energy_kcal_100g: number;
  };
};

type FoodSearchProps = {
  onSelectFood: (food: {
    code: string;
    product_name: string;
    nutriments: { energy_kcal_100g: number };
  }) => void;
};

export function FoodSearch({ onSelectFood }: FoodSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<FoodItem[]>([]);

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

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="mb-8">
        <form
          className="flex items-center justify-center"
          onSubmit={e => {
            e.preventDefault();
            searchFoods();
          }}
        >
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search foods..."
              className="w-full px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-800 border dark:border-zinc-700 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 transition-all duration-200"
            />
            <Button
              type="submit"
              onClick={searchFoods}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700"
            >
              Search
            </Button>
          </div>
        </form>

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.map(food => (
              <div
                key={food.code}
                className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {food.product_name}
                </h3>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {food.nutriments.energy_kcal_100g || "N/A"}
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-300">
                    kcal per 100g
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

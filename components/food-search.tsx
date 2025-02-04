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

export const FoodSearch = () => {
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
    <div>
      <div className="">
        <form className="">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onInput={searchFoods}
            placeholder="Search foods..."
            className="p-2 rounded-md"
          />
          <Button onSubmit={searchFoods} className="ml-2 text-lg font-medium">
            Search
          </Button>
        </form>

        <div className="">
          <ul className="">
            {results.map(food => (
              <li key={food.code} className="flex p-3 font-medium text-lg">
                {food.product_name} - {food.nutriments.energy_kcal_100g} kcal
                per 100g
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

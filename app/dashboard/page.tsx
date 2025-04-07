/* eslint-disable */
"use client";
import { FoodSearch } from "@/components/food-search";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <Card className="min-h-screen mx-4 my-20 bg-card text-card-foreground shadow-md rounded-xl">
      <CardHeader>
        <CardTitle className="font-bold text-3xl">Search Food</CardTitle>
        <CardDescription className="text-md">
          Search for foods to track your calorie intake
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FoodSearch />
      </CardContent>
    </Card>
  );
}

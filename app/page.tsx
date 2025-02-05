/* eslint-disable */
"use client";
import { FoodSearch } from "@/components/food-search";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-12 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome, {session?.user?.name}!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Track your nutrition and discover detailed information about the
            foods you eat.
          </p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Search Food Database
          </h2>
          <FoodSearch />
        </div>
      </div>
    </div>
  );
}

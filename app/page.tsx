"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function page() {
  const { data: session } = useSession();

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="text-2xl font-bold">Welcome, {session?.user?.name}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}

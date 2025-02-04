"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogoutButton() {
  return (
    <Button onClick={() => signOut()} className="text-lg font-medium w-full">
      Logout
    </Button>
  );
}

import Link from "next/link";
import React from "react";
import { ModeToggle } from "./mode-toggle";

export const Footer = () => {
  return (
    <div className="flex items-center justify-between py-4 px-4 bg-background border-t border-border">
      <div>
        <span className="text-muted-foreground text-sm">
          &copy; FitStack &mdash; All Rights Reserved.
        </span>
      </div>
      <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
        <Link href="/" className="hover:underline underline-offset-1">
          Privacy Policy
        </Link>
        <Link href="/" className="hover:underline underline-offset-1">
          Terms of Service
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

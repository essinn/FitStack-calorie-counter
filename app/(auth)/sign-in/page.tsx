"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-y-auto">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Welcome to FitStack
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Track your calories and stay healthy!
        </p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google logo"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
}

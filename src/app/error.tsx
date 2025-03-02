"use client";

import { useEffect } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught by error boundary:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-brand-dark">
        Something went wrong!
      </h1>
      <p className="mt-2 text-brand-dark">{error.message}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        onClick={() => reset()} // Refresh page
      >
        Try Again
      </button>
    </div>
  );
}

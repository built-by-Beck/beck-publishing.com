"use client";

import { useEffect } from "react";

export default function SilentBonesProjectRedirect() {
  useEffect(() => {
    window.location.replace("/books/silent-bones/");
  }, []);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <p className="text-zinc-400">Redirecting to Silent Bones...</p>
    </div>
  );
}

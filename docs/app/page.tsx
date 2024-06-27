"use client";

import { Button } from "@praveenmsp23/ui";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-3 p-24">
      <h1 className="text-7xl font-bold">UI Docs</h1>
      <Button
        onClick={() => {
          alert("Looks like it's working!!!");
        }}
      >
        Hello
      </Button>
    </main>
  );
}

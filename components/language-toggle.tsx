"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function LanguageToggle() {
  const [language, setLanguage] = useState<"jp" | "en">("jp")

  return (
    <div className="flex border border-zinc-800 rounded-md overflow-hidden">
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 rounded-none ${
          language === "en"
            ? "bg-zinc-800 text-white"
            : "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900"
        }`}
        onClick={() => setLanguage("en")}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-2 rounded-none ${
          language === "jp"
            ? "bg-zinc-800 text-white"
            : "bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-900"
        }`}
        onClick={() => setLanguage("jp")}
      >
        JP
      </Button>
    </div>
  )
}

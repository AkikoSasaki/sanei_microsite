"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Monitor } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all"
        >
          {theme === "light" ? (
            <>
              <Sun className="h-4 w-4 text-amber-500" />
              <span>ライト</span>
            </>
          ) : theme === "dark" ? (
            <>
              <Moon className="h-4 w-4 text-blue-400" />
              <span>ダーク</span>
            </>
          ) : (
            <>
              <Monitor className="h-4 w-4 text-zinc-500" />
              <span>自動</span>
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-zinc-900 border-zinc-800 dark:bg-white dark:border-zinc-200"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          <Sun className="h-4 w-4 text-amber-500" />
          <span className="text-zinc-800 dark:text-white">ライトモード</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          <Moon className="h-4 w-4 text-blue-400" />
          <span className="text-zinc-800 dark:text-white">ダークモード</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center gap-2 cursor-pointer hover:bg-zinc-800 dark:hover:bg-zinc-200"
        >
          <Monitor className="h-4 w-4" />
          <span className="text-zinc-800 dark:text-white">システム設定に合わせる</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

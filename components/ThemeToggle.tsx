"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-green-200 dark:bg-green-700 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-800 hover:bg-green-50 dark:hover:bg-green-700 border border-green-200 dark:border-green-700 text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-400 transition-all duration-200"
    >
      {isDark ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  );
}
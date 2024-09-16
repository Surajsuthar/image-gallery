"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from 'lucide-react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="mt-1" onClick={handleClick} style={{ cursor: 'pointer' }}>
      {theme === 'light' ?  <Moon /> : <Sun/>}
    </div>
  );
}

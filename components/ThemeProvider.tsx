// components/ThemeProvider.tsx

"use client";

import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useSelector((state: RootState) => state.theme.theme);

  // 👇 TAMBAHKAN BARIS INI UNTUK DEBUGGING
  console.log("Current Redux theme state:", theme);

  useEffect(() => {
    const root = window.document.documentElement;

    // 👇 TAMBAHKAN JUGA DI SINI UNTUK MELIHAT APAKAH EFEK BERJALAN
    console.log("useEffect is running for theme:", theme);

    root.classList.remove("dark");

    if (theme === "dark") {
      root.classList.add("dark");
    }
  }, [theme]);

  return <div className="bg-white text-slate-900 dark:text-slate-200 dark:bg-[rgb(5,10,35)] min-h-screen transition-colors duration-500 ease-in-out">{children}</div>;
}

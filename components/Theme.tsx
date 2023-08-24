"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export default function Theme() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme == "dark" ? (
        <BsSunFill className="text-xl" onClick={() => setTheme("light")} />
      ) : (
        <FaMoon className="text-xl" onClick={() => setTheme("dark")} />
      )}
    </>
  );
}

"use client"
import React from "react";

import { Bricolage_Grotesque } from "next/font/google";
import Theme from "./Theme";
import { useRouter } from "next/navigation";

const bricolage_Grotesque = Bricolage_Grotesque({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {

  const router = useRouter()
  
  return (
    <div className="flex justify-between py-5 md:py-10 px-2 items-center">
      <h3 onClick={() => router.push("/")} style={bricolage_Grotesque.style} className="text-xl font-bold text-primary cursor-pointer">
        read-tech
      </h3>

      <Theme />
    </div>
  );
}

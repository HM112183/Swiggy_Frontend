"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { FiMapPin, FiSearch } from "react-icons/fi";

export default function Hero() {
const [hero, setHero] = useState({
  heading: "",
  leftImage: "",
  rightImage: "",
});

useEffect(() => {
  api.get("/home/hero").then((res) => {
    setHero(res.data);
  });
}, []);

  return (
<div className="relative">

  {/* Left Image */}

{hero.leftImage && (
  <img
    src={hero.leftImage}
    alt="Left Hero"
    className="
    absolute
    left-[-120px]
    top-[-40px]
    w-[260px]
    "
  />
)}

  {/* Right Image */}

{hero.rightImage && (
  <img
    src={hero.rightImage}
    alt="Right Hero"
    className="
    absolute
    right-[-120px]
    top-[-40px]
    w-[260px]
    "
  />
)}

  <h1 className="text-center text-white text-6xl font-bold leading-tight max-w-4xl mx-auto">
    {hero.heading}
  </h1>

</div>
  );
}
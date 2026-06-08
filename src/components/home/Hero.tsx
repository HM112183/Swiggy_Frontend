"use client";

import {useEffect,useState,useCallback,useRef,} from "react";
import { api } from "@/services/api";
import { FiMapPin, FiSearch } from "react-icons/fi";

export default function Hero() {
  const [hero, setHero] = useState({
    heading: "",
    leftImage: "",
    rightImage: "",
  });
const headingRef = useRef<HTMLHeadingElement>(null);


const fetchHero = useCallback(async () => {
  const res = await api.get("/home/hero");
  setHero(res.data);
}, []);


useEffect(() => {
  fetchHero();
}, [fetchHero]);

  return (
    <div className="relative">
      {/* Left Image */}
      {hero.leftImage && (
        <img
          src={hero.leftImage}
          loading="lazy"
          alt="Left Hero"
          className="
            hidden
            lg:block
            absolute
            left-[-60px]
            top-[40px]
            w-[220px]
            pointer-events-none
            select-none
          "
        />
      )}

      {/* Right Image */}
      {hero.rightImage && (
        <img
          src={hero.rightImage}
          loading="lazy"
          alt="Right Hero"
          className="
            hidden
            lg:block
            absolute
            right-[-60px]
            top-[40px]
            w-[220px]
            pointer-events-none
            select-none
          "
        />
      )}

<h1
  ref={headingRef}
        className="
          text-center
          text-white
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          max-w-4xl
          mx-auto
          px-4
        "
      >
        {hero.heading}
      </h1>
    </div>
  );
}
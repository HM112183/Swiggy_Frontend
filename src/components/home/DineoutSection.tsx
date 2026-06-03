"use client";

import { useEffect, useState, useRef } from "react";
import { api } from "@/services/api";
import DineoutCard from "@/components/dineout/DineoutCard";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Restaurant {
  id: number;
  name: string;
  image: string;
  rating: number;
  cuisine: string;
  location: string;
  priceForTwo: string;
  distance: string;
  offer: string;
}

export default function DineoutSection() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    api.get("/home/dineout-restaurants").then((res) => {
      setRestaurants(res.data);
    });
  }, []);
const scrollLeft = () => {
  sliderRef.current?.scrollBy({
    left: -450,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  sliderRef.current?.scrollBy({
    left: 450,
    behavior: "smooth",
  });
};
  return (
    <section className="py-16 bg-[#fafafa] rounded-[32px]">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[34px] font-extrabold tracking-[-0.5px] text-black">
            Discover best restaurants on Dineout
          </h2>

          <div className="flex gap-3">
            <button
  onClick={scrollLeft}
  className="w-12 h-12 rounded-full bg-gray-200 text-black flex items-center justify-center"
>
              <FiArrowLeft />
            </button>

            <button
  onClick={scrollRight}
  className="w-12 h-12 rounded-full bg-gray-200 text-black flex items-center justify-center"
>
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
  ref={sliderRef}
  className="flex gap-8 overflow-x-hidden pb-4 scroll-smooth"
>
          {restaurants.map((restaurant) => (
            <DineoutCard
              key={restaurant.id}
              {...restaurant}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
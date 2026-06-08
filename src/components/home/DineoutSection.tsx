"use client";

import {useEffect,useState,useRef,useCallback,useMemo,} from "react";
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

  const fetchRestaurants = useCallback(async () => {
  const res = await api.get("/home/dineout-restaurants");
  setRestaurants(res.data);
}, []);

useEffect(() => {
  fetchRestaurants();
}, [fetchRestaurants]);

  const scrollLeft = useCallback(() => {
    sliderRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  }, []);

  const scrollRight = useCallback(() => {
    sliderRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  }, []);

  const restaurantList = useMemo(
  () => restaurants,
  [restaurants]
);

  return (
    <section className="py-12 md:py-16 bg-[#fafafa] rounded-[32px] px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2
            className="
              text-2xl
              md:text-[34px]
              font-extrabold
              tracking-[-0.5px]
              text-black
            "
          >
            Discover best restaurants on Dineout
          </h2>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="
                w-10
                h-10
                md:w-12
                md:h-12
                rounded-full
                bg-gray-200
                text-black
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-300
                active:bg-gray-400
                active:scale-95
                transition-all
              "
            >
              <FiArrowLeft />
            </button>

            <button
              onClick={scrollRight}
              className="
                w-10
                h-10
                md:w-12
                md:h-12
                rounded-full
                bg-gray-200
                text-black
                flex
                items-center
                justify-center
                cursor-pointer
                hover:bg-gray-300
                active:bg-gray-400
                active:scale-95
                transition-all
              "
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="
            flex
            gap-4
            md:gap-8
            overflow-x-auto
            pb-4
            scroll-smooth
            scrollbar-hide
          "
        >
          {restaurantList.map((restaurant) => (
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
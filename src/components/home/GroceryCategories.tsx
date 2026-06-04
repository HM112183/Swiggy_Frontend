"use client";

import { useEffect, useState, useRef } from "react";
import { api } from "@/services/api";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface Category {
  id: number;
  name: string;
  image: string;
}

export default function FoodCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    api.get("/home/grocery-categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Shop groceries on Instamart
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
              title="Scroll left"
              aria-label="Scroll left"
            >
              <FiArrowLeft size={20} />
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
              title="Scroll right"
              aria-label="Scroll right"
            >
              <FiArrowRight size={20} />
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
            scroll-smooth
            scrollbar-hide
          "
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="
                flex
                flex-col
                items-center
                min-w-[120px]
                md:min-w-[180px]
                cursor-pointer
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <Image
                src={category.image}
                alt={category.name}
                width={140}
                height={140}
                className="object-contain"
              />
              <p className="text-base md:text-2xl mt-2 text-gray-800 text-center">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
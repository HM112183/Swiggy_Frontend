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
    <section className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-black">
            Shop groceries on Instamart
          </h2>
          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-gray-200 text-black flex items-center justify-center"
              title="Scroll left"
              aria-label="Scroll left"
            >
              <FiArrowLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-gray-200 text-black flex items-center justify-center"
              title="Scroll right"
              aria-label="Scroll right"
            >
              <FiArrowRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-hidden scroll-smooth"
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center min-w-[180px]"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={160}
                height={160}
                className="object-contain"
              />
              <p className="text-2xl mt-2 text-gray-800">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
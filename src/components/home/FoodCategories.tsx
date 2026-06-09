"use client";

import { useEffect,useState,useRef,useCallback, useMemo,} from "react";
import { api } from "@/services/api";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useCart } from "@/context/CartContext";

interface Category {
  id: number;
  name: string;
  image: string;
}

export default function FoodCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { addItem } = useCart();

  const scrollLeft = useCallback(() => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  }, []);

  const scrollRight = useCallback(() => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  }, []);

  const fetchCategories = useCallback(async () => {
  const res = await api.get("/home/food-categories");
  setCategories(res.data);
}, []);

useEffect(() => {
  fetchCategories();
}, [fetchCategories]);

const categoryList = useMemo(
  () => categories,
  [categories]
);

  return (
    <section className="pt-12 md:pt-16 pb-12 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            What's on your mind?
          </h2>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              title="Scroll left"
              aria-label="Scroll left"
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
                duration-150
              "
            >
              <FiArrowLeft size={20} />
            </button>

            <button
              onClick={scrollRight}
              title="Scroll right"
              aria-label="Scroll right"
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
                duration-150
              "
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
          {categoryList.map((category) => (
              <div
                key={category.id}
                onClick={() =>
                  addItem(category.name)
                }
                className="
                group
                flex
                flex-col
                items-center
                min-w-[120px]
                md:min-w-[180px]
                cursor-pointer
                transition-all
                duration-300
                hover:scale-105
                active:scale-95
                "
              >
              <Image
                src={category.image}
                alt={category.name}
                width={140}
                height={140}
                className="
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
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
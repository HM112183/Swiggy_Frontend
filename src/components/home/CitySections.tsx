"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { FiChevronDown } from "react-icons/fi";

interface CityData {
  foodDelivery: string[];
  groceryDelivery: string[];
}

export default function CitySections() {
  const [data, setData] = useState<CityData | null>(null);

  useEffect(() => {
    api.get("/home/cities").then((res) => {
      setData(res.data);
    });
  }, []);

  if (!data) return null;

  return (
    <section className="py-12">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Food Delivery */}
        <h2 className="
text-2xl
md:text-[32px]
font-bold
text-[#282c3f]
mb-6
">
          Cities with food delivery
        </h2>
        
        <div
  className="
  grid
  grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-5
  mb-20
  "
>
          {data.foodDelivery.map((city) => (
            <button
              key={city}
              className="
h-[68px]
rounded-xl
border
border-gray-300
bg-white
text-[#3d4152]
text-[16px]
md:text-[17px]
font-medium
px-4
shadow-sm

cursor-pointer

hover:border-[#ff5200]
hover:text-[#ff5200]
hover:shadow-md
hover:-translate-y-1

active:scale-[0.97]

transition-all
duration-300
active:scale-[0.96]
active:bg-[#fff7f3]
active:border-[#ff5200]
"
            >
              Order food online in {city}
            </button>
          ))}
<button
className="
h-[68px]
rounded-xl
border
border-gray-300
bg-white

text-[#ff5200]
font-semibold

flex
items-center
justify-center
gap-2

cursor-pointer

hover:bg-[#fff7f3]
hover:border-[#ff5200]
hover:text-[#ff5200]
hover:bg-[#fff7f3]
hover:shadow-lg
hover:-translate-y-1
hover:font-semibold

active:scale-[0.97]

transition-all
duration-300
active:scale-[0.96]
active:bg-[#fff7f3]
active:border-[#ff5200]
"
>
  Show More
  <FiChevronDown size={18} />
</button>
        </div>

        {/* Grocery Delivery */}
        <h2
  className="
  text-2xl
  md:text-[32px]
  font-bold
  text-[#282c3f]
  mb-6
  "
>
          Cities with grocery delivery
        </h2>
        
        <div
  className="
  grid
  grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-4
  "
>
          {data.groceryDelivery.map((city) => (
            <button
              key={city}
className="
h-[68px]
rounded-xl
border
border-gray-300
bg-white
text-[#3d4152]
text-[16px]
md:text-[17px]
font-medium
px-4
shadow-sm

cursor-pointer

hover:border-[#ff5200]
hover:text-[#ff5200]
hover:shadow-md
hover:-translate-y-1

active:scale-[0.97]

transition-all
duration-300
active:scale-[0.96]
active:bg-[#fff7f3]
active:border-[#ff5200]
"
            >
              Order grocery delivery in {city}
            </button>
          ))}
<button
className="
h-[68px]
rounded-xl
border
border-gray-300
bg-white

text-[#ff5200]
font-semibold

flex
items-center
justify-center
gap-2

cursor-pointer

hover:bg-[#fff7f3]
hover:border-[#ff5200]
hover:text-[#ff5200]
hover:shadow-md
hover:-translate-y-1

active:scale-[0.97]

transition-all
duration-300
active:scale-[0.96]
active:bg-[#fff7f3]
active:border-[#ff5200]
"
>
  Show More
  <FiChevronDown size={18} />
</button>
        </div>
      </div>
    </section>
  );
}
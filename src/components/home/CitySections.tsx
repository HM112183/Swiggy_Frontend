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
      <div className="max-w-[1200px] mx-auto">
        {/* Food Delivery */}
        <h2 className="text-[32px] font-bold text-[#282c3f] mb-6">
          Cities with food delivery
        </h2>
        
        <div className="grid grid-cols-4 gap-5 mb-20">
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
text-[17px]
font-medium
leading-relaxed
px-4
shadow-sm
hover:border-[#ff5200]
transition-all
"
            >
              Order food online in {city}
            </button>
          ))}
<button
  className="
  h-[60px]
  rounded-xl
  border
  border-gray-300
  bg-white
  text-[16px]
  font-medium
  text-gray-700
  hover:border-[#ff5200]
  hover:shadow-sm
  transition-all
  flex
  items-center
  justify-center
  gap-2
  "
>
  Show More
  <FiChevronDown size={18} />
</button>
        </div>

        {/* Grocery Delivery */}
        <h2 className="text-[32px] font-bold text-[#282c3f] mb-6">
          Cities with grocery delivery
        </h2>
        
        <div className="grid grid-cols-4 gap-4">
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
text-[17px]
font-medium
leading-relaxed
px-4
shadow-sm
hover:border-[#ff5200]
transition-all
"
            >
              Order grocery delivery in {city}
            </button>
          ))}
<button
  className="
  h-[60px]
  rounded-xl
  border
  border-gray-300
  bg-white
  text-[16px]
  font-medium
  text-gray-700
  hover:border-[#ff5200]
  hover:shadow-sm
  transition-all
  flex
  items-center
  justify-center
  gap-2
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
"use client";
import Image from "next/image";

interface Props {
  image: string;
  name: string;
  rating: number;
  cuisine: string;
  location: string;
  priceForTwo: string;
  distance: string;
  offer: string;
}

export default function DineoutCard({
  image,
  name,
  rating,
  cuisine,
  location,
  priceForTwo,
  distance,
  offer,
}: Props) {
  return (
<div
  className="
  w-[280px]
  md:w-[380px]
  shrink-0
  rounded-[24px]
  overflow-hidden
  bg-white
  border
  border-gray-200
  shadow-lg
  cursor-pointer
  hover:border-[#ff5200]
  hover:shadow-2xl
  hover:-translate-y-2
  active:scale-[0.98]
  active:shadow-md
  transition-all
  duration-300
  touch-manipulation
"
>
      <div className="relative">
<Image
  src={image}
  alt={name}
  width={380}
  height={220}
  className="
w-full
h-[180px]
md:h-[260px]
object-cover
transition-transform
duration-500
hover:scale-105
"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        <div className="absolute bottom-5 left-5 text-white z-10">
          <h3 className="text-[18px] md:text-[20px] font-extrabold leading-tight">{name}</h3>
        </div>

        <div
  className="
  absolute
  bottom-5
  right-5
  bg-green-600
  text-white
  w-10
  h-10
  rounded-full
  flex
  items-center
  justify-center
  z-10
"
>
          {rating}
        </div>
      </div>

      <div className="p-4 md:p-5 bg-white">
        <div className="flex justify-between text-gray-700">
          <span>{cuisine}</span>
          <span>{priceForTwo}</span>
        </div>

        <div className="flex justify-between mt-2 text-gray-500">
          <span>{location}</span>
          <span>{distance}</span>
        </div>

        <div className="mt-4 bg-green-500 text-white rounded-xl px-4 py-3 font-medium">
          {offer}
        </div>
      </div>
    </div>
  );
}
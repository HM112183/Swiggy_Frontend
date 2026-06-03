"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import { FiArrowRight } from "react-icons/fi";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  offer: string;
}

export default function ServiceCards() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    api.get("/home/services").then((res) => {
      setServices(res.data);
    });
  }, []);

  return (
    <section className="max-w-[1200px] mx-auto mt-16">
      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service.id}
            className="
              bg-[#f3f3f3]
              rounded-[32px]
              p-8
              h-[280px]
              relative
              overflow-hidden
            "
          >
            <h2 className="text-4xl font-black text-gray-800">
              {service.title}
            </h2>

            <p className="text-2xl text-gray-500 mt-2">
              {service.subtitle}
            </p>

            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-xl mt-4 font-semibold">
              {service.offer}
            </div>

            <button
              className="
                absolute
                bottom-6
                left-6
                bg-[#ff5200]
                text-white
                w-14
                h-14
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        ))}

      </div>
    </section>
  );
}
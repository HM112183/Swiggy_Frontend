"use client";

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Image from "next/image";

interface BannerData {
  title: string;
  subtitle: string;
  bannerImage: string;
}

export default function AppBanner() {
  const [banner, setBanner] = useState<BannerData | null>(null);

  useEffect(() => {
    api.get("/home/app-banner").then((res) => {
      setBanner(res.data);
    });
  }, []);

  if (!banner) return null;

  return (
    <section
      id="app-banner"
      className="py-20 md:scroll-mt-32"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#161A1E] rounded-[28px] overflow-hidden">
          <div
            className="
              flex
              flex-col
              lg:flex-row
              items-center
              justify-between
              px-6
              md:px-10
              lg:px-20
              py-10
              gap-8
            "
          >
            <div className="max-w-[420px] text-center lg:text-left">
              <div className="text-[#ff5200] text-xl font-bold mb-4">
                Swiggy
              </div>

              <h2
                className="
                  text-white
                  text-3xl
                  md:text-4xl
                  lg:text-[48px]
                  lg:leading-[60px]
                  font-extrabold
                  mb-4
                "
              >
                {banner.title}
              </h2>

              <p className="text-gray-400 text-base md:text-lg lg:text-xl">
                {banner.subtitle}
              </p>
            </div>

            <div className="flex justify-center lg:justify-end w-full">
              <Image
                src={banner.bannerImage}
                alt="Swiggy App"
                width={520}
                height={320}
                className="
                  object-contain
                  w-full
                  max-w-[520px]
                  h-auto
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
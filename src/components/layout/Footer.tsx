"use client";

import {
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f0f0f5] mt-20">
      <div className="max-w-[1200px] mx-auto px-4 py-16">
<div
  className="
  grid
  grid-cols-2
  lg:grid-cols-5
  gap-8
  lg:gap-12
  items-start
"
>
{/* Logo */}
<div className="col-span-2 lg:col-span-1 flex flex-col">
  <div className="flex items-center gap-3">
    <img
      src="/footer/swiggy-logo.png"
      alt="Swiggy"
      className="w-12 h-12 object-contain"
    />

    <h1 className="text-[28px] md:text-[34px] font-bold text-[#ff5200] leading-none">
      Swiggy
    </h1>
  </div>

  <p className="mt-2 text-[16px] text-[#686b78] whitespace-nowrap">
    © 2025 Swiggy Limited
  </p>
</div>

          {/* Company */}
          <div>
            <h3 className="text-[22px] font-bold text-[#02060c] mb-5">
              Company
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>About Us</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Swiggy Corporate</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Careers</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Team</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Swiggy One</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Swiggy Instamart</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Swiggy Dineout</li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-[20px] font-bold text-[#02060c] mb-4">
              Contact us
            </h3>
            <ul className="space-y-4 text-gray-600 mb-8">
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Help & Support</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Partner With Us</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Ride With Us</li>
            </ul>

            <h3 className="text-[20px] font-bold text-[#02060c] mb-4">Legal</h3>
            <ul className="space-y-4 text-gray-600">
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Terms & Conditions</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Cookie Policy</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Privacy Policy</li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-[20px] font-bold text-[#02060c] mb-4">
              Available in:
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Bangalore</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Gurgaon</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Hyderabad</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Delhi</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Mumbai</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Pune</li>
            </ul>
            <div className="mt-4">
              <select
                aria-label="Available cities"
                className="
border
rounded-xl
px-4
py-2
bg-white
cursor-pointer
hover:border-[#ff5200]
transition-all
duration-300
"
              >
                <option>685 cities</option>
              </select>
            </div>
          </div>

          {/* Life + Social */}
          <div>
            <h3 className="text-[20px] font-bold text-[#02060c] mb-4">
              Life at Swiggy
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Explore With Swiggy</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Swiggy News</li>
              <li
  className="
  cursor-pointer
  hover:text-[#ff5200]
  hover:translate-x-1
  active:text-[#ff5200]
  active:scale-90
  transition-all
  duration-300
  "
>Snackables</li>
            </ul>

            <h3 className="font-bold text-xl mt-10 mb-5 text-black">
              Social Links
            </h3>
            <div className="flex gap-5 text-2xl text-[#3d4152]">
              <FaLinkedin className="cursor-pointer hover:text-[#ff5200] hover:scale-125 active:text-[#ff5200] active:scale-90 transition-all duration-300" />
              <FaInstagram className="cursor-pointer hover:text-[#ff5200] hover:scale-125 active:text-[#ff5200] active:scale-90 transition-all duration-300" />
              <FaFacebookF className="cursor-pointer hover:text-[#ff5200] hover:scale-125 active:text-[#ff5200] active:scale-90 transition-all duration-300" />
              <FaPinterestP className="cursor-pointer hover:text-[#ff5200] hover:scale-125 active:text-[#ff5200] active:scale-90 transition-all duration-300" />
              <FaTwitter className="cursor-pointer hover:text-[#ff5200] hover:scale-125 active:text-[#ff5200] active:scale-90 transition-all duration-300" />
            </div>
          </div>
        </div>

        {/* App Download Banner */}
        <div
  className="
  border-t
  border-gray-300
  mt-14
  pt-8

  flex
  flex-col
  lg:flex-row

  items-center
  justify-center

  gap-6
  lg:gap-10
  "
>
          <h2
  className="
  text-2xl
  md:text-[34px]
  font-bold
  text-[#3d4152]
  text-center
  "
>
            For better experience, download the Swiggy app now
          </h2>
          <img
            src="/footer/app-store.png"
            alt="App Store"
            className="
h-14
md:h-16
cursor-pointer

hover:scale-105
active:scale-90

transition-all
duration-300
"
          />
          <img
            src="/footer/google-play.png"
            alt="Google Play"
            className="
h-14
md:h-16
cursor-pointer

hover:scale-105
active:scale-90

transition-all
duration-300
"
          />
        </div>
      </div>
    </footer>
  );
}
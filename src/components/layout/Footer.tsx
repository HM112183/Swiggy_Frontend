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
      <div className="max-w-[1200px] mx-auto py-16">
        <div className="grid grid-cols-5 gap-12 items-start">
{/* Logo */}
<div className="flex flex-col">
  <div className="flex items-center gap-3">
    <img
      src="/footer/swiggy-logo.png"
      alt="Swiggy"
      className="w-12 h-12 object-contain"
    />

    <h1 className="text-[34px] font-bold text-[#ff5200] leading-none">
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
              <li>About Us</li>
              <li>Swiggy Corporate</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Swiggy One</li>
              <li>Swiggy Instamart</li>
              <li>Swiggy Dineout</li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-[20px] font-bold text-[#02060c] mb-4">
              Contact us
            </h3>
            <ul className="space-y-4 text-gray-600 mb-8">
              <li>Help & Support</li>
              <li>Partner With Us</li>
              <li>Ride With Us</li>
            </ul>

            <h3 className="text-[20px] font-bold text-[#02060c] mb-4">Legal</h3>
            <ul className="space-y-4 text-gray-600">
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-[20px] font-bold text-[#02060c] mb-4">
              Available in:
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
            <div className="mt-4">
              <select
                aria-label="Available cities"
                className="border rounded-xl px-4 py-2 bg-white cursor-pointer"
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
              <li>Explore With Swiggy</li>
              <li>Swiggy News</li>
              <li>Snackables</li>
            </ul>

            <h3 className="font-bold text-xl mt-10 mb-5 text-black">
              Social Links
            </h3>
            <div className="flex gap-5 text-2xl text-[#3d4152]">
              <FaLinkedin className="cursor-pointer hover:text-[#ff5200] transition-colors" />
              <FaInstagram className="cursor-pointer hover:text-[#ff5200] transition-colors" />
              <FaFacebookF className="cursor-pointer hover:text-[#ff5200] transition-colors" />
              <FaPinterestP className="cursor-pointer hover:text-[#ff5200] transition-colors" />
              <FaTwitter className="cursor-pointer hover:text-[#ff5200] transition-colors" />
            </div>
          </div>
        </div>

        {/* App Download Banner */}
        <div className="border-t border-gray-300 mt-14 pt-8 flex items-center justify-center gap-10">
          <h2 className="text-[34px] font-bold text-[#3d4152]">
            For better experience, download the Swiggy app now
          </h2>
          <img
            src="/footer/app-store.png"
            alt="App Store"
            className="h-16 cursor-pointer transform hover:scale-105 transition-transform"
          />
          <img
            src="/footer/google-play.png"
            alt="Google Play"
            className="h-16 cursor-pointer transform hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </footer>
  );
}
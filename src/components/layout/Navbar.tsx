"use client";

import LoginDrawer from "../auth/LoginDrawer";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useState } from "react";
export default function Navbar() {
  
const [openLogin, setOpenLogin] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [showMenu, setShowMenu] = useState(false);
let menuTimer: NodeJS.Timeout;
useEffect(() => {
  const loggedIn = localStorage.getItem("loggedIn");

  if (loggedIn === "true") {
    setIsLoggedIn(true);
  }
}, []); 


  return (
    <nav className="w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-6">

        {/* Logo */}

<div className="flex flex-col">
  <div className="flex items-center gap-3">
    <img
      src="/navbar/logo.png"
      alt="Swiggy"
      className="w-12 h-12 object-contain"
    />

    <h1 className="text-[34px] font-bold text-[#ffffff] leading-none">
      Swiggy
    </h1>
  </div>
</div>

        {/* Menu */}

        <div className="flex items-center gap-10">

          <button className="text-white font-medium">
            Swiggy Corporate
          </button>

          <button className="text-white font-medium">
            Partner with us
          </button>

<a
  href="#app-banner"
  className="
    border
    border-white
    px-6
    py-3
    rounded-2xl
    text-white
    flex
    items-center
    gap-2
  "
>
  Get the App
  <FiArrowUpRight />
</a>

{!isLoggedIn ? (
  <button
    onClick={() => setOpenLogin(true)}
    className="
    bg-black
    text-white
    px-8
    py-3
    rounded-2xl
    "
  >
    Sign in
  </button>
) : (
<div
  className="relative"
onMouseEnter={() => {
  clearTimeout(menuTimer);
  setShowMenu(true);
}}
>
    <button
      className="
      w-12
      h-12
      rounded-full
      bg-[#f0f0f5] text-[#3d4152]
      text-white
      flex
      items-center
      justify-center
      "
    >
      👤
    </button>

{showMenu && (
  <div
    onMouseLeave={() => {
  menuTimer = setTimeout(() => {
    setShowMenu(false);
  }, 300);
}}
    className="
    absolute
    top-14
    right-0
    w-64
    bg-white
    rounded-xl
    shadow-xl
    py-3
    z-50
    "
  >
        <button className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
">
          Profile
        </button>

        <button className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
">
          Orders
        </button>

        <button className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
">
          Swiggy One
        </button>

        <button className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
">
          Favourites
        </button>

<button
  onClick={() => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    setShowMenu(false);
  }}
  className="w-full text-left px-6 py-3 hover:bg-gray-100 text-red-500"
>
  Logout
</button>
      </div>
    )}
  </div>
)}

        </div>

      </div>
<LoginDrawer
  isOpen={openLogin}
  onClose={() => setOpenLogin(false)}
/>
    </nav>
  );
}
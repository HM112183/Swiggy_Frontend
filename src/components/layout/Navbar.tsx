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
      <div
  className="
  max-w-[1200px]
  mx-auto
  flex
  items-center
  justify-between
  px-4
  md:px-6
  py-4
  md:py-6
  "
>

        {/* Logo */}

<div className="flex flex-col">
<div className="flex items-center gap-4 shrink-0">
  <img
    src="/navbar/logo.png"
    alt="Swiggy"
    className="w-10 h-10 md:w-14 md:h-14 object-contain"
  />

<h1
  className="
  hidden
  sm:block
  text-[28px]
  md:text-[34px]
  font-bold
  text-white
  leading-none
  "
>
  Swiggy
</h1>
</div>
</div>

        {/* Menu */}

        <div className=" flex items-center gap-4 md:gap-8 ">

          <button  className="hidden md:block text-white font-medium cursor-pointer">
            Swiggy Corporate
          </button>

          <button  className="hidden md:block text-white font-medium cursor-pointer">
            Partner with us
          </button>

<a
  href="#app-banner"
  className="
  border
  border-white
  h-[46px]
  md:h-[52px]
  px-3
  md:px-6
  rounded-2xl
  text-white
  flex
  items-center
  justify-center
  gap-2
  font-medium
  "
>
  <span className="hidden sm:inline">
    Get the App
  </span>

  <FiArrowUpRight />
</a>

{!isLoggedIn ? (
  <button
    onClick={() => setOpenLogin(true)}
className="
bg-black
text-white
px-4
md:px-8
text-sm
md:text-base
h-[46px]
md:h-[52px]
rounded-2xl
flex
items-center
justify-center
font-medium
cursor-pointer
hover:bg-[#1f1f1f]
transition-all
duration-300
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
  onClick={() => setShowMenu(!showMenu)}
  className="
  w-12
  h-12
  rounded-full
  bg-[#f0f0f5]
  text-[#3d4152]
  flex
  items-center
  justify-center
  cursor-pointer
  "
>
  👤
</button>

{showMenu && (
  <div
    onMouseLeave={() => {
  menuTimer = setTimeout(() => {
    setShowMenu(false);
  }, 200);
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
        <button onClick={() => setShowMenu(false)}
        className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
cursor-pointer
">
          Profile
        </button>

        <button onClick={() => setShowMenu(false)}
        className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
cursor-pointer
">
          Orders
        </button>

        <button onClick={() => setShowMenu(false)}
        className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
cursor-pointer
">
          Swiggy One
        </button>

        <button onClick={() => setShowMenu(false)}
        className="
w-full
text-left
px-6
py-3
text-[#3d4152]
font-medium
hover:bg-gray-100
cursor-pointer
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
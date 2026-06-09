"use client";

import LoginDrawer from "../auth/LoginDrawer";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
const { isLoggedIn, logout } = useAuth();
const { count, items } = useCart(); 
const [openLogin, setOpenLogin] = useState(false);
  
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  let menuTimer: NodeJS.Timeout;

const openLoginDrawer = useCallback(() => {
  setOpenLogin(true);
}, []);

const handleLogout = useCallback(() => {
  logout();
  setShowMenu(false);
}, [logout]);

  // useEffect(() => {
  //   const loggedIn = localStorage.getItem("loggedIn");
  //   if (loggedIn === "true") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

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
        <div className="flex items-center gap-4 md:gap-8">
          <button className="hidden md:block text-white font-medium cursor-pointer">
            Swiggy Corporate
          </button>

          <button className="hidden md:block text-white font-medium cursor-pointer">
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
            <span className="hidden sm:inline">Get the App</span>
            <FiArrowUpRight />
          </a>
<div
  className="relative"
  onMouseEnter={() => {
    if (window.innerWidth >= 768) {
      setShowCart(true);
    }
  }}
  onMouseLeave={() => {
    if (window.innerWidth >= 768) {
      setShowCart(false);
    }
  }}
>
  <button
    onClick={() => setShowCart(!showCart)}
className="
relative
text-white
cursor-pointer
flex
items-center
gap-2
font-medium
transition-all
duration-300
hover:scale-105
hover:text-yellow-200
"
  >
    🛒

    <span className="hidden md:inline">
      Cart
    </span>

    <span
      className="
      absolute
      -top-2
      -right-3
      bg-black
      text-white
      text-xs
      min-w-[20px]
      h-5
      px-1
      rounded-full
      flex
      items-center
      justify-center
      "
    >
      {count}
    </span>
  </button>

  {showCart && (
    <div
      className="
      absolute
      top-10
      right-0
      w-64
      bg-white
      rounded-xl
      shadow-xl
      p-4
      z-50
      "
    >
      <h3 className="font-bold text-black mb-3">
        Cart Items
      </h3>

      {items.length === 0 ? (
        <p className="text-gray-500">
          Cart is empty
        </p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="
              text-[#3d4152]
              border-b
              pb-2
              "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )}
</div>
          {!isLoggedIn ? (
            <button
              onClick={openLoginDrawer}
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
    if (window.innerWidth >= 768) {
      clearTimeout(menuTimer);
      setShowMenu(true);
    }
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
transition-all
duration-300
hover:scale-110
hover:shadow-lg
"
              >
                👤
              </button>

              {showMenu && (
                <div
                  onMouseLeave={() => {
  if (window.innerWidth >= 768) {
    menuTimer = setTimeout(() => {
      setShowMenu(false);
    }, 200);
  }
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
                  <button
                      onClick={() => {
                        router.push("/profile");
                        setShowMenu(false);
                      }}
                    className="
                      w-full
                      text-left
                      px-6
                      py-3
                      text-[#3d4152]
                      font-medium
                      hover:bg-gray-100
hover:pl-8
transition-all
duration-300
cursor-pointer
                    "
                  >
                    Profile
                  </button>

                  <button
                      onClick={() => {
                        router.push("/profile");
                        setShowMenu(false);
                      }}
                    className="
                      w-full
                      text-left
                      px-6
                      py-3
                      text-[#3d4152]
                      font-medium
                      hover:bg-gray-100
hover:pl-8
transition-all
duration-300
cursor-pointer
                    "
                  >
                    Orders
                  </button>

                        <button
                          onClick={() => {
                            router.push("/profile");
                            setShowMenu(false);
                          }}
                    className="
                      w-full
                      text-left
                      px-6
                      py-3
                      text-[#3d4152]
                      font-medium
                      hover:bg-gray-100
hover:pl-8
transition-all
duration-300
cursor-pointer
                    "
                  >
                    Swiggy One
                  </button>

                    <button
                      onClick={() => {
                        router.push("/profile");
                        setShowMenu(false);
                      }}
                    className="
                      w-full
                      text-left
                      px-6
                      py-3
                      text-[#3d4152]
                      font-medium
                      hover:bg-gray-100
hover:pl-8
transition-all
duration-300
cursor-pointer
                    "
                  >
                    Favourites
                  </button>

                  <button
                    onClick={handleLogout}
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
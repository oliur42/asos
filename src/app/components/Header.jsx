"use client"
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaUserAlt, FaShoppingBag } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { GiRoyalLove } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const[toggle,setToggle]=useState("")

  return (
    <header className="w-full">
      {/* Top Bar (Desktop only) */}
      <div className="hidden xl:flex justify-end gap-4 items-center px-10 py-2">
        <Link href="/">
          <h1 className="text-gray-700 text-[15px] hover:text-blue-500">
            Help & FAQs
          </h1>
        </Link>
        <Link href="/">
          <div className="p-[2px] border-l border-r border-gray-400">
            <Image
              src="https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Bangladesh_-_Circle-512.png"
              width={15}
              height={15}
              alt="Bangladesh Flag"
            />
          </div>
        </Link>
      </div>

      {/* Main Header */}
      <div className="bg-black w-full">
        <div className="max-w-[1300px] mx-auto px-4  py-3">
          <div className="flex justify-between items-center">
            {/* Left Section */}
            <div className="flex items-center gap-4 font-bold flex-wrap">
              {/* Burger Icon (Mobile) */}
              <FaBars className="text-white text-[25px] md:hidden" />

              {/* Logo */}
              <Link href="/">
                {" "}
                <p className="text-gray-100 text-[30px]">asos</p>
              </Link>

              {/* Men/Women Links (Desktop) */}
              <div className="hidden md:flex gap-4 items-center">
                <button
                 
                  className="bg-gray-700 text-white px-6 py-2 text-[16px] "
                >
                  Men
                </button>
                <button
                  
                  className="bg-gray-700 text-white px-6 py-2 text-[16px] "
                >
                  Women
                </button>
              </div>
              

              {/* Search Input (Desktop) */}
              <div className="hidden md:flex items-center w-[500px] lg:w-[600px] xl:w-[750px] h-[41px] bg-amber-50 rounded-3xl px-6">
                <input
                  type="text"
                  placeholder="Search for items and brand"
                  className="w-full bg-transparent outline-none text-black placeholder:text-gray-500"
                />
                <button>
                  <IoSearchOutline className="text-black text-[22px]" />
                </button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex gap-6 text-white text-[22px] items-center">
              {/* Search Icon (Mobile only) */}
              <IoSearchOutline className="md:hidden" />
              <FaUserAlt />
              <GiRoyalLove />
              <FaShoppingBag />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

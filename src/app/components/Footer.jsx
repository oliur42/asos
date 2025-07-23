import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard, FaCcAmazonPay, FaCcPaypal } from "react-icons/fa6";
import { SiFampay } from "react-icons/si";
import Link from 'next/link';
import Image from 'next/image';

const countryFlags = [
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Bangladesh_-_Circle-512.png', alt: 'Bangladesh' },
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_India_-_Circle-512.png', alt: 'India' },
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_United_States_-_Circle-512.png', alt: 'USA' },
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Canada_-_Circle-512.png', alt: 'Canada' },
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_United_Kingdom_-_Circle-512.png', alt: 'UK' },
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Australia_-_Circle-512.png', alt: 'Australia' },
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Germany_-_Circle-512.png', alt: 'Germany' },
  { src: 'https://cdn4.iconfinder.com/data/icons/world-flags-circular/1000/Flag_of_Italy_-_Circle-512.png', alt: 'Italy' },
];

function Footer() {
  return (
    <div className="w-full bg-white py-8 mt-[-100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Social + Payment Icons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-30 border-t border-gray-200 pt-6 pb-10">
          <div className="flex gap-6 text-3xl sm:text-4xl">
            <FaFacebookSquare className="text-blue-600 hover:scale-110 transition" />
            <AiOutlineInstagram className="text-pink-600 hover:scale-110 transition" />
            <IoMdNotificationsOutline className="text-yellow-400 hover:scale-110 transition" />
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-3xl sm:text-4xl">
            <RiVisaLine className="text-indigo-600 hover:scale-110 transition" />
            <FaCcMastercard className="text-red-600 hover:scale-110 transition" />
            <FaCcPaypal className="text-blue-500 hover:scale-110 transition" />
            <SiFampay className="text-purple-600 hover:scale-110 transition" />
            <FaCcAmazonPay className="text-yellow-500 hover:scale-110 transition" />
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-t border-gray-200 pt-10">
          {/* Column 1 */}
          <div>
            <h1 className='text-[18px] font-bold text-gray-700 mb-4'>Help & Information</h1>
            <ul className='flex flex-col gap-2'>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Help</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Track Order</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Delivery & Returns</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Sitemap</Link>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className='text-[18px] font-bold text-gray-700 mb-4'>About ASOS</h1>
            <ul className='flex flex-col gap-2'>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>About us</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Careers at ASOS</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Corporate Responsibility</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Investor site</Link>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className='text-[18px] font-bold text-gray-700 mb-4'>More for ASOS</h1>
            <ul className='flex flex-col gap-2'>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Mobile and Asos apps</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Gift Vouchers</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Black Friday</Link>
              <Link href="#" className='text-gray-600 hover:text-blue-700'>Asos X Thrift</Link>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h1 className='text-[18px] font-bold text-gray-700 mb-4'>Shopping From</h1>
            <p className='text-gray-600 mb-2'>
              You're in | <span className='font-bold'>CHANGE</span>
            </p>
            <p className='text-gray-600 mb-2'>Some of our international sites:</p>
            <div className="flex flex-wrap gap-4">
              {countryFlags.map((flag, index) => (
                <Link href="/" key={index}>
                  <Image
                    src={flag.src}
                    alt={flag.alt}
                    width={24}
                    height={24}
                    className="rounded-full hover:scale-110 transition"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

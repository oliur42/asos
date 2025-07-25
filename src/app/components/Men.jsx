import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Men() {
  const data = [
    "Sale", "New in", "Clothing", "Tranding", "Shoes", "Accessories",
    "Brands", "Activewear", "Gromming", "Tailoring", "Topman"
  ]

  return (
    <div>
      <div className='bg-gray-600'>
        <div className='w-full max-w-[1300px] px-4 sm:px-6 md:px-10 mx-auto'>
          <div className='flex flex-wrap gap-4 sm:gap-6 md:gap-8 justify-start items-center text-[12px] sm:text-[14px] md:text-[16px] text-white py-4'>
            {data.map((item, index) => (
              <div key={index}>
                <Link href="#">{item}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 bg-black px-6 sm:px-20 md:px-40 justify-between items-center'>
          <div className='md:border-r border-white text-center md:text-left'>
            <h1 className='text-white text-[13px] sm:text-[14px] md:text-[15px]'>
              20% off summer style* <br />
              With code: Summer
            </h1>
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-white text-[13px] sm:text-[14px] md:text-[15px]'>
              FREE WORLD WIDE DELIVERY
            </h1>
          </div>
        </div>

        <div className='bg-black border-t border-white pb-6 sm:pb-8'>
          <h1 className='text-[32px] sm:text-[36px] md:text-[48px] text-white text-center font-bold mt-5'>
            20% OFF SUMMER STYLES
          </h1>
          <p className='text-[18px] sm:text-[22px] md:text-[25px] text-center font-bold text-white mt-2'>
            With code: <span className='border border-white py-2 px-4'>SUMMER</span>
          </p>
          <div className='py-5'>
            <p className='text-white text-center text-[10px] sm:text-[11px] md:text-[12px]'>
              valid on selected products only. see website banner for full Ts & Cs
            </p>
          </div>
        </div>
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://content.asos-media.com/-/media/homepages/mw/2025/july/14-mena-row-apac-ie/hero/hp_ww_hero_wk46_2880x1280_row.jpg"
        alt="togo"
        className="object-cover"
        fill
        priority
      />
    </div>
      </div>
     <div>
  <h1 className="text-black font-bold text-center text-[28px] py-4">New in</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
    {[...Array(6)].map((_, index) => (
      <div key={index}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1PlWR31o3f7IKHqaabeV_3I4yvdx-aaY7w&s"
          width={300}
          height={300}
          alt="logo"
          className="w-full h-[200px] object-cover rounded-lg"
        />
      </div>
    ))}
  </div>
</div>
<div>
  
</div>

    </div>
  )
}

export default Men

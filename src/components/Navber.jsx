import React, { useState } from 'react'
import Container from './Container'
import { HiMiniBars2 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { RiBarChartHorizontalLine } from "react-icons/ri";

const Navber = () => {
  let [show, setShow] = useState(false);

  return (
    <section className='bg-[hsl(0,22%,93%)] py-[25px]'>
        <Container>
            <div className='flex items-center'>
                <div onClick={() => setShow(!show)} className='w-1/4 flex gap-4'>
                  {show ?  <RiBarChartHorizontalLine />:<HiMiniBars2 />                  }
                {show && (
                  <ul className=' absolute top-[150px] left-[50px] mt-2 bg-[#262626] py-2 w-48 shadow-lg z-10'>
                    <li className='px-4 py-1 text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-white border-b border-1'>Home</li>
                    <li className='px-4 py-1 text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-white  border-b border-1'>Accessories</li>
                    <li className='px-4 py-1 text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-white  border-b border-1'>Electronics</li>
                    <li className='px-4 py-1 text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-white  border-b border-1'>Clothing</li>
                    <li className='px-4 py-1 text-[rgba(255,255,255,0.7)] cursor-pointer hover:text-white'>Bags</li>
                  </ul>
                )}
                <h5>Shop by Category</h5>
                </div>
                <div className=' w-[100%] lg:w-1/2'>
                  <div className='relative flex'>
                    <input type="search" className='py-3 w-[100%] rounded-md pl-8 lg:mr-0 mr-3 text-[14px] lg:text-[18px] ' placeholder='Search Products.' />
                    <FaSearch className='absolute top-[50%] translate-y-[-50%]  right-4' />
                  </div>
                </div>
                <div className='lg:w-1/4 flex gap-5 justify-end'>
               <div className='flex gap-1 items-center'>
               <FaUser />
               <IoMdArrowDropdown />
               </div>
               <div className=''>
               <FaShoppingCart />
               </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Navber

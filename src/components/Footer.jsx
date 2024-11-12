import React from 'react'
import Container from "../components/Container"
import last from "../assets/logo.png"
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const Footer = () => {
  return (
    <section className='border-b-[30px]'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between pt-10 md:pt-20  text-center lg:text-start'>
          <div className='w-full md:w-1/6 mb-6 md:mb-0'>
            <h1 className='text-[18px] font-semibold'>MENU</h1>
            <h6 className='text-[16px] font-medium pt-2'>Home</h6>
            <h6 className='text-[16px] font-medium pt-2'>Shop</h6>
            <h6 className='text-[16px] font-medium pt-2'>About</h6>
            <h6 className='text-[16px] font-medium pt-2'>Contact</h6>
            <h6 className='text-[16px] font-medium pt-2'>Journal</h6>
          </div>
          
          <div className='w-full md:w-1/6 mb-6 md:mb-0  text-center lg:text-start'>
            <h1 className='text-[18px] font-semibold'>SHOP</h1>
            <h6 className='text-[16px] font-medium pt-2'>Category1</h6>
            <h6 className='text-[16px] font-medium pt-2'>Category2</h6>
            <h6 className='text-[16px] font-medium pt-2'>Category3</h6>
            <h6 className='text-[16px] font-medium pt-2'>Category4</h6>
            <h6 className='text-[16px] font-medium pt-2'>Category5</h6>
          </div>
          
          <div className='w-full md:w-1/6 mb-6 md:mb-0  text-center lg:text-start'>
            <h1 className='text-[18px] font-semibold'>HELP</h1>
            <h6 className='text-[16px] font-medium pt-2'>Privacy Policy</h6>
            <h6 className='text-[16px] font-medium pt-2'>Terms & Conditions</h6>
            <h6 className='text-[16px] font-medium pt-2'>Special E-shop</h6>
            <h6 className='text-[16px] font-medium pt-2'>Shipping</h6>
            <h6 className='text-[16px] font-medium pt-2'>Secure Payments</h6>
          </div>
          
          <div className='w-full md:w-1/4 mb-6 md:mb-0 text-center lg:text-start'>
            <h3 className='text-[18px] font-semibold'>
              (052) 611-5711 <br />
              company@domain.com
            </h3>
            <h6 className='text-[16px] font-medium pt-2'>
              575 Crescent Ave. Quakertown, PA 18951
            </h6>
          </div>
          
          <div className='w-full md:w-1/4 flex justify-center md:justify-end'>
            <img src={last} alt="Logo" className='w-[30%] md:w-[40%] h-[40%] pt-4' />
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-16'>
          <div className='flex gap-5'>
            <a className='hover:text-red-500 text-[24px]' href="https://www.facebook.com/profile.php?id=100092157622733">
              < FaFacebookF/>
            </a>
            <a className='hover:text-red-500 text-[24px]' href="https://www.tiktok.com/@md.yeamin.ahamed">
              <FaTiktok/>
            </a>
            <a className='hover:text-red-500 text-[24px]' href="https://github.com/yeamin-web-dev">
              <BsGithub/>
            </a>
          </div>

          <div className='text-center md:text-left mt-5 md:mt-0'>
            <p className='text-[16px] font-medium'>
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Footer;

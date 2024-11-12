import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "50px",
          transform: "translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "black",
          borderRight: "3px solid white",
          padding: "10px 0",
          color: "transparent"
        }}
      >
        0{i + 1}
      </div>
    )
  };
    
return (
  <section className=''>
      <Slider {...settings}>
        <Container>
            <div className='bg-hero-pettern bg-center bg-cover bg-no-repeat h-[500px] w-full relative '>
                <div className='absolute pt-32 pl-32'>
                    <h2 className='font-bold text-[49px]'>Final Offer</h2>
                    <div className='flex gap-3'>
                    <h5 className='text-[14px] font-semibold pt-6'>Up to</h5>
                    <h3 className='text-[40px] font-bold pt-2'>50%</h3>
                    <p  className='text-[14px] font-semibold pt-6'>sale for all furniture items!</p>
                    </div>
                    <Link to='/shop'>
                    <button className='bg-[#222] text-[#fff] py-2 px-7 mt-5 rounded-sm hover:bg-[#fff] hover:text-[#222] hover:text-[#222 hover:bg-[yellow] duration-700'>Shop Now</button>
                    </Link>
                </div>
            </div>
 </Container>
        <Container>
            <div className='bg-hero-pettern bg-center bg-cover bg-no-repeat h-[500px] w-full mt-10 relative '>
                <div className='absolute pt-32 pl-32'>
                    <h2 className='font-bold text-[49px]'>Final Offer</h2>
                    <div className='flex gap-3'>
                    <h5 className='text-[14px] font-semibold pt-6'>Up to</h5>
                    <h3 className='text-[40px] font-bold pt-2'>50%</h3>
                    <p  className='text-[14px] font-semibold pt-6'>sale for all furniture items!</p>
                    </div>
                    <button className='bg-[#222] text-[#fff] py-2 px-7 mt-5 rounded-sm hover:bg-[#fff] hover:text-[#222] hover:text-[#222 hover:bg-[yellow] duration-700'>Shop Now</button>
                </div>
            </div>
 </Container>
        <Container>
            <div className='bg-hero-pettern bg-center bg-cover bg-no-repeat h-[500px] w-full mt-10 relative '>
                <div className='absolute pt-32 pl-32'>
                    <h2 className='font-bold text-[49px]'>Final Offer</h2>
                    <div className='flex gap-3'>
                    <h5 className='text-[14px] font-semibold pt-6'>Up to</h5>
                    <h3 className='text-[40px] font-bold pt-2'>50%</h3>
                    <p  className='text-[14px] font-semibold pt-6'>sale for all furniture items!</p>
                    </div>
                    <button className='bg-[#222] text-[#fff] py-2 px-7 mt-5 rounded-sm hover:bg-[#fff] hover:text-[#222] hover:text-[#222 hover:bg-[yellow] duration-700'>Shop Now</button>
                </div>
            </div>
 </Container>
        <Container>
            <div className='bg-hero-pettern bg-center bg-cover bg-no-repeat h-[500px] w-full mt-10 relative '>
                <div className='absolute pt-32 pl-32'>
                    <h2 className='font-bold text-[49px]'>Final Offer</h2>
                    <div className='flex gap-3'>
                    <h5 className='text-[14px] font-semibold pt-6'>Up to</h5>
                    <h3 className='text-[40px] font-bold pt-2'>50%</h3>
                    <p  className='text-[14px] font-semibold pt-6'>sale for all furniture items!</p>
                    </div>
                    <button className='bg-[#222] text-[#fff] py-2 px-7 mt-5 rounded-sm hover:bg-[#fff] hover:text-[#222] hover:text-[#222 hover:bg-[yellow] duration-700'>Shop Now</button>
                </div>
            </div>
 </Container>
        
 </Slider>
 </section>
  )
}

export default Banner
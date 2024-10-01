import React from 'react'
import Container from './Container'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <div onClick={onClick} className='h-[50px] w-[50px] bg-[yellow] rounded-[50%] absolute :top-[33%] top-[50%] :top-[140px] transform -translate-x-[50%] -translate-y-[50%] z-10 flex items-center justify-center left-[95%]' >
    <GrLinkNext/>
  </div>
);
}
function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <div
    onClick={onClick}
    className='h-[50px] w-[50px] bg-[yellow] rounded-[50%] absolute left-[5%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] z-10 flex items-center justify-center'>
    <GrLinkPrevious />
  </div>
    );
  }

const Banner = () => {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        centerPadding: "20px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
return (
    <Slider {...settings}>
    <section className=''>
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
    </section>
    <section className=''>
        <Container>
            <div className='bg-banner bg-center bg-cover bg-no-repeat h-[500px] w-full mt-10 relative'>
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
    </section>
    </Slider>
  )
}

export default Banner
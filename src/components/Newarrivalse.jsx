import React, { useContext } from 'react'
import Container from './Container'
import ArrivalComponents from './ArrivalComponents'
import { ApiData } from './ContextApi';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


function SampleNextArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="bg-[gray] h-[35px] w-[35px] rounded-[50%] absolute left-[2%] top-[50%] transform-translate-x-[50%] -translate-y-[50%] z-10 flex items-center justify-center left-[95%] hover:bg-[yellow] duration-300"
      onClick={onClick}
    ><FaArrowLeftLong/></div>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <div
      className="bg-[gray] h-[35px] w-[35px] rounded-[50%] absolute :top-[33%] top-[50%] :top-[140px] transform-translate-x-[50%] -translate-y-[50%] z-10 flex items-center justify-center left-[95%]  hover:bg-[yellow] duration-300"
      onClick={onClick}
    ><FaArrowRight/></div>
  );
}
const Newarrivalse = () => {
  const settings = {
    infinite: true,
    autoplay:true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  let data = useContext(ApiData)
  return (
    <div>
      <section className='pt-16'>
        <Container>
            <h2 className='text-[39px] font-bold text-[#262626] '>New Arrivals</h2>
            <Slider {...settings}>
            {data.map((item)=>(
            <Link to="/shop">
            <ArrivalComponents item={item}/>
            </Link>
            ))}
            </Slider>
        </Container>
      </section>
    </div>
  )
}

export default Newarrivalse

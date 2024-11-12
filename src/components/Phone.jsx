import React from 'react'
import Container from "../components/Container"
import Phones from "../assets/phones.jpg"
import Gori from "../assets/gori.jpg"
import Light from "../assets/light.jpg"
const Phone = () => {
  return (
    <section id='phones'>
    <Container>
        <div className="third flex pt-[130px] justify-between">
            <div className="w-[49%]">
                <img src={Phones}  alt="" />
            </div>
            <div className='w-[49%]'>
            <div className="w-full">
                <img src={Gori} alt="" />
            </div>
            <div className="w-full pt-7">
                <img src={Light} alt="" />
            </div>
            </div>
        </div>
    </Container>
    </section>
  )
}

export default Phone

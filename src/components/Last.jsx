import React from 'react'
import { Fa2 } from "react-icons/fa6";
import { TbBus } from "react-icons/tb";
import { FaRotateLeft } from "react-icons/fa6";
import Container from './Container'
const Last = () => {
  return (
    <section className=''>
        <Container>
        <div className='flex flex-col sm:flex-row items-center sm:items-start pt-10 gap-5'>
    <div className='w-full sm:w-1/3 flex gap-3 justify-center'>
        <Fa2 className='font-bold text-[20px]'/>
        <p className='text-[14px] font-semibold'>Two years warranty</p>
    </div>
    <div className='w-full sm:w-1/3 flex gap-3 justify-center'>
        <TbBus className='font-bold text-[20px]'/>
        <p className='text-[14px] font-semibold'>Free shipping</p>
    </div>
    <div className='w-full sm:w-1/3 flex gap-3 lg:justify-end justify-center'>
        <FaRotateLeft className='font-bold text-[20px]' />
        <p className='text-[14px] font-semibold'>Return policy in 30 days</p>
    </div>
</div>
</Container>
    </section>
  )
}

export default Last

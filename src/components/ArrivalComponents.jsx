
import { FaHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const ArrivalComponents = ({item}) => {
    
  return (
      <div className='!w-[97%] mx-3'>
        <div className=''>
            <div className='relative group overflow-hidden'>
                <img className="w-full" src={item.thumbnail} alt="" />
            <ul className='text-end bg-[white] py-1 absolute left-0 bottom-[-120px] w-full group-hover:bottom-[0px] h-[130px] duration-300 ease-in-out pr-4'>
                <li className='py-2'>Add to Wish List <FaHeart className='inline-block'/></li>
                <li  className='py-2'>Compare <IoMdGitCompare  className='inline-block'/></li>
                <li  className='py-2'>Add to Cart <FaShoppingCart  className='inline-block'/></li>
            </ul>
            </div>
        </div>
            <div className='flex justify-between pl-8'>
                <div className=''>
                    <h3  className='text-[16px] font-bold text-[#262626] '>{item.title}</h3>
                    <h5  className='text-[16px] font-normal text-[#262626] pt-3 '>{item.brand}</h5>
                </div>
                <p  className='text-[16px] font-bold text-[#262626] '>${item.price}</p>
            </div>
      </div>
  )
}

export default ArrivalComponents

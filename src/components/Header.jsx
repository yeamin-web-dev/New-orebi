import React, { useState } from 'react';
import logo from '../assets/logo.png'
import Container from './Container';
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='bg-white shadow-md'>
      <Container>
        <div className='flex items-center justify-between py-4'>
          <div className='w-1/4'>
            <img src={logo} alt="Logo" className='h-5' />
          </div>

          <div className='hidden md:block w-3/4'>
            <ul className='flex gap-[39px] justify-center'>
              <Link to='/'>
              <li className='text-[16px] font-sans font-semibold cursor-pointer'>Home</li>
              </Link>
              <Link to="/shop"><li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>Shop</li></Link>
              <li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>About</li>
              <li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>Contacts</li>
              <li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>Journal</li>
            </ul>
          </div>

          <div className='md:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className='md:hidden text-center bg-[red] text-[#fff] h-[220px] '>
            <ul className='flex flex-col gap-4 p-4'>
             <Link> <li className='text-[16px] font-sans font-semibold cursor-pointer'>Home</li></Link>
             <Link> <li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>Shop</li></Link>
              <li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>About</li>
              <li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>Contacts</li>
              <li className='text-[16px] font-sans hover:font-semibold cursor-pointer'>Journal</li>
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Header;

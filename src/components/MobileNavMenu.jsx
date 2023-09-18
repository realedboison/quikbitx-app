import { Link } from 'react-router-dom';
import Logo from '../assets/logo/qb-logo-black.svg';
import React from 'react';

const MobileNavMenu = ({ isOpen }) => {
  return (
    // <
    <div
      div
      className='rounded-[20px] bg-bgdarkest border-[3px] border-borderline flex flex-col items-center justify-center w-[300px] overflow-hidden z-[99] absolute top-[75px] right-[0px]'>
      <Link to='/'>
        <img
          className='w-14 h-14
        my-4'
          src={Logo}
          alt='nav logo'
        />
      </Link>
      <Link
        to='/'
        className='block py-4 uppercase outline outline-2 outline-bgdark text-white hover:text-secondary hover:bg-bgdark bg-bgdarkest w-full text-center font-semibold'>
        Home
      </Link>
      <Link
        to='/'
        className='block py-4 uppercase outline outline-2 outline-bgdark text-white hover:text-secondary hover:bg-bgdark bg-bgdarkest w-full text-center font-semibold '>
        Book Quotes
      </Link>
      <Link
        to='/'
        className='block py-4 uppercase outline outline-2 outline-bgdark text-white hover:text-secondary hover:bg-bgdark bg-bgdarkest w-full text-center font-semibold '>
        Masculinity
      </Link>
      <Link
        to='/'
        className='block py-4 uppercase outline outline-2 outline-bgdark text-white hover:text-secondary hover:bg-bgdark bg-bgdarkest w-full text-center font-semibold '>
        Proverbs
      </Link>
    </div>
  );
};

export default MobileNavMenu;

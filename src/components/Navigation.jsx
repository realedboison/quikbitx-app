import {
  useContext,
  useEffect,
  useState,
} from 'react';

import { BsBookmarkPlus } from 'react-icons/bs';
import { CardContext } from '../contexts/CardContext';
import { CgMenuRight } from 'react-icons/cg';
import { HiOutlineMenuAlt2 } from 'react-icons/Hi';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/qb-logo-black.svg';
import MobileNavMenu from '../components/MobileNavMenu';
import Sidebar from './Sidebar';
import { SidebarContext } from '../contexts/SidebarContext';

const Navigation = () => {
  const { isOpen, setIsOpen } = useContext(
    SidebarContext
  );
  const { itemAmount } = useContext(CardContext);

  const [isActive, setIsActive] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  // const { itemAmount } = useContext(CardContext);

  // const [isActive, setIsActive] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(
      'isMobileMenuOpen:',
      isMobileMenuOpen
    ); // Add this line for debugging
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80
        ? setIsActive(true)
        : setIsActive(false);
    });
  });

  return (
    <div className='w-full'>
      <header
        className={`${
          isActive
            ? 'bg-primary shadow-md rounded-b-3xl py-2'
            : 'bg-primary shadow-md rounded-b-3xl py-2'
          // mx-auto w-[1280px]
        } fixed z-10  main__wrapper  transition-all `}>
        {/* <h1 className='text-4xl font-extrabold text-green-700 text-center uppercase'>
          hey
        </h1> */}
        <div>
          <Sidebar />
        </div>
        <div className='flex justify-between items-center px-5'>
          <Link to={'/'}>
            <img
              src={Logo}
              alt='Logo'
              className='w-[50px] h-[50px]'
            />
          </Link>

          {/* menu */}
          <div className=' p-4  lg:block hidden'>
            <div className='flex gap-x-4'>
              <Link
                to='/'
                className='nav__btn--sm'>
                Home
              </Link>
              <Link
                to='/'
                className='nav__btn--sm'>
                Sports
              </Link>
              <Link
                to='/'
                className='nav__btn--md'>
                Proverbs
              </Link>
              <Link
                to='/'
                className='nav__btn--md'>
                Mindset
              </Link>
            </div>
          </div>

          <div className='flex gap-4 justify-between'>
            {/* bookmark logo */}
            <div className='flex items-end gap-x-6'>
              <div className='relative'>
                <div
                  onClick={() =>
                    setIsOpen(!isOpen)
                  }
                  className='text-secondary text-2xl cursor-pointer '>
                  <BsBookmarkPlus size={30} />
                </div>
                <div className='bg-secondary absolute rounded-full -right-1 text-[14px] font-semibold -top-3 w-[22px] h-[22px] text-white flex justify-center items-center'>
                  {itemAmount}
                </div>
              </div>
            </div>
          </div>
          {/* menu ends */}

          {/* MOBILE MENU ----- */}
          <div className=' lg:hidden flex'>
            <button
              onClick={handleMobileMenuClick}
              className={`cursor-pointer transition-opacity duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-100'
                  : 'opacity-90'
              }`}>
              <div className='text-secondary relative cursor-pointer'>
                {/* className='cursor-pointer'> */}
                <CgMenuRight size={55} />
              </div>
            </button>

            {/* Mobile Navigation */}
            <Link to=''>
              {isMobileMenuOpen && (
                <MobileNavMenu />
              )}
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;

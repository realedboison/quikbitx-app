import {
  useContext,
  useEffect,
  useState,
} from 'react';

import { CardContext } from '../contexts/CardContext';
import { HiOutlineMenuAlt2 } from 'react-icons/Hi';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { SidebarContext } from '../contexts/SidebarContext';

const Navigation = () => {
  const { isOpen, setIsOpen } = useContext(
    SidebarContext
  );
  const { itemAmount } = useContext(CardContext);

  const [isActive, setIsActive] = useState(false);

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
            ? 'bg-purple-600 shadow-md'
            : 'bg-purple-600'
          // mx-auto w-[1280px]
        } fixed   z-10  main__wrapper  transition-all `}>
        <h1 className='text-4xl font-extrabold text-green-700 text-center uppercase'></h1>
        <div>
          <Sidebar />
        </div>
        <div className='flex justify-between items-center p-3'>
          {/* <h1 className='text-2xl font-extrabold'>
            Quikbitx
          </h1> */}
          <div>
            <Link to={'/'}>
              <div>
                <div>Logo</div>
              </div>
            </Link>
          </div>
          {/* menu */}
          <div className='flex items-end gap-x-6'>
            {' '}
            <div className='relative'>
              <div className='cursor-pointer text-2xl'>
                🤍
              </div>
              <div className='bg-red-500 absolute rounded-full -right-1 text-[12px] -bottom-1 w-[18px] h-[18px] text-white flex justify-center items-center'>
                {itemAmount}
              </div>
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className='flex justify-end cursor-pointer relative'>
              <HiOutlineMenuAlt2 className='w-8 h-8 bg-green-200' />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;

import React, {
  useContext,
  useEffect,
  useRef,
} from 'react';

import { CardContext } from '../contexts/CardContext';
import CartItem from './CartItem';
import { FiTrash2 } from 'react-icons/fi';
import { IoMdArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(
    SidebarContext
  );

  const { card, clearCard, itemAmount } =
    useContext(CardContext);

  return (
    <div>
      <div
        className={`${
          isOpen ? 'top-0' : '-top-[100%]'
        }  bg-primary bg-opacity-80 h-full fixed shadow-2xl overflow-y-auto  transition-all duration-300 z-20 w-[82vw] xl:max-w-[40vw] md:w-[35vw] lg:w-[40vw] outline-primary outline-1 outline`}>
        <div className='flex items-center w-full justify-between  bg-bgdarker py-3 px-4 rounded-b-xl'>
          <div className='text-xl font-semibold uppercase text-lightgray'>
            Favorites
          </div>

          <div
            onClick={handleClose}
            className='cursor-pointer bg-primary w-10 h-10 rounded-md flex justify-center items-center'>
            <IoMdArrowUp className='text-3xl text-secondary  ' />
          </div>
        </div>
        <div>
          {card.map((item) => {
            return (
              <CartItem
                item={item}
                key={item.id}
              />
            );
          })}
          {/*  */}
        </div>
        <div>
          <div>
            <div className=' px-4 pb-4 mt-4 text-white'>
              <Link
                to='/'
                onClick={clearCard}
                className='cursor-pointer flex justify-between p-2 bg-secondary rounded-lg'>
                <div className='flex bg-bgdark rounded-md'>
                  <span className='mx-2 uppercase text-xs lg:text-base '>
                    Total Cards
                  </span>
                  <div className='lg:w-7 lg:h-7 w-4 h-4 bg-lightgray text-black text-center rounded-md font-bold text-xs lg:text-base'>
                    {itemAmount}
                  </div>
                </div>
                <div className='flex items-center gap-x-2'>
                  <p className='uppercase font-bold text-xs lg:text-base'>
                    clear cards
                  </p>
                  <FiTrash2 className='lg:text-md text-sm' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

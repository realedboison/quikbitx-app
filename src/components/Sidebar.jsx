import React, { useContext } from 'react';

import Card from './Card';
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

  const { card } = useContext(CardContext);
  // const {} = useContext(CardContext);
  // console.log(useContext(CardContext));

  console.log('SIDEBAR');
  return (
    <div>
      <div
        className={`${
          isOpen ? 'top-0' : '-top-[100%]'
        }  bg-green-300 bg-opacity-75 h-full fixed shadow-2xl overflow-y-auto  transition-all duration-300 z-20 w-[70vw] xl:max-w-[35vw] md:w-[35vw] lg:w-[35vw] `}>
        <div className='flex items-center w-full justify-between  bg-green-600 py-3 px-4'>
          <div className='text-md font-semibold uppercase'>
            Favorites (0)
          </div>
          {/* ICON */}
          <div
            onClick={handleClose}
            className='cursor-pointer bg-green-300 w-8 h-8 flex justify-center items-center'>
            <IoMdArrowUp className='text-2xl' />
          </div>
        </div>
        <div>
          {card.map((item) => {
            // return <div>{item.description}</div>;
            return (
              <CartItem
                item={item}
                key={item.id}
              />
            );
          })}
          {/*  */}
          {console.log(card)}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

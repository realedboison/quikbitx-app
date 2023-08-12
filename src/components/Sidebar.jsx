import React, { useContext } from 'react';

import { FiTrash2 } from 'react-icons/fi';
import { IoMdArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';

function Sidebar() {
  const { isOpen, handleClose } = useContext(
    SidebarContext
  );

  return (
    <div>
      <div
        className={`${
          isOpen ? 'top-0' : '-top-[100%]'
        } bg-green-300 fixed h-full shadow-2xl   transition-all duration-300 z-20  w-[400px] xl:max-w-[30vw] md:w-[35vw] lg:px-[35px] `}>
        <div className='flex items-center justify-between bg-yellow-600 py-3  px-4'>
          <div className='text-md font-semibold uppercase'>
            Favorites (0)
          </div>
          {/* ICON */}
          <div
            onClick={handleClose}
            className='cursor-pointer bg-green-200 w-8 h-8 flex justify-center items-center'>
            <IoMdArrowUp className='text-2xl' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

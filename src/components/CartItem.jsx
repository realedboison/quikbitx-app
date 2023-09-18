import React, { useContext } from 'react';

import { CardContext } from '../contexts/CardContext';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

// REMOVE ICON IMPORT HERE

const CartItem = ({ item }) => {
  const { removeFromFavorite } =
    useContext(CardContext);
  // const { description, author, categories } =
  //   item;

  return (
    <div className='flex mx-4  '>
      <div className='w-full min-h-[100px] rounded-2xl border border-primary bg-bgdark text-white mt-4 p-4   '>
        <div className='text-base italic'>
          {item.description}
        </div>

        <div className='py-4 font-bold'>
          <Link to={`/card/${item.id}`}>
            {item.author}
          </Link>
          {/* REMOVE ITEM*/}
          <div>{/* logo here */}</div>
        </div>

        <div className='flex justify-between items-center'>
          <Link to={`/card/${item.id}`}>
            <div className='uppercase font-bold text-secondary text-sm mt-2'>
              {item.categories.join(', ')}
            </div>
          </Link>
          <div className='flex items-center'>
            {/* <div className='cursor-pointer'></div> */}
            {/* REMOVE */}
            <div
              onClick={() =>
                removeFromFavorite(item.id)
              }
              className='ml-2 cursor-pointer'>
              <FiTrash2 className='lg:text-lg text-sm text-secondary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

import React, { useContext } from 'react';

import { CardContext } from '../contexts/CardContext';
import { Link } from 'react-router-dom';

// REMOVE ICON IMPORT HERE

const CartItem = ({ item }) => {
  const { removeFromFavorite } =
    useContext(CardContext);
  // const { description, author, categories } =
  //   item;

  return (
    <div className='flex mx-4 '>
      <div className='w-full min-h-[100px] bg-zinc-200 mt-4 p-4   '>
        <div className='text-md italic'>
          {item.description}
        </div>

        <div className='py-2'>
          <Link to={`/card/${item.id}`}>
            {item.author}
          </Link>
          {/* REMOVE ITEM*/}
          <div>{/* logo here */}</div>
        </div>

        <div className='flex justify-between items-center'>
          <Link to={`/card/${item.id}`}>
            <div className='uppercase font-bold  '>
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
              ✖{/* REMOVE ICON */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

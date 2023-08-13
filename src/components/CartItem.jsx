import { Link } from 'react-router-dom';
import React from 'react';

const CartItem = ({ item }) => {
  const { description, author, categories } =
    item;

  return (
    <div className='flex p-5'>
      <div className='w-full min-h-[100px] '>
        <div className='text-md'>
          {item.description}
        </div>
        <Link to={`/card/${item.id}`}>
          <div className='uppercase font-bold  '>
            {item.categories.join('    ')}
          </div>
        </Link>
        <div>
          {/* REMOVE ICON */}
          <div>
            <Link to={`/card/${item.id}`}>
              {item.author}
            </Link>
            {/* REMOVE ITEM*/}
            <div>{/* logo here */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

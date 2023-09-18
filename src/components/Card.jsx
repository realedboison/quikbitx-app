import { CardContext } from '../contexts/CardContext';
import { Link } from 'react-router-dom';
import { MdAddCircle } from 'react-icons/md';
import { useContext } from 'react';

// import React from 'react';

const Card = ({ item }) => {
  const { addToFavorite } =
    useContext(CardContext);

  // console.log({  addToFavorite });

  return (
    <div className='p-5 md:p-10 text-base xl:text-lg bg-bgdark border-line flex flex-col justify-between rounded-3xl text-white'>
      {/* CARD */}
      <div className='italic'>
        {item.description}
      </div>
      <div>
        <div className='my-5 text-sm lg:text-base font-bold'>
          {item.author}
        </div>
        {/* TAGS */}
        {/* Render single category */}
        {item.categories &&
          item.categories.length === 1 && (
            //
            <div
              key={item.id}
              to='/'
              onClick={() =>
                addToFavorite(item, item.id)
              }>
              <div>
                {/* text-sm lg:text-lg md:text-base */}
                <div className='cursor-pointer flex items-center text-xs justify-between gap-2 bg-primary w-[220px] p-1 lg:w-[300px]  rounded-xl hover:bg-primarydark'>
                  <div className='uppercase text-secondary bg-bgdark px-3 py-1 rounded-md font-extrabold'>
                    {item.categories[0]}
                  </div>

                  <div>
                    <MdAddCircle
                      size={20}
                      className='text-secondary'
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* Render multiple categories (if exists) */}
        {item.categories &&
          item.categories.length > 1 && (
            <div
              key={item.id}
              to='/'
              onClick={() =>
                addToFavorite(item, item.id)
              }>
              <div className='flex-wrap flex items-center gap-2 '>
                {item.categories.map(
                  (category) => (
                    // text-sm lg:text-lg md:text-base
                    <div
                      key={category}
                      className='cursor-pointer mr-6 text-xs uppercase flex items-center justify-between gap-2 bg-primary w-[220px] lg:w-[300px]  p-1 rounded-xl hover:bg-primarydark'>
                      <span className='uppercase text-secondary bg-bgdark px-3 py-1 rounded-lg font-extrabold'>
                        {category}
                      </span>

                      <div>
                        <MdAddCircle
                          size={20}
                          className='text-secondary'
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Card;

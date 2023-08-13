import { CardContext } from '../contexts/CardContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Card = ({ item }) => {
  const { addToFavorite } =
    useContext(CardContext);

  console.log({ addToFavorite });

  return (
    <div className='p-10 bg-yellow-200'>
      {/* CARD */}
      <div className='my-5 italic'>
        {item.description}
      </div>
      <div className='mb-5'>{item.author}</div>
      {/* TAGS */}
      {/* Render single category */}
      {item.categories &&
        item.categories.length === 1 && (
          <div className='flex items-center gap-8'>
            <div className='uppercase'>
              {item.categories[0]}
            </div>
            {/* console.log(item.category) */}
            <div>
              <Link
                key={item.id}
                to='/'
                onClick={() =>
                  addToFavorite(item, item.id)
                }>
                {/* LINK */}
                <span className='uppercase text-green-500 bg-yellow-400 mr-2'>
                  add to favorite
                </span>
              </Link>
            </div>
          </div>
        )}

      {/* Render multiple categories (if exists) */}
      {item.categories &&
        item.categories.length > 1 && (
          <div className='flex-wrap flex items-center gap-5'>
            {item.categories.map((category) => (
              <div
                key={category}
                className='mr-6 uppercase'>
                <span className='mr-2 '>
                  {category}
                  <Link
                    key={item.id}
                    to='/'
                    onClick={() =>
                      addToFavorite(item, item.id)
                    }>
                    {/* LINK */}
                    <span className='text-red-400 ml-6 bg-yellow-400'>
                      add to favorite
                      <span
                      //  className={` text-${
                      // item.isFavorite
                      // ? 'red'
                      // : 'black'
                      // }`}
                      >
                        {/* {item.isFavorite
                          ? '❤'
                          : '🤍'} */}
                      </span>
                    </span>
                  </Link>
                </span>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

// export default Card;
//           </div>
//         )}
//     </div>
//   );
// };

export default Card;

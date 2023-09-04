import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { BiSearch } from 'react-icons/bi';
import Card from '../components/Card';
import { CardContext } from '../contexts/CardContext';
import { Link } from 'react-router-dom';
import MainLogo from '../assets/logo/qb-logo-red-full.svg';
import Navigation from '../components/Navigation';
import { data } from '../data';

// IMPORT PRODUCT CONTEXT

// import Search from '../components/Search';

function includesSearchTerm(item, search) {
  // ... (rest of the code)
  if (!search) {
    return false;
  }

  const searchTerm = search.toLowerCase();
  const { description, author, categories } =
    item;
  const lowerCaseDescription =
    description.toLowerCase();
  const lowerCaseAuthor = author.toLowerCase();

  return (
    lowerCaseDescription.includes(searchTerm) ||
    lowerCaseAuthor.includes(searchTerm) ||
    (Array.isArray(categories) &&
      categories.some((category) =>
        category
          .toLowerCase()
          .includes(searchTerm)
      ))
  );
}

function Homepage() {
  // GET CARDS FROM CARD CONTEXT
  const { card } = useContext(CardContext);
  console.log(card);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] =
    useState('');

  // ... (rest of the code)
  const handleSearchChange = useCallback(
    (e) => {
      setDebouncedSearch(e.target.value);
    },
    [setDebouncedSearch]
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearch(debouncedSearch);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [debouncedSearch]);

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        includesSearchTerm(item, search)
      ),
    [search]
  );
  console.log(filteredData);

  return (
    <div className='bg-bgdarkest min-h-screen'>
      <div className='main__wrapper '>
        <Navigation />
        <div className='bg-bgdark rounded-3xl'>
          <div className='pt-[110px] pb-[15px] bg-bgdark'>
            <div className='grid place-items-center'>
              <Link to='/'>
                <img
                  src={MainLogo}
                  alt=''
                  className='w-[200px]'
                />
              </Link>
            </div>
          </div>
          {/* SEARCH */}
          {/* <Search /> */}
          <div className='p-5 bg-primary mb-10 rounded-3xl overflow-hidden relative'>
            <input
              type='search'
              className='w-full p-2 rounded-xl custom-placeholder search-input text-white '
              placeholder='search quotes'
              onChange={handleSearchChange}
            />
            {/* lg:left-[130px] xl:left-[140px] left-[55px] top-[210px] */}
            <div className=' text-lightgray absolute left-[40px] top-[35px]'>
              <BiSearch size={20} />
            </div>
          </div>
        </div>
        {/* RENDER RESULTS */}
        {/* grid-cols-1 md:grid-cols-1 */}
        <div className='w-full gap-10 grid  lg:grid-cols-2 pb-10'>
          {filteredData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;

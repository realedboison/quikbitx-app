import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import Card from '../components/Card';
import { CardContext } from '../contexts/CardContext';
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
  const { cards } = useContext(CardContext);
  console.log(cards);

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
    <div className='main__wrapper'>
      <Navigation />
      <div className='main'>playground</div>
      {/* SEARCH */}
      {/* <Search /> */}
      <div className='p-5 bg-purple-600 mb-10'>
        <input
          type='search'
          className='w-full p-2'
          placeholder='search quotes'
          onChange={handleSearchChange}
        />
      </div>
      {/* RENDER RESULTS */}
      <div className='w-full gap-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10'>
        {filteredData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;

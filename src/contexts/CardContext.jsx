import {
  createContext,
  useEffect,
  useState,
} from 'react';

import { data } from '../data';

// CREATE CONTEXT
export const CardContext = createContext();

const CardProvider = ({ children }) => {
  //PRODUCT STATE
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // const fetchCards = async () => {
    //   const response = await fetch('../data.js');
    //   const data = await response.json();
    //   console.log(data);
    // };
    // fetchCards();
    setCards(data);
    console.log(data);
  }, []);

  return (
    <CardContext.Provider value={{ cards }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;

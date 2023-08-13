import {
  createContext,
  useEffect,
  useState,
} from 'react';

// CREATE CONTEXT
export const CardContext = createContext();

const CardProvider = ({ children }) => {
  //PRODUCT STATE
  const [card, setCard] = useState([]);

  console.log(card);

  const addToFavorite = (item, itemId) => {
    const newItem = { ...item };
    // CHECK IF ITEM IS ALREADY IN THE CART
    const cartItem = card.find((item) => {
      return item.itemId === itemId;
    });
    if (cartItem) {
      const newCart = [...card].map((item) => {
        if (item.itemId === itemId) {
          return { ...(item + 1) };
        } else {
          return item;
        }
      });
      setCard(newCart);
    } else {
      setCard([...card, newItem]);
    }
    // console.log(card);
    // console.log(itemId);

    // console.log(newItem);
    // console.log(cartItem);
    // console.log(
    //   `${item.categories} added to favorite`
    // );
  };

  return (
    // { card }
    <CardContext.Provider
      value={{
        addToFavorite,
        card,
      }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;

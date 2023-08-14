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

  const [itemAmount, setItemAmount] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = card.reduce(
      (accumulator, currentItem) => {
        // Replace `someValue` with the appropriate value associated with each item
        const addedValue = 1; // Replace with the actual value you need
        return (
          accumulator +
          currentItem.amount * addedValue
        );
      },
      0
    );
    setTotal(total);
  });

  useEffect(() => {
    if (card && card.length > 0) {
      const amount = card.reduce(
        (accumulator, currentItem) => {
          const currentAmount =
            typeof currentItem.amount === 'number'
              ? currentItem.amount
              : 0;
          return accumulator + currentAmount;
        },
        0
      );
      setItemAmount(amount);
    } else {
      setItemAmount(0);
    }
  }, [card]);

  const addToFavorite = (item, itemId) => {
    // CHECK IF ITEM IS ALREADY IN THE CART
    const cartItem = card.find((cartItem) => {
      return cartItem.itemId === itemId;
    });

    if (cartItem) {
      const newCart = card.map((cartItem) => {
        if (cartItem.itemId === itemId) {
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          }; // Increase the amount
        } else {
          return cartItem;
        }
      });
      setCard(newCart);
    } else {
      const newItem = {
        ...item,
        itemId,
        amount: 1,
      }; // Add the itemId and initial amount
      setCard([...card, newItem]);
    }
  };

  // ADD TO CART
  // const addToFavorite = (item, itemId) => {
  //   const newItem = { ...item };
  //   // CHECK IF ITEM IS ALREADY IN THE CART
  //   const cartItem = card.find((item) => {
  //     return item.itemId === itemId;
  //   });
  //   if (cartItem) {
  //     const newCart = [...card].map((item) => {
  //       if (item.itemId === itemId) {
  //         return { ...(item + 1) };
  //       } else {
  //         return item;
  //       }
  //     });
  //     setCard(newCart);
  //   } else {
  //     setCard([...card, newItem]);
  //   }
  // };

  // console.log(card);
  // console.log(itemId);

  // console.log(newItem);
  // console.log(cartItem);
  // console.log(
  //   `${item.categories} added to favorite`
  // );

  // REMOVE FROM CART
  const removeFromFavorite = (itemId) => {
    const newCard = card.filter((item) => {
      return itemId !== item.id;
    });
    setCard(newCard);
  };

  // CLEAR CARDS
  const clearCard = () => {
    setCard([]);
  };

  return (
    // { card }
    <CardContext.Provider
      value={{
        addToFavorite,
        card,
        removeFromFavorite,
        clearCard,
        itemAmount,
        total,
      }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;

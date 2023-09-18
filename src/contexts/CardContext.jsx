import {
  createContext,
  useEffect,
  useState,
} from 'react';

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load from local storage on component mount
    const storedCard =
      JSON.parse(localStorage.getItem('card')) ||
      [];
    setCard(storedCard);
    console.log(storedCard);

    const total = storedCard.reduce(
      (accumulator, currentItem) => {
        const addedValue = 1; // Replace with the actual value you need
        return (
          accumulator +
          currentItem.amount * addedValue
        );
      },
      0
    );
    setTotal(total);
  }, []); // Empty dependency array to only load from local storage once

  useEffect(() => {
    // Save to local storage whenever 'card' changes
    localStorage.setItem(
      'card',
      JSON.stringify(card)
    );

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
  }, [card]); // Update local storage whenever 'card' changes

  const addToFavorite = (item, itemId) => {
    const existingItemIndex = card.findIndex(
      (cartItem) => cartItem.itemId === itemId
    );

    if (existingItemIndex !== -1) {
      const updatedCard = card.map(
        (cartItem, index) => {
          if (index === existingItemIndex) {
            return {
              ...cartItem,
              // amount: cartItem.amount + 1,
            };
          } else {
            return cartItem;
          }
        }
      );
      setCard(updatedCard);
    } else {
      const newItem = {
        ...item,
        itemId,
        amount: 1,
      };
      setCard([...card, newItem]);
    }
  };

  const removeFromFavorite = (itemId) => {
    const newCard = card.filter((item) => {
      return itemId !== item.id;
    });
    setCard(newCard);
  };

  const clearCard = () => {
    setCard([]);
  };

  return (
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

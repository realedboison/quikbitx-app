import {
  createContext,
  useEffect,
  useState,
} from 'react';

// CREATE CONTEXT
export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useState([]);
  return (
    <FavoriteContext.Provider
      value={'this is the favorite context'}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

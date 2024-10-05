import React, { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import ShoppingPage from './Pages/ShoppingPage';

export const CartContext = createContext()

const App = () => {

  const [cartList, setCartList] = useState([])

  return (
    <div>
      <CartContext.Provider value={{cartList,setCartList}} >
      <ShoppingPage />
      </CartContext.Provider>

      <Toaster position='top-right' />
    </div>
  );
}

export default App;

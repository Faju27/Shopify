import React from 'react';
import { Toaster } from 'react-hot-toast';
import ShoppingPage from './Pages/ShoppingPage';
import { CartProvider } from './Provider/CartProvider';


const App = () => {


  return (
    <div>
      <CartProvider>
       <ShoppingPage/>
      </CartProvider>
      <Toaster position='top-right' />
    </div>
  );
}

export default App;

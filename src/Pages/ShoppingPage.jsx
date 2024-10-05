import React, { Fragment, useContext, useState } from 'react';
import { products } from '../constant/Products';
import ProductList from '../Components/ProductList';
import Modal from '../Components/Modal';
import NavBar from '../Components/NavBar';
import { CartContext } from '../App';

const ShoppingPage = () => {

    const [selectedProduct, setSelectedProduct] = useState(null)
    const {cartList} = useContext(CartContext)
    

    return (
        <Fragment>
            <NavBar /><br />
            <div className='d-flex flex-wrap gap-5 justify-content-center'>
                {
                    products.map((product) => {
                        return <ProductList 
                        product={product}
                        key={product.id}
                        setSelectedProduct={setSelectedProduct} />
                    })
                }
            </div>
            <div>
                {
                    selectedProduct && <Modal 
                    selectedProduct ={selectedProduct} 
                    setSelectedProduct={setSelectedProduct}
                   />
                }
            </div>
            <div className='text-center mt-5 mx-1 px-4' id='cart'>
                <h3>CART</h3>
                <div className='d-flex gap-1 flex-wrap'>
                    {
                        cartList.map((product) => {
                            return <ProductList 
                            product={product}
                            key={product.id} 
                            cart={true}
                            />
                        })
                    }
                </div>

            </div>
        </Fragment>
    );
}

export default ShoppingPage;

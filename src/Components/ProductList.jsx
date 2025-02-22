import React from 'react';
import { IoMdCart } from 'react-icons/io';
import toast from 'react-hot-toast'
import { useCart } from '../Hooks';

const ProductList = ({ product, setSelectedProduct,cart}) => {

    const {cartList, setCartList} = useCart()
console.log(product);
    const handleAddToCart = () => {
        const exist = cartList.find((Element) => {
            return console.log(Element.id),
            console.log(product.id)
        })
        if (exist) {
            const res = cartList.map((Element) => {
                if (Element.id == product.id) {
                    return {
                        ...Element,
                        quantity: Element.quantity + 1,
                        totalPrice: ((Element.price - (Element.price * Element.discountPercentage/100))) * (Element.quantity + 1)
                    }
                    
                }
                return Element
            })
            setCartList(res)
        }else {
            product.quantity = 1
            product.totalPrice = product.price - (product.price * product.discountPercentage/100)
            setCartList([product,...cartList]) //to display
        }
        return toast.success('Product added to cart ') //to alert message
    }

    const handleQtyUpdate = (operator) => {
        if (product.quantity == 1 && operator == '-') {
            return removeCartProduct()
        }
        const response = cartList.map((Element) => {
            if (Element.id == product.id) {
                return {
                    ...Element,
                    quantity: operator == "+" ? Element.quantity + 1 : Element.quantity - 1,
                    totalPrice:(Element.price - (Element.price * Element.discountPercentage/100)) * (operator == "+" ? Element.quantity +1 : Element.quantity -1)
                }
            }
            return Element
        })
        setCartList(response)
    }

    const removeCartProduct = () => {
        const response = cartList.filter(Element => Element.id != product.id)
        setCartList(response)
        return toast.success('Product removed from cart')
    }

    return (
        <div className='p-3 border border-dark text-center rounded-3' style={{width:'15rem', cursor:'pointer'}}>
            <div onClick={() => setSelectedProduct(product)}>
                <img src={product.images[0]} alt={product.title} style={{height:'250px',width:'100%'}}/>
            </div>
            <div  onClick={() => setSelectedProduct(product)}>
                <h5 className='text-truncate'>{product.title}</h5>
                <p className='text-truncate'>{product.description}</p>
            </div>
                {
                    !cart &&
                    <div className='d-flex gap-2 justify-content-between' >
                        <div style={{color:'black'}}>
                            <span className='mx-2 ' style={{color:'red'}}> <s>Rs {product.price}</s></span>
                            <span>Rs {(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</span>
                        </div>
                        <div style={{color:'green'}}>{product.discountPercentage}%</div>
                    </div>
                }
                {
                    cart && 
                        <div>
                            <div> Price : {product.totalPrice.toFixed(2)}</div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <button onClick={() => handleQtyUpdate("-")} style={{height: "30px", width: "30px"}} className='border-1 bg-primary rounded-1'>- </button>
                                    <div> {product.quantity}  </div>
                                    <button onClick={() => handleQtyUpdate("+")} style={{height: "30px", width: "30px"}} className='border-1 bg-primary rounded-1'>+</button>
                                </div>
                            </div>
                }
                            <div>
                                { cart ? <button className='btn btn-outline-danger w-100 mt-3' onClick={removeCartProduct}><IoMdCart size={20}/> Remove from Cart</button>
                                    : <button className='btn btn-outline-success w-100 mt-3' onClick={handleAddToCart}><IoMdCart size={20}/> Add to Cart</button>
                            }
                            </div>
                        </div>
    );
}

export default ProductList;

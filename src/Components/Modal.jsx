import React from 'react';
import { IoMdClose } from 'react-icons/io'

const Modal = ({selectedProduct,setSelectedProduct}) => {
    return (
        <div className='position-fixed h-100 w-100 top-0 start-0 bg-light d-flex p-5 overflow-y-scroll'>
            <div className='border border-1 align-content-center h-75'>
                <img src={selectedProduct.images[0]} alt={selectedProduct.title} style={{width:'400px'}}/>
            </div>
            <IoMdClose size={40} className='position-absolute top-0 end-0' onClick={() => setSelectedProduct(null)}/>
            <div className='w-50 px-5'>
                <h4 className='border-bottom border-black py-3'><b>{selectedProduct.title}</b></h4>
                <p><span className='text-success fw-bold'> -{selectedProduct.discountPercentage} % off</span><span className='ms-3 fw-bold'>Rs  {(selectedProduct.price - (selectedProduct.price * selectedProduct.discountPercentage/100)).toFixed(2)} /- </span></p>
                <p style={{fontSize:'12px',fontWeight:'bold',color:'grey'}}>M.R.P : <span>Rs <s className='text-danger'> {selectedProduct.price} </s> /-</span></p>
                <div><b>Rating :</b>{setSelectedProduct.rating} </div>
                <div className='border-bottom border-top py-3' style={{lineHeight:'10px'}}>
                    <h5 className='mb-4'><b>Product Details</b></h5>
                    <div className='d-flex gap-5'>
                        <div>
                            <p><b>Brand : </b></p>
                            <p><b>Category : </b></p>
                            <p><b>Stock Status : </b></p>
                            <p><b>Tags : </b></p>
                        </div>
                        <div>
                            <p>{selectedProduct.brand}</p>
                            <p>{selectedProduct.category} </p>
                            <p>{selectedProduct.stock} <span className='text-danger'>left</span></p>
                            <p> {selectedProduct.tags} </p>
                        </div>
                    </div>
                </div>
                <div  className='border-bottom py-3'>
                    <h5><b>Details</b></h5>
                    <p className='lh-sm'>{selectedProduct.description}</p>
                </div>
                <div className='border-bottom py-3' style={{lineHeight:'10px'}}>
                    <h5><b>About This Item</b></h5>
                    <p><b>Warrenty : </b> {selectedProduct.warrantyInformation} </p>
                    <p><b>Shipping Information :</b> {selectedProduct.shippingInformation} </p>
                    <p><b>Availability : </b> {selectedProduct.availabilityStatus} </p>
                    <p><b>Return Policy :</b> {selectedProduct.returnPolicy} </p>
                </div>
                <div className='border-bottom py-3 w-75 gap-3 d-flex flex-column'>
                    <h6><b>Reviews</b></h6>
                    <div className='border-2 border border-black px-3 pt-3'> 
                        <p><b> {selectedProduct.reviews[0].comment} </b></p>
                        <div>
                        <p style={{color:'grey'}} className='text-end'><b> -{selectedProduct.reviews[0].reviewerName} </b></p>
                        </div>
                        <p> Date : <span style={{color:'grey'}}> {selectedProduct.reviews[0].date.slice(0,10)} </span></p>
                    </div>
                    <div className='border-2 border border-black px-3 pt-3'> 
                        <p><b> {selectedProduct.reviews[1].comment} </b></p>
                        <div>
                        <p style={{color:'grey'}} className='text-end'><b> -{selectedProduct.reviews[1].reviewerName} </b></p>
                        </div>
                        <p> Date : <span style={{color:'grey'}}> {selectedProduct.reviews[1].date.slice(0,10)} </span></p>
                    </div>
                    <div className='border-2 border border-black px-3 pt-3'> 
                        <p><b> {selectedProduct.reviews[2].comment} </b></p>
                        <div>
                        <p style={{color:'grey'}} className='text-end'><b> -{selectedProduct.reviews[2].reviewerName} </b></p>
                        </div>
                        <p> Date : <span style={{color:'grey'}}> {selectedProduct.reviews[2].date.slice(0,10)} </span></p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Modal;

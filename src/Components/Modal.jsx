import React from 'react';
import { IoMdClose } from 'react-icons/io'


const Modal = ({selectedProduct,setSelectedProduct}) => {
    return (
        <div className='position-fixed h-100 w-100 top-0 start-0 bg-danger text-center'>
            <div>
                <img src={selectedProduct.images[0]} alt={selectedProduct.title} style={{width:'500px'}}/>
            </div>
            <IoMdClose size={40} className='position-absolute top-0 end-0' onClick={() => setSelectedProduct(null)}/>
            <div>
                <h5>{selectedProduct.title}</h5>
                <h6 className='text-success'>Brand : {selectedProduct.brand}</h6>
                <p>{selectedProduct.description}</p>
            </div>
        </div>
    );
}

export default Modal;

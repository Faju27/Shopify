import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import {} from 'react-icons';
import { IoMdCart, IoMdHeart } from 'react-icons/io';
import { useCart } from '../Hooks';

const NavBar = () => {

    const {cartList} = useCart()
    

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home" className='fw-bolder fs-1'>Shopify</Navbar.Brand>
                    <div className='d-flex'>
                        <div className='mx-2'><IoMdHeart size={30} /></div>
                        <a href="#cart">
                        <div className='mx-2 position-relative'>
                            <IoMdCart size={30}  fill='black'/>
                            <div className='position-absolute' style={{top:'-15px', left:'25px', color:'red'}}> {cartList.length} </div>
                        </div>
                        </a>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;

// jshint esversion: 9

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import '../Header.css'; 
import { Image } from 'react-bootstrap';



function Header() {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar className='header1' variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <Image src='https://res.cloudinary.com/dt4sw7qtl/image/upload/v1711908733/vubiuc2abkkyj3z5me6v.png' style={{ height: '60px', width: 'auto' }}></Image>
                    </Navbar.Brand>



                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />
                        <Nav className="wrapper custom-navbar">
                            <Nav.Link className='whiteIcon' as={NavLink} to="/cart">
                                <i className="fas fa-shopping-cart"></i>Cart
                            </Nav.Link>

                            {userInfo ? (
                                <NavDropdown  title={userInfo.name} id="username">
                                    <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link className='whiteIcon' as={NavLink} to="/login">
                                    <i className="fas fa-user"></i>Login
                                </Nav.Link>
                            )}

                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title="Admin" id="adminmenue">
                                    <NavDropdown.Item as={NavLink} to="/admin/userlist">Users</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/admin/productlist">Products</NavDropdown.Item>
                                    <NavDropdown.Item as={NavLink} to="/admin/orderlist">Orders</NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;









import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { NavContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'


function Header() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <NavLink to='/' className="navbar-brand">
                        BuySmart
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <NavLink to='/cart' className="nav-link">
                                <i className='fas fa-shopping-cart'></i>Cart
                            </NavLink>



                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <NavDropdown.Item as={NavLink} to='/profile'>Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to='/login'>
                                        <i className="fas fa-user"></i>Login
                                    </Nav.Link>
                                </Nav.Item>
                            )}








                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;

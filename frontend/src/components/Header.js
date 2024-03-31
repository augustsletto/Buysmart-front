import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import SearchBox from './SearchBox';
import { logout } from '../actions/userActions';
import '../Header.css'; // Import custom CSS for styling

function Header() {
    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={NavLink} to="/">ProShop</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox />
                        <Nav className="wrapper custom-navbar">
                            <Nav.Link className='icon' as={NavLink} to="/cart">
                                <i className="fas fa-shopping-cart"></i>Cart
                            </Nav.Link>

                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id="username">
                                    <NavDropdown.Item as={NavLink} to="/profile">Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link as={NavLink} to="/login">
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

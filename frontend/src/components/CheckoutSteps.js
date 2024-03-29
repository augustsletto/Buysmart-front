import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-bootstrap'

function CheckoutSteps({ step1, step2, step3, step4 }) {

    return (
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1 ? (
                    <NavLink to='/login'>
                        Login
                    </NavLink>
                ) : (
                    <NavLink disabled>Login</NavLink>
                )}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <NavLink to='/shipping'>
                        Shipping
                    </NavLink>
                ) : (
                    <NavLink disabled>Shipping</NavLink>
                )}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <NavLink to='/payment'>
                        Payment
                    </NavLink>
                ) : (
                    <NavLink disabled>Payment</NavLink>
                )}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <NavLink to='/placeorder'>
                        Place Order
                    </NavLink>
                ) : (
                    <NavLink disabled>Place Order</NavLink>
                )}
            </Nav.Item>
        </Nav>
    )
}

export default CheckoutSteps
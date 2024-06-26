// jshint esversion: 9
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FormContainer({ children }) {
    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col cs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}

export default FormContainer
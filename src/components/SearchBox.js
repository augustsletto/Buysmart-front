// jshint esversion: 9
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


function SearchBox() {
    const [keyword, setKeyword] = useState('');

    let history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`);
        } else {
            history.push(history.push(history.location.pathname));
        }
    };



    return (
        <Form onSubmit={submitHandler} className="search-container">
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='search-input'
            />

            <Button
                type='submit'
                variant='primary'
                className='m-2'
            >
                Submit
            </Button>
        </Form>

    )
}

export default SearchBox
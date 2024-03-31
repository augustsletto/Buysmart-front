
// jshint esversion: 9
import React from 'react';
import { Pagination } from 'react-bootstrap';


function Paginate({ pages, page, keyword = '', isAdmin = false }) {
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0];
    }

    const handlePaginationClick = (pageNumber) => {
        window.location.href = !isAdmin ?
            `/?keyword=${keyword}&page=${pageNumber}`
            : `/admin/productlist/?keyword=${keyword}&page=${pageNumber}`;
    };

    return (
        pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <Pagination.Item
                        key={x + 1}
                        active={x + 1 === page}
                        onClick={() => handlePaginationClick(x + 1)}
                        style={{
                            backgroundColor: x + 1 === page ? 'black' : 'grey',
                            color: x + 1 === page ? 'white' : 'black',
                        }}
                    >
                        {x + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        )
    );
}

export default Paginate;

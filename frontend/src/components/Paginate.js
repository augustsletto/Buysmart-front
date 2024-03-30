import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Paginate({ pages, page, keyword = '', isAdmin = false }) {
    if (keyword) {
        keyword = keyword.split('?keyword=')[1].split('&')[0];
    }
   

    return (
        pages > 1 && (
            <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <Pagination.Item
                        key={x + 1}
                        active={x + 1 === page}
                    >
                        <Link
                            to={!isAdmin ?
                                `/?keyword=${keyword}&page=${x + 1}`
                                : `/admin/productlist/?keyword=${keyword}&page=${x + 1}`
                            }
                        >
                            {x + 1}
                        </Link>
                    </Pagination.Item>
                ))}
            </Pagination>
        )
    );
}

export default Paginate;

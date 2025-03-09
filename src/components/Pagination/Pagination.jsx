import React from 'react';
import "./Pagination.scss";

const Pagination = ({ noOfBlogs, paginateHandler }) => {
    const noOfPages = Math.ceil(noOfBlogs / 6);

    return (
        <nav className="pagination" aria-label="Pagination">
            {[...Array(noOfPages)].map((_, idx) => (
                <button
                    type="button"
                    className="pagination__button"
                    onClick={() => paginateHandler(idx + 1)}
                    key={idx}
                    aria-label={`Go to page ${idx + 1}`}
                >
                    {idx + 1}
                </button>
            ))}
        </nav>
    );
};

export default Pagination;
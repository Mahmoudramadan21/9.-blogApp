import React from 'react';
import "./Pagination.scss";

const Pagination = ({ noOfBlogs, paginateHandler }) => {
    const noOfPages = Math.ceil(noOfBlogs / 6);

    return (
        <div className="pagination">
            {[...Array(noOfPages)].map((_, idx) => (
                <button
                    type="button"
                    className="pagination__button"
                    onClick={() => paginateHandler(idx + 1)}
                    key={idx}
                >
                    {idx + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;

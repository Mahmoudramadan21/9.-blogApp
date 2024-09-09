import React from 'react';
import "./Pagination.scss";

const Pagination = ({ noOfBlogs, paginateHandler }) => {
    let noOfPaginateItems = Math.ceil(noOfBlogs / 6);
    return (
        <div className='paginate-items'>
            {
                [...Array(noOfPaginateItems)].map((item, idx) => {
                    return (
                        <button type="button" className='paginate-item'
                            onClick={() => paginateHandler(idx + 1)} key={idx}>{idx + 1}</button>
                    )
                })
            }
        </div>
    )
}

export default Pagination
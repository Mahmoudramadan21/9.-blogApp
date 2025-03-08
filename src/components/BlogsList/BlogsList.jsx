import React, { useState } from 'react';
import "./BlogsList.scss";
import { MdAddReaction } from "react-icons/md";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { useBlogsContext } from '../../context/blogsContext';
import Loader from '../Loader/Loader';

const BlogList = ({ blogs }) => {
    const { blogsLoading, searchBlogsLoading } = useBlogsContext();
    const blogLimit = 6;
    const [paginate, setPaginate] = useState(1 * blogLimit);
    const paginateHandler = (value) => setPaginate(value * blogLimit);

    if (blogsLoading || searchBlogsLoading) { return (<Loader />) }

    return (
        <>
            <div className="blog-list">
                {blogs.slice(paginate - 6, paginate).map(blog => {
                    return (
                        <Link to={`/blog/${blog.id}`} key={blog.id}>
                            <div className="blog-card">
                                <div className='blog-card__title'>{blog.title}</div>
                                <div className='blog-card__excerpt'>{(blog.body).substring(0, 100)}...</div>
                                <div className='blog-card__reactions'>
                                    <MdAddReaction />
                                    <span className='reaction__count'>Likes: {blog.reactions.likes}</span>
                                    <span className='reaction__count'>Dislikes: {blog.reactions.dislikes}</span>
                                </div>

                                <div className='blog-card__tags'>
                                    {blog.tags.map((tag, idx) => (
                                        <span className='tag' key={idx}>{tag}</span>
                                    ))}
                                </div>

                                <div className='blog-card__footer'>
                                    <Link to={`/blog/${blog.id}`} className="btn btn--read-more">Read More</Link>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Pagination noOfBlogs={blogs.length} paginateHandler={paginateHandler} />
        </>
    )
}

export default BlogList;

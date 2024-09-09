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
            <div className="blog-items">
                {blogs.slice(paginate - 6, paginate).map(blog => {
                    return (
                        <Link to={`/blog/${blog.id}`}>
                            <div className="blog-item" key={blog.id}>
                                <div className='blog-item-title'>{blog.title}</div>
                                <div className='blog-item-text'>{(blog.body).substring(0, 100)}...</div>
                                <div className='blog-item-reaction'>
                                    <MdAddReaction />
                                    <span className='reaction-value'>Likes: {blog.reactions.likes}</span>
                                    <span className='reaction-value'>Dislikes: {blog.reactions.dislikes}</span>
                                </div>

                                <div className='blog-item-tags'>
                                    {
                                        blog.tags.map((tag, idx) => (
                                            <span className='blog-item-tags-single' key={idx}>{tag}</span>
                                        ))
                                    }
                                </div>

                                <div className='blog-item-btn'>
                                    <Link to={`/blog/${blog.id}`} className="read-more-btn">Read More</Link>
                                </div>
                            </div>
                        </Link>)
                })}
            </div>
            <Pagination noOfBlogs={blogs.length} paginateHandler={paginateHandler} />
        </>
    )
}

export default BlogList
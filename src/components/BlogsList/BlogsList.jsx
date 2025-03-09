import React, { useState, useMemo, useCallback } from 'react';
import "./BlogsList.scss";
import { MdAddReaction } from "react-icons/md";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { useBlogsContext } from '../../context/blogsContext';
import Loader from '../Loader/Loader';

const BlogList = React.memo(({ blogs }) => {
    const { blogsLoading, searchBlogsLoading } = useBlogsContext();
    const blogLimit = 6;
    const [paginate, setPaginate] = useState(1 * blogLimit);

    const paginateHandler = useCallback((value) => {
        setPaginate(value * blogLimit);
    }, [blogLimit]);

    const displayedBlogs = useMemo(() => {
        if (!blogs) return [];
        return blogs.slice(paginate - 6, paginate);
    }, [blogs, paginate]);

    if (blogsLoading || searchBlogsLoading) {
        return <Loader />;
    }

    return (
        <>
            <div className="blog-list" role="list">
                {displayedBlogs.map(blog => (
                    <Link to={`/blog/${blog.id}`} key={blog.id} aria-label={`Read more about ${blog.title}`}>
                        <div className="blog-card" role="listitem">
                            <h2 className='blog-card__title'>{blog.title}</h2>
                            <div className='blog-card__excerpt'>{(blog.body).substring(0, 100)}...</div>
                            <div className='blog-card__reactions' aria-label="Reactions">
                                <MdAddReaction aria-hidden="true" />
                                <span className='reaction__count'>Likes: {blog.reactions.likes}</span>
                                <span className='reaction__count'>Dislikes: {blog.reactions.dislikes}</span>
                            </div>
                            <div className='blog-card__tags' role="list">
                                {blog.tags.map((tag, idx) => (
                                    <span className='tag' key={idx} role="listitem">{tag}</span>
                                ))}
                            </div>
                            <div className='blog-card__footer'>
                                <Link to={`/blog/${blog.id}`} className="btn btn--read-more" aria-label={`Read more about ${blog.title}`}>Read More</Link>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <Pagination noOfBlogs={blogs ? blogs.length : 0} paginateHandler={paginateHandler} />
        </>
    );
});

export default BlogList;
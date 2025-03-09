import React from 'react';
import "./SingleBlog.scss";
import { BiUser, BiCommentDots } from 'react-icons/bi';
import { MdOutlineAddReaction } from "react-icons/md";
import author from "../../assets/images/author.png";
import Comment from '../Comment/Comment';
import { useBlogsContext } from '../../context/blogsContext';
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader';

const SingleBlog = ({ blog, user, comments }) => {
    const { tempBlogs, singleBlogLoading } = useBlogsContext();

    if (singleBlogLoading) {
        return <Loader />;
    }

    return (
        <div className='single-blog' role="main">
            <div className="blog-content">
                <div className="blog-meta" aria-label="Blog metadata">
                    <span>
                        <BiUser className='icon' aria-hidden="true" />
                        {user.firstName} {user.lastName}
                    </span>
                    <span>
                        <BiCommentDots className='icon' aria-hidden="true" />
                    </span>
                    <span>
                        <MdOutlineAddReaction className='icon' aria-hidden="true" />
                        {blog?.reactions?.likes} likes
                    </span>
                </div>
                <h1 className="blog-title">{blog.title}</h1>
                <p className="blog-body">{blog.body}</p>

                <div className="blog-tags" aria-label="Blog tags">
                    <span className="tags-label">Popular Tags:</span>
                    <div className="tags-list" role="list">
                        {blog?.tags?.length > 0 ? (
                            blog.tags.map((tag, index) => (
                                <span className='tag' key={index} role="listitem">{tag}</span>
                            ))
                        ) : (
                            <span className="no-tags">No Tags Available</span>
                        )}
                    </div>
                </div>

                <div className="author-section" aria-label="Author information">
                    <img
                        src={author}
                        alt={`${user.firstName} ${user.lastName}`}
                        className="author-image"
                        aria-label={`Author: ${user.firstName} ${user.lastName}`}
                    />
                    <div className="author-details">
                        <p>{`${user.firstName} ${user.lastName}`}</p>
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                        <p>Address: {user?.address?.address}</p>
                    </div>
                </div>

                <div className="comments-section" aria-label="Comments section">
                    <h2>Comments</h2>
                    {comments.map(comment => (
                        <Comment comment={comment} key={comment.id} />
                    ))}
                </div>
            </div>

            <aside className="recent-blogs" aria-label="Recent blogs">
                <h2>Recent News</h2>
                <div className="recent-list" role="list">
                    {tempBlogs.slice(0, 5).map(blog => (
                        <div className="recent-item" key={blog.id} role="listitem">
                            <Link to={`/blog/${blog.id}`} aria-label={`Read more about ${blog.title}`}>
                                <h3>{blog?.title}</h3>
                            </Link>
                            <div className='likes-count'>
                                <MdOutlineAddReaction aria-hidden="true" />
                                <span>{blog?.reactions?.likes}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
}

export default SingleBlog;
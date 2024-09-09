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
    const { tempBlogs, singleBlogLoading, singleBlogError } = useBlogsContext();

    if (singleBlogLoading) {
        return (<Loader />);
    }


    return (
        <div className='blog'>
            <div className="article-container">
                <div className="article-meta">
                    <span>
                        <BiUser classNameName='text-mid-blue' />
                        {user.firstName} {user.lastName}
                    </span>
                    <span>
                        <BiCommentDots classNameName='text-mid-blue' />
                        {comments.length} comment(s)
                    </span>
                    <span>
                        <MdOutlineAddReaction classNameName='text-mid-blue' />
                        {blog?.reactions?.likes} likes
                    </span>
                </div>
                <h1 className="article-title">{blog.title}</h1>
                <p className="article-text">
                    {blog.body}
                </p>
                <div className="article-tags">
                    <span id='populor-tags'>Popular Tags:</span>
                    <span className="tag-items">
                        {blog && blog.tags && blog.tags.length > 0 ? (
                            blog.tags.map((tag, index) => (
                                <span className='tag-item' key={index}> {tag}</span>
                            ))
                        ) : (
                            <span>No Tags Available</span>
                        )}
                    </span>
                </div>
                <div className="author-info">
                    <img src={author} alt={`${user.firstName} ${user.lastName}`} className="author-img" />
                    <div className="author-details">
                        <p>{`${user.firstName} ${user.lastName}`}</p>
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                        <p>Address: {user?.address?.address}</p>
                    </div>
                </div>

                <div className="comments-section">
                    <h2>Comments</h2>
                    {comments.map(comment => (<Comment comment={comment} key={comment.id} />))}
                </div>
            </div>
            <div className="recent-news">
                <h2>Recent News</h2>
                <div className="news-items">
                    {
                        tempBlogs.slice(0, 5).map(blog => {
                            return (
                                <div className="news-item" key={blog.id}>
                                    <Link to={`/blog/${blog.id}`}>
                                        <h3>{blog?.title}</h3>
                                    </Link>

                                    <div className='likes'>
                                        <MdOutlineAddReaction /> &nbsp;
                                        <span>{blog?.reactions?.likes}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
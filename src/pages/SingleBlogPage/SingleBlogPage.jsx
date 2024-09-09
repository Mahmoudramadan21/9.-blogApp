import React, { useEffect } from 'react';
import "./SingleBlogPage.scss";
import Title from '../../components/Title/Title';
import { useBlogsContext } from '../../context/blogsContext';
import { useParams } from 'react-router-dom';
import { banner_image } from '../../utils/images';
import { useUserContext } from '../../context/userContext';
import { useCommentContext } from '../../context/commentContext';
import SingleBlog from '../../components/SingleBlog/SingleBlog';

const SingleBlogPage = () => {
    const { fetchSingleBlog, singleBlog } = useBlogsContext();
    const { fetchSingleUser, singleUser } = useUserContext();
    const { fetchCommentsByPost, commentsByPost } = useCommentContext();
    const { id } = useParams();

    useEffect(() => {
        fetchSingleBlog(id);
    }, [singleBlog.userId, id])

    useEffect(() => {
        if (singleBlog.userId) {
            fetchSingleUser(singleBlog.userId);
        }
    }, [singleBlog.userId])

    useEffect(() => {
        if (singleBlog.id) {
            fetchCommentsByPost(singleBlog.id);
        }
    }, [singleBlog.id])


    return (
        <div className="main-holder">
            <header className='header' style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${banner_image}) center/cover no-repeat`
            }}>
                <div className='container'>
                    <div className='header-content'>
                        <Title title="Blog Details" color={`#fff`} />
                    </div>
                </div>
            </header>

            <section className='section'>
                <div className='container'>
                    <div className='section-content'>
                        <SingleBlog blog={singleBlog} user={singleUser} comments={commentsByPost} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SingleBlogPage;
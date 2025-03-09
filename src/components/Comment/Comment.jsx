import React, { useEffect, useState } from 'react';
import "./Comment.scss";
import axios from '../../api/axios';
import { USER_URL } from '../../utils/constants';

const Comment = React.memo(({ comment }) => {
    const [postUser, setPostUser] = useState({});

    useEffect(() => {
        const fetchPostUser = async (id) => {
            try {
                const response = await axios.get(`${USER_URL}/${id}`);
                setPostUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (comment?.user?.id) {
            fetchPostUser(comment.user.id);
        }
    }, [comment?.user?.id]);

    return (
        <div className='comment-card' key={comment.id} role="article">
            <div className='comment-avatar'>
                <img
                    src={postUser?.image}
                    alt={`Avatar of ${comment?.user?.username}`}
                    aria-label={`Avatar of ${comment?.user?.username}`}
                />
            </div>
            <div className='comment-content'>
                <p className='comment-author' aria-label={`Comment by ${comment?.user?.username}`}>{comment?.user?.username}</p>
                <p className='comment-text'>{comment?.body}</p>
            </div>
        </div>
    );
});

export default Comment;
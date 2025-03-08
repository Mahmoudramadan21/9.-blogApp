import React, { useEffect, useState } from 'react';
import "./Comment.scss";
import axios from '../../api/axios';
import { USER_URL } from '../../utils/constants';

const Comment = ({ comment }) => {
    const [postUser, setPostUser] = useState({});

    useEffect(() => {
        const fetchPostUser = async (id) => {
            const response = await axios.get(`${USER_URL}/${id}`);
            setPostUser(response.data);
        };

        fetchPostUser(comment?.user?.id);
    }, []);

    return (
        <div className='comment-card' key={comment.id}>
            <div className='comment-avatar'>
                <img src={postUser?.image} alt="User Avatar" />
            </div>
            <div className='comment-content'>
                <p className='comment-author'>{comment?.user?.username}</p>
                <p className='comment-text'>{comment?.body}</p>
            </div>
        </div>
    );
}

export default Comment;

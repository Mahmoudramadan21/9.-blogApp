import React, { useEffect, useState } from 'react';
import "./Comment.scss";
import axios from '../../api/axios';
import { USER_URL } from '../../utils/constants';

const Comment = ({ comment }) => {
    const [postUser, setPostUser] = useState({})

    useEffect(() => {
        const fetchPostUser = async (id) => {
            const response = await axios.get(`${USER_URL}/${id}`);
            setPostUser(response.data);
        }

        fetchPostUser(comment?.user?.id);
    }, []);

    return (
        <div className='comments-item' key={comment.id}>
            <div className='comment-img'>
                <img src={postUser?.image} alt="Comment" />
            </div>
            <div className='comment-info'>
                <p className='username'>{comment?.user?.username}</p>
                <p className='comment-body'>{comment?.body}</p>
            </div>
        </div>
    )
}

export default Comment
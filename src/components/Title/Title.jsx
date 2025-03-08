import React from 'react';
import "./Title.scss";

const Title = ({ title, color }) => {
    return (
        <div className='title-container'>
            <h3 className='title-text'>{title}</h3>
            <p className='title-description'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
        </div>
    );
}

export default Title;

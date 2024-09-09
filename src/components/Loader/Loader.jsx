import React from 'react';
import { loader } from '../../utils/images';
import "./Loader.scss";

const Loader = () => {
    return (
        <div className='loader'>
            <img src={loader} alt="Loading" />
        </div>
    )
}

export default Loader
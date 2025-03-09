import React from 'react';
import { loader } from '../../utils/images';
import "./Loader.scss";

const Loader = () => {
    return (
        <div className='loader' role="status" aria-live="polite">
            <img src={loader} alt="Loading, please wait..." />
        </div>
    )
}

export default Loader;
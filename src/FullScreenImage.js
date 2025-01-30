import React from 'react';
import { useRouteChange } from './navigation';

const FullScreenImage = () => {
    const routeChange = useRouteChange();
    return (
        <div className='full-screen layout position-relative'>
            <img className='action-icon image-back-button' src='../assets/action-func-chevron-left.png' onClick={() => routeChange("/")} />
            <img className='full-screen' src='../assets/Topemployer_why.webp' />

        </div>
    );
};

export default FullScreenImage;
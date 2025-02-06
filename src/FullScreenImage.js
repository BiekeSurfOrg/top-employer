import React from 'react';
import { useRouteChange } from './navigation';
import { updateViews } from './updateViews';
const page = 'image';
const FullScreenImage = () => {
    const routeChange = useRouteChange();
    const reRouteAfter3Seconds = () => {
        setTimeout(() => {
            routeChange('/');
        }, 180000);
    }
    updateViews(page);
    reRouteAfter3Seconds();
    return (
        <div className='full-screen layout position-relative'>
            <img className='action-icon image-back-button' src='../assets/action-func-chevron-left.webp' onClick={() => routeChange("/")} />
            <img className='full-screen' src='../assets/Topemployer_why.webp' />

        </div>
    );
};

export default FullScreenImage;
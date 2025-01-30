import React from 'react';
import { useRouteChange } from './navigation';

const FullScreenVideo = () => {
    const routeChange = useRouteChange();
    return (
        <div className='full-screen layout position-relative'>
            <img className='action-icon video-back-button' src='../assets/action-func-chevron-left.webp' onClick={() => routeChange("/")} />
            <video autoPlay muted loop id="myVideo" className='background-video'>
                <source src="../assets/Top_Employer_we_won_2160x3840.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default FullScreenVideo;
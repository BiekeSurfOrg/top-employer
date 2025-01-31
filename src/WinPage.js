import React from 'react';
import { useRouteChange } from './navigation';

const WinPage = () => {
    const routeChange = useRouteChange();
    const reRouteAfter3Seconds = () => {
        setTimeout(() => {
            routeChange('/');
        }, 5000);
    }
    reRouteAfter3Seconds();
    return (
        <div className='full-screen layout position-relative'>
            <img src='../assets/winner.gif' className='background-video' />
            <div>
                <p className='won-text'>Top, you won! <br /><br /> So did we... </p>
                <br />
                <img className='win-image' src='../assets/red_logo.webp' />
            </div>
        </div>
    );
};

export default WinPage;
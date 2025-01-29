import React from 'react';
import { useRouteChange } from './navigation';

const WinPage = () => {
    const routeChange = useRouteChange();
    const reRouteAfter3Seconds = () => {
        setTimeout(() => {
            routeChange('/');
        }, 3000);
    }
    reRouteAfter3Seconds();
    return (
        <div className='full-screen layout position-relative'>
            <img src='../assets/confetti.gif' className='background-video' />
            <div>
                <h1>We won</h1>
                <h1>So did you</h1>
            </div>
        </div>
    );
};

export default WinPage;
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
            <img src='../assets/winner.gif' className='background-video' />
            <div>
                <p className='won-text'>We won ! <br /><br /> So did you ! </p>
            </div>
        </div>
    );
};

export default WinPage;
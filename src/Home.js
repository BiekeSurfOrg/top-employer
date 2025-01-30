import React from 'react';
import Card from './Card';

const Home = () => {

    return (
        <div className="full-screen position-relative">
            <video autoPlay muted loop id="myVideo" className='background-video'>
                <source src="../assets/Top_Employer_comehere2160x3840.mp4" type="video/mp4" />
            </video>
            <div className="full-screen layout">
                <div className='tile-list'>
                    <Card text='We won… again…' route='/full-screen-video' img={'button1'} />
                    <Card text='Find the awards-game' route='/top-employer-game' img={'button2'} />
                    <Card text='why we won...' route='/full-screen-image' img={'button3'} />
                </div>
            </div>
        </div>
    );
};

export default Home;
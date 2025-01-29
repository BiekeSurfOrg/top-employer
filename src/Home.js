import React from 'react';
import Card from './Card';

const Home = () => {

    return (
        <div className="full-screen position-relative">
            <video autoPlay muted loop id="myVideo" className='background-video'>
                <source src="../assets/Top_Employer_we_won_2160x3840.mp4" type="video/mp4" />
            </video>
            <div className="full-screen layout">
                <div className='tile-list'>
                    <Card text='We won… again…' route='/questions' />
                    <Card text='Find the awards-game' route='/top-employer-game' />
                    <Card text='This is why we earned it' route='/questions' />
                </div>
            </div>
        </div>
    );
};

export default Home;
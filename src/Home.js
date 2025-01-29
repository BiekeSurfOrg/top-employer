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
                    <Card text='Cyber Fraude Test' route='/questions' />
                    <Card text='Financiële Kennis Test' route='/top-employer-game' />
                    <Card text='Ondernemen Kennis Test' route='/questions' />
                </div>
            </div>
        </div>
    );
};

export default Home;
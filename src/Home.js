import React from 'react';
import Card from './Card';

const Home = () => {

    return (
        <div className="full-screen position-relative">
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
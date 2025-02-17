import React from 'react';
import Card from './Card';
import axios from 'axios';
const Home = () => {
    const project_name = "top-employer";
    const API_URL = process.env.REACT_APP_API_ENDPOINT
    const fetchWithAxios = async () => {
        try {
            const response = await axios.post(API_URL + '/projects/' + project_name, {
                pages: ["video", "top-employer-game", "image", "win-page"]
            });
            console.log(response.data);

        } catch (error) {
            console.error(error);
        }
    };
    fetchWithAxios();
    return (
        <div className="full-screen position-relative">
            <video autoPlay muted loop id="myVideo" className='background-video'>
                <source src="../assets/Top_Employer_comehere2160x3840.mp4" type="video/mp4" />
            </video>
            <div className="full-screen layout">
                <div className='tile-list position-relative'>
                    <h3 className='position-absolute click-here'>Click Here</h3>
                    <Card text='We won… again…' route='/full-screen-video' img={'button1'} />
                    <Card text='Find the awards-game' route='/top-employer-game' img={'button2'} />
                    <Card text='Why we won...' route='/full-screen-image' img={'button3'} />
                </div>
            </div>
        </div>
    );
};
export default Home;
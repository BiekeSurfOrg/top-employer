import React from 'react';

const FullScreenVideo = () => {
    return (
        <video autoPlay muted loop id="myVideo" className='background-video'>
            <source src="../assets/Top_Employer_we_won_2160x3840.mp4" type="video/mp4" />
        </video>
    );
};

export default FullScreenVideo;
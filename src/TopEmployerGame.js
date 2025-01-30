import React from 'react';
import { useRouteChange } from './navigation';
const buttons = [{ a: 1375, b: 570 }, { a: 260, b: 1780 }, { a: 265, b: 2240 }, { a: 1740, b: 1440 }, { a: 1910, b: 850 }];
const TopEmployerGame = () => {
    const [awardsFround, setAwardsFound] = React.useState([false, false, false, false, false]);
    console.log(awardsFround);
    const routeChange = useRouteChange();
    const refreshscore = () => {
        setAwardsFound([false, false, false, false, false]);
        const buttons = document.getElementsByClassName('top-employer-button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.border = 'none';
            buttons[i].disabled = false;
        }
    };
    const foundAward = (index) => {
        const nextFlase = awardsFround.indexOf((false));
        if (nextFlase === -1) {
            alert('You found all the awards');
            return;
        }
        setAwardsFound(awardsFround.map((award, index) => index <= nextFlase ? awardsFround[index] = true : false));
        const countTrue = awardsFround.filter(award => award).length;
        if (countTrue === 5) {
            routeChange('/win-page');
        }
        const currentButton = document.getElementById(index);
        currentButton.style.border = '10px solid red';
        currentButton.disabled = true;
    }
    return (
        <div className='full-screen position-relative'>
            <img src='../assets/Topemployer-search.webp' className='background-video'></img>
            <h1>Top Employer Game</h1>
            <div className='z-index-1'>
                <div className='award-found-container'>
                    <img className='action-icon' src='../assets/action-func-chevron-left.png' onClick={() => routeChange("/")} />
                    <div className='awards-found'>
                        {awardsFround.map((award, index) => (<img key={index} className='award-image' src={`../assets/${award ? 'red' : 'grey'}_logo.png`} alt="award" />))}
                    </div>
                    <img className='action-icon' src='../assets/refresh-1024-738176988.png' onClick={() => refreshscore()} />
                </div>
                <div className="position-relative">
                    {buttons.map((button, index) => (
                        <button onClick={() => foundAward(index)} className='top-employer-button' key={index} id={index} style={{ left: button.a, top: button.b }}>

                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopEmployerGame;
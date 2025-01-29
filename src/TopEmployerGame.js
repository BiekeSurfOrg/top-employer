import React from 'react';
const buttons = [{ a: 1375, b: 590 }, { a: 270, b: 1800 }, { a: 270, b: 2250 }, { a: 1740, b: 1440 }, { a: 500, b: 700 }];
const TopEmployerGame = () => {
    const [awardsFround, setAwardsFound] = React.useState([false, false, false, false, false]);
    console.log(awardsFround);
    const foundAward = (index) => {
        const nextFlase = awardsFround.indexOf((false));
        if (nextFlase === -1) {
            alert('You found all the awards');
            return;
        }
        setAwardsFound(awardsFround.map((award, index) => index <= nextFlase ? awardsFround[index] = true : false));
        const countTrue = awardsFround.filter(award => award).length;
        if (countTrue === 5) {
            alert('You found all the awards');
        }
        const currentButton = document.getElementById(index);
        currentButton.style.border = '4px solid red';
        currentButton.disabled = true;
    }
    return (
        <div className='full-screen position-relative'>
            <img src='../assets/Topemployer-search.jpg' className='background-video'></img>
            <h1>Top Employer Game</h1>
            <div className='z-index-1'>
                <div className='award-found-container'>
                    <p>back</p>
                    <div className='awards-found'>
                        {awardsFround.map((award, index) => (<img key={index} className='award-image' src={`../assets/${award ? 'red' : 'grey'}_logo.png`} alt="award" />))}
                    </div>
                    <p>refresh
                    </p>
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
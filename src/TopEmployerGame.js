import React from 'react';
const buttons = [{ a: 100, b: 200 }, { a: 200, b: 300 }, { a: 150, b: 350 }, { a: 300, b: 300 }, { a: 500, b: 700 }];
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
        <div className='full-screen'>

            <h1>Top Employer Game</h1>
            <div className='awards-found'>
                {awardsFround.map((award, index) => (<p key={index}> {index + 1} {award ? 'yes' : 'no'}</p>))}
            </div>
            <div className="position-relative">
                {buttons.map((button, index) => (
                    <button onClick={() => foundAward(index)} className='top-employer-button' key={index} id={index} style={{ left: button.a, top: button.b }}>

                    </button>
                ))}
            </div>
        </div>
    );
};

export default TopEmployerGame;
import React from 'react';
import Result from './Result';

const Results = ({ result }) => {

    const renderRandomSentance = () => {
        const randomSentances = [
            "Je bent op de goede weg! Wil je meer leren? Scan dan hier je bezoekersbadge!",
            "Geweldig gedaan! Je maakte een goede start, maar er is ruimte om nog meer te leren! Scan hier je bezoekersbadge!",
            "Goed bezig! Zin om je kennis nog te verbeteren? Scan dan hier je bezoekersbadge of vraag meer informatie.",
        ];

        const randomIndex = Math.floor(Math.random() * randomSentances.length);
        return randomSentances[randomIndex];
    }

    switch (result) {
        case 0:
        case 1:
            return <Result score={result} sentance={"Jammer, maar je kan zeker nog iets leren. Scan je bezoekersbadge voor meer info over ons aanbod."} />;
        case 2:
            return <Result score={result} sentance={"Niet slecht, maar het kan altijd beter! Scan je bezoekersbadge voor meer info over ons aanbod!"} />;
        case 3:
        case 4:
            return <Result score={result} sentance={renderRandomSentance()} />;
        case 5:
            return <Result score={result} sentance={"Goed gedaan! Je hebt al een goede kennis, maar wil je nog meer weten scan dan hier je bezoekersbadge!"} />;
        default:
            return <h1>no results found</h1>;
    }
};

export default Results;
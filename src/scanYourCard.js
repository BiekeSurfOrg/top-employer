import React from 'react';
import Results from './Results';

const ScanYourCard = ({ direction = 'right', result }) => {
    return (
        <div className="scan-your-card">
            <Results result={result} />
            <img src="../assets/arrow.png" alt="scan your card" className={`direction-${direction}`} />
        </div>
    );
};

export default ScanYourCard;
import React from 'react';
import { useRouteChange } from './navigation';

const Card = ({ text, route, img }) => {
    const routeChange = useRouteChange();
    return (
        <div className="card" onClick={() => routeChange(route)}>
            <img src={`../assets/${img}.png`} className="tile-image" />
            <div className="tile-description-area">
                <span className="tile-description"> {text}</span>
            </div>
        </div>
    );
};

export default Card;
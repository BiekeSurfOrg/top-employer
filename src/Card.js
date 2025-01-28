import React from 'react';
import { useNavigate } from "react-router-dom";


const Card = ({ text, route, img }) => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
    return (
        <div className="card" onClick={() => routeChange(route)}>
            <img src={"/assets/" + img} class="tile-image" />
            <div class="tile-description-area">
                <span class="tile-description"> {text}</span>
            </div>
        </div>
    );
};

export default Card;
import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monstor.id}?set=set2&size=180x180`}></img>
        <h1>{props.monstor.name}</h1>
        <p>{props.monstor.email}</p>
    </div>  
);
import React from "react";
import "../styles/Card.css"
export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} />
            <div className="des">
                <div className="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <h4>{(props.location).toUpperCase()}</h4>
                    <a href={props.googleMapsUrl}>View on Maps</a>
                </div>
                <h1>{props.title}</h1>
                <div className="details">
                    <h3>{props.startDate} - {props.endDate}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

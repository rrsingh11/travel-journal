import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <img src={props.imageUrl} />
            <div>
                <div className="location">
                    <h1>{props.location}</h1>
                    <a href="#"><h6>{props.googleMapsUrl}</h6></a>
                </div>
                <h1>{props.title}</h1>
                <h3>{props.startDate} - {props.endDate}</h3>
                <h4>{props.description}</h4>
            </div>
        </div>
    )
}

import React from "react";

const Card = (props) => {
    let badgetest
    if (props.item.openSpot === 0) {
        badgetest = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgetest = "ONLINE"
    }
    return(
        <session className="card session">
                <div className="card-image">
                    <img src={props.item.img} alt="card" className="image" />
                    {badgetest && <button>{badgetest}</button>}
                </div>
                <div className="card-star">
                    <img src={props.item.star} alt="start" className="star-icon" />
                    <p className="card-ratings">{props.item.ratings}</p>
                    <p className="card-purchase">({props.item.reviewCount}) {props.item.location}</p>
                </div>
                <div className="card-desc">
                    <p className="card-text">{props.item.text}</p>
                    <p className="card-price"><span className="bold">From ${props.item.price} </span>{props.item.person}</p>
                </div>
        </session>
    )
}

export default Card

import React from "react";
import "../css/card.css";

interface CardProps {
    title: string;
    image: string;
    description: string;
}

export const Card: React.FC<CardProps> = ({ title, image, description}) => {
    return (
        <>
            <div className="card">
                <div className="card-img-container">
                    <img
                        className="card-img"
                        src={image}
                        alt={title}
                    />
                </div>

                <div className={"card-title-container"}>
                    <h3 className="card-title">{title}</h3>
                </div>

                <div className="card-text-container">
                    <p className="card-text">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}
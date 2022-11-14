import React from "react";
import Card from "./Card"

export default function Main() {
    return(
        <main>
            <h1>Inspiration for your next adventure</h1>
            <div className="main-grid">
                <Card 
                    img="./images/Frame1.png"
                    title="Desert king"
                    Storage="1MBT per night"
                    dist="2345km away"
                    available="available for 2weeks stay"
                    ratings="./images/Ratings.png"
                />
                <Card 
                    img="./images/Frame2.png"
                    title="Desert king"
                    Storage="1MBT per night"
                    dist="2345km away"
                    available="available for 2weeks stay"
                    ratings="./images/Ratings.png"
                />
                <Card 
                    img="./images/Frame3.png"
                    title="Desert king"
                    Storage="1MBT per night"
                    dist="2345km away"
                    available="available for 2weeks stay"
                    ratings="./images/Ratings.png"
                />
                <Card 
                    img="./images/Frame4.png"
                    title="Desert king"
                    Storage="1MBT per night"
                    dist="2345km away"
                    available="available for 2weeks stay"
                    ratings="./images/Ratings.png"
                />
            </div>
            <div className="main-grid main-grid-bottom">
                <Card 
                   img="./images/Frame5.png"
                   title="Desert king"
                   Storage="1MBT per night"
                   dist="2345km away"
                   available="available for 2weeks stay"
                   ratings="./images/Ratings.png"
                />
                <Card 
                    img="./images/Frame6.png"
                    title="Desert king"
                    Storage="1MBT per night"
                    dist="2345km away"
                    available="available for 2weeks stay"
                    ratings="./images/Ratings.png"
                />
                <Card 
                    img="./images/Frame7.png"
                    title="Desert king"
                    Storage="1MBT per night"
                    dist="2345km away"
                    available="available for 2weeks stay"
                    ratings="./images/Ratings.png"
                />
                <Card 
                    img="./images/Frame8.png"
                    title="Desert king"
                    Storage="1MBT per night"
                    dist="2345km away"
                    available="available for 2weeks stay"
                    ratings="./images/Ratings.png"
                />
            </div>
            
        </main>
    )
}
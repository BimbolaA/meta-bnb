import React, {useState} from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Card from './Card'


export default function Places(){
    const [show, setShow] = useState(false)
    return(
        <>
        <div className="header-nav">
            <div>
                <Link to='#'><img src="../images/Logo1.png" alt="" className="logo-left" /></Link>
                <Link to='#'><img src="../images/Logo2.png" alt="" className="logo-text" /></Link>
            </div>
            <div className="nav-link">
                <ul>
                    <li>Home</li>
                    <Link to='/Places'><li>Place to stay</li></Link>
                    <li>NFTs</li>
                    <li>Community</li>
                </ul>
            </div>
            <div>
                <a href="#" className="nav-button" onClick={() => setShow(true)}>Connect wallet</a>
                <Modal onClose={() => setShow(false)} show={show}/>
            </div>
        </div>
        <div className="place-links">
            <ul>
                <li>Resturant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantast city</li>
                <li>beach</li>
                <li>Carbins</li>
                <li>Off-grid</li>
                <li>Farm</li>
            </ul>
            <button>Location</button>
        </div>
        <div className="main-grid">
            <Card 
                img="./images/place1.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place2.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place3.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place4.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
        </div>
        <div className="main-grid">
            <Card 
                img="./images/place5.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place6.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place7.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place8.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
        </div>
        <div className="main-grid">
            <Card 
                img="./images/place9.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place10.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place11.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place12.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
        </div>
        <div className="main-grid place-grid">
            <Card 
                img="./images/place13.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place14.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place15.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
             <Card 
                img="./images/place16.png"
                title="Desert king"
                Storage="1MBT per night"
                dist="2345km away"
                available="available for 2weeks stay"
                ratings="./images/Ratings.png"
            />
        </div>
        <div className="footer-bottom">
            <div>
                <img src="./images/footer-logo.svg" alt="" />
                <div className="socials">
                    <img src="./images/fb.png" alt="" />
                    <img src="./images/ig.png" alt="" />
                    <img src="./images/tw.png" alt="" />
                </div>
                <div className="copy-right">
                    <p>&copy; 2022 Metabnb</p>
                </div>
            </div>
            <div>
                <h3>Community</h3>
                <ul>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
            </div>
            <div>
                <h3>Places</h3>
                <ul>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
            </div>
            <div>
                <h3>About us</h3>
                <ul>
                    <li>NFT</li>
                    <li>Tokens</li>
                    <li>Landlords</li>
                    <li>Discord</li>
                </ul>
            </div>
        </div>
        </>
    )
}
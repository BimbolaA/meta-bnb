import React, {useState} from "react";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function Nav() {
    const [show, setShow] = useState(false)
    return(
        <header>
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
            
            <div className="header-hero">
                <div className="header-hero-inner">
                    <h1>
                        Rent a <span>Place</span> away from<br/> 
                         <span>Home</span> in the <span>Metaverse</span>
                    </h1>
                    <p>
                        we provide you access to luxury and affordable houses 
                        in the metaverse, get a chance to turn your imagination 
                        to reality at your comfort zone
                    </p>
                    <div className="search">
                        <input type="text" placeholder="Search for location" />
                        <button>Search</button>
                    </div>
                </div>
                <div className="header-img-grid">
                    <img src="../images/Header-group.png" alt="" />
                </div>
            </div>
            <div className="header-bottom-logo">
                <img src="../images/bottom-logo1.svg" alt="" />
                <img src="../images/bottom-logo2.svg" alt="" />
                <img src="../images/bottom-logo3.svg" alt="" />
            </div>
        </header>
    )
}
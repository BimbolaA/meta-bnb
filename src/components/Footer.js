import React from "react";

export default function Footer() {
    return(
        <footer>
            <div className="footer-top">
                <div>
                    <h2>Metabnb NFTs</h2>
                    <p>
                    Discover our NFT gift cards collection.
                    Loyal customers gets amazing gift cards which are 
                    traded as NFTs. These NFTs gives our cutomer 
                    access to loads of our exclusive services.
                    </p>
                    <button>Learn more</button>
                </div>
                <div>
                    <img src="./images/footer-frame.png" alt="" className="foot-img1"/>
                </div>
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
        </footer>
    )
}
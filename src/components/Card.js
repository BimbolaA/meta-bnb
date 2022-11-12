import React from 'react'


export default function Contact(props) {
    return(
       <div className="contact-card">
            <img src={props.img} id="card-img" />
            <div className='card-display'>
                <div>
                    <h6>{props.title}</h6>
                </div>
                <div>
                    <h6>{props.storage}</h6>
                </div>
            </div>
            <div className='card-display'>
                <div>
                    <p>{props.dist}</p>
                </div>
                <div>
                    <p>{props.available}</p>
                </div>
            </div>
            <div className='card-display'>
                <div>
                    <img src={props.ratings} />
                </div>
            </div>
        </div> 
    )
}
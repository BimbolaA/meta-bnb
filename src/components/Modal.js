import React from 'react';

const Modal = props => {
    if (!props.show) {
        return null
    }
    return(
        <div className='modal' onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                    <h2>Connect Wallet</h2>
                    <a href='#' onClick={props.onClose}><img src='./images/x.png' alt='' /></a>
                </div>
                <div>
                    <h6>Choose your preferred wallet:</h6>
                    <a href='#'>
                        <img src='./images/modal-img1.png' alt='' className='modal-img'/>
                        Metamask
                    </a>
                    <a href='#'>
                        <img src='./images/modal-img2.png' alt='' className='modal-img'/>
                        WalletConnect
                    </a>
                </div>
            </div>
        </div>
        
    )
}

export default Modal
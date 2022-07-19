import React from 'react';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        {/* <img src={nft} alt='/' /> */}
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
    
            <h1>Hello There!</h1>
            <p>First of all, this is not the real website of Xcite by Alghanim Electronics. This is just a clone website coded by me to test my MERN stack skills. Features:</p>
            <ul>
                <li>Fully Functioning Searchbar</li>
                <li>Carousels of Products</li>
                <li>Secure Signup and Login</li>
                <li>Dynamic Shopping Cart</li>
                <li>Responsive Site</li>
                <li>And much more!</li>
            </ul>
           <p> I've tried to maintain the look and feel of the <a href="https://www.xcite.com/" target="_blank">
                                  actual site
                                </a> as much as possible. Technologies used: </p>
                <ul>
                    <li>Frontend - React.JS , Redux , Material-ui, Bootstrap</li>
                    <li>Backend - Node.JS & Express.JS , JWT Authentication</li>
                    <li>Database - MongoDB</li>
                    <li>API Testing - Postman</li>
                    <li>Deployment - Heroku </li>
                </ul>
           
            <p>Close this popup window and start exploring!</p>
            <p>- <a href="https://sabira-khan.netlify.app/" target="_blank">Sabira
                                </a></p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;
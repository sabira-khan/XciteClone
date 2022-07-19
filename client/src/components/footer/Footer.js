import React, { useState } from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  const year = new Date().getFullYear();
  const [showText, setShowText] = useState(false);
  const onClick = () => setShowText(true);

  return (
    <div className="main-footer">
      
      <div className="container">
      <div className="row">
          <p className="first">
          Xcite.com: The Ultimate Online Shopping Destination in Kuwait 
          </p>
          <p className="sec">Xcite by Alghanim Electronics is the biggest and most popular
              online shopping website for consumer electronics and accessories
              in Kuwait. Browse, buy and get your electronics delivered
              <br></br>
              <button className="read" onClick={onClick}> {!showText? "+ Read More":"- Read Less"}</button>
              {showText ? <Text /> : null}</p>
              
        </div>
        <br></br>
        <div className="row">
          {/* Column1 */}
          <div className="col">
             <h4 className="header">Our Guide</h4>
            <ul className="list">
              <li>Help</li>
              <li>FAQ</li>
              <li>Alghanim Coporate Site</li>
              <li>Xcite Showrooms</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>اكسايت السعودية</li>
              <li>اكسايت الكويت</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
             <h4 className="header">Our services</h4>
            <ul className="list">
              <li>Trade-In</li>
              <li>Returns & Exchange</li>
              <li>B2B - Corporate Sales</li>
              <li>Xcite Secure Shopping</li>
              <li>Quick Delivery & Installation</li>
              <li>Pay Monthly Installments</li>
              <li>Easy Credit Offers</li>
              <li>About Us</li>
              <li>Site Map</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
             <h4 className="header">Highlights</h4>
            <ul className="list">
              <li>Deal of The Day</li>
              <li>X-cite Mobile App</li>
              <li>Careers</li>
              <li>X-cite Blog</li>
              <li>X-cite Weekly Flyer</li>
            </ul>
          </div>
          <div className="col">
             <h4 className="header">We Accept</h4>
            <ul className="list">
              <li>KNET &nbsp; VISA &nbsp; MASTERCARD</li>
              <li>Gulf Bank &nbsp; Easy Pay &nbsp; PayPal</li>
              <li>American Express</li>
              <li>Follow Us:</li>
              <li>
                <FacebookIcon fontSize="large" />
                &nbsp;
                <TwitterIcon fontSize="large" />
                &nbsp;
                <InstagramIcon fontSize="large" />
                &nbsp;
                <YouTubeIcon fontSize="large" />
              </li>
            </ul>
          </div>
        </div>
        {/* <hr /> */}
        <div className="row">
          <p className="end">
            <br></br>
            &copy; {year} X-cite General Trading Co. S.A.K. (C)
          </p>
        </div>
      </div>
    </div>
  );
};
const Text = () => <div>Shop online at your convenience and at unbeatable prices. Navigate online through various departments to find your choice of product and brand from our curated list of smartphones, computers, home appliances and accessories.</div>;
export default Footer;

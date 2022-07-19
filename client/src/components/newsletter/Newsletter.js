import React from 'react'
import "./newsletter.css"


const Newsletter = () => {
  return (
    <div className='newsletter'>
        <div>
        <h2 className='sign'>Sign up for the newsletter</h2>
        <p className='subscribe'>All the latest & best offers delivered right to your inbox! Subscribe now.</p>
        <div className="app__newsletter-input">
        <input type="email" placeholder="Enter your Email" />
      <button type="button" className="custom__button">Get Our Offers</button>
          </div>
          <h5 className='last'>Online Shopping in Kuwait</h5>
          </div>
    </div>
  )
}

export default Newsletter
import React from 'react';
import './About.css';
import boy from './images/arrival-bg.png';

export const About = () => {
  return (
   <div className='About-section'>
    <div className='section-1'>
      <p className='about-us'>About us</p>
    </div>
    <div className='cards-section'>
      <p id="para3">Why shop with us</p>
      <div className='cards-container'>
      <div className="card">
      <p className="card-title">Fast delivery 🚚✨ </p>
      <p className="small-desc">
      Swift Shipping, Speedy Smiles: Unwrap your joy in record time with our lightning-fast delivery service! 
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
    <div className="card">
      <p className="card-title">Free shipping 🌟📦 </p>
      <p className="small-desc">
      Unlock the joy of guilt-free shopping! Enjoy the freedom of Free Shipping on every order. 
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
    <div className="card">
      <p className="card-title">Best quality 💎✨ </p>
      <p className="small-desc">
      Elevate your experience with excellence! Discover unparalleled quality in every detail. 
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
      </div>
    </div>
    <div className='new-arrivals'>
      <div className='image-sections'>
        <img src={boy} alt="boy-image"/>
      </div>
      <div className='new-texts'>
        <p id="para6">#New arrival</p>
        <p id="para7">Discover the Latest Trends: Unveil Our New Arrivals Collection! 🌟<br/> 
        Fresh styles, vibrant colors, and must-have pieces to elevate <br/>
        your wardrobe.Explore now and stay ahead of the fashion curve.<br/>
         #NewArrivals #FashionForward</p>
         <button className="buttons1 button3">Shop Now</button>
      </div>
    </div>
    <footer className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <p>Reach at:</p>
      <p>♥ Location</p>
      <p>Call +01 1234567890</p>
      <p>demo@gmail.com</p>
    </div>
    <div className="col-md-6">
      <p>Famms</p>
      <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with ✪✪ in O Ⓡ</p>
      <p>Distributed By Loukya chintha</p>
      
    </div>
  </div>
</footer>
   </div>
  )
}



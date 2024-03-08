/*import React from 'react';*/
import girl from './images/slider-bg.jpg';
import boy from './images/arrival-bg.png';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    console.log("Home component rendered");
  }, []);
  return (
    <div className='Home-container'>
      <div className='image-container'>
      <div>
        <img src={girl} className="img-fluid" alt="Responsive image" />
      </div>
      <div className='text'>
      <p id='para1' className='animated-text'>
      Sale <span className='gradient-text'>20% off</span><br />
      on everything </p>

      <p id="para2" className='shopping-description'>
      Explore the latest fashion trends
      Find <br />Qualityproducts at unbeatable prices,<br />
      Elevate your style with our curated collection!
    </p>
    <button className="button button1 animated-button">Shop Now</button>
      </div>
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
    <div className='new-arrival'>
      <div className='image-section'>
        <img src={boy} alt="boy-image"/>
      </div>
      <div className='new-text'>
        <p id="para4">#New arrival</p>
        <p id="para5">Discover the Latest Trends: Unveil Our New Arrivals Collection! 🌟<br/> 
        Fresh styles, vibrant colors, and must-have pieces to elevate <br/>
        your wardrobe.Explore now and stay ahead of the fashion curve.<br/>
         #NewArrivals #FashionForward</p>
         <button class="buttons button2">Shop Now</button>
      </div>
    </div>
    <footer className="bg-light mt-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Famms</h5>
            <p>ADDRESS: 28 White tower, Street Name New York City, USA</p>
            <p>TELEPHONE: +91 987 654 3210</p>
            <p>EMAIL: yourmain@gmail.com</p>
          </Col>
          <Col md={3}>
            <h5>Menu</h5>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Testimonial</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Account</h5>
            <ul>
              <li>Account</li>
              <li>Checkout</li>
              <li>Login</li>
              <li>Register</li>
              <li>Shopping</li>
              <li>Widget</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Subscribe</h5>
            <p>Subscribe by our newsletter and get update protidin.</p>
            <form>
              <input type="email" placeholder="Enter Your Mail"  style={{ borderRadius: '5px' }}/>
              <button type="submit" style={{ backgroundColor: 'red', borderRadius: '5px' }}>Subscribe</button>
            </form>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <p>Loukya chintha. All copy Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
 
    </div>
  );
};

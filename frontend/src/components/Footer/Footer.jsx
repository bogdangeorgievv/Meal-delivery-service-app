import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora cum veniam sequi nihil, explicabo impedit iste excepturi sunt quibusdam.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" srcset="" />
                    <img src={assets.twitter_icon} alt="" srcset="" />
                    <img src={assets.linkedin_icon} alt="" srcset="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+3598-8888-888</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Rights Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer

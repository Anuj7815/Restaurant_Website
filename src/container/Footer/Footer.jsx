import React from 'react';
// import { FooterOverlay,Newsletter } from '../../components';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    {/* <FooterOverlay />
    <Newsletter /> */}
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">No:123,TTK Road,Alwarpet,Chennai-18</p>
        <p className="p__opensans">+044 212-344-1230</p>
        <p className="p__opensans">+91 700-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} alt=""  className='spoon__img' style={{marginTop: 15}}/>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram/>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 Am - 9:00 Pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 Am - 12:00 Am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;

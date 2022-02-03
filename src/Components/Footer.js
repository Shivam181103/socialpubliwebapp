import React from 'react';
import './Footer.css';
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return  (
    <>
    <div className="footer-wrapper">
      <div className="row">
      <h1>India's Number one Influncer Marketing Plateform.</h1>
          <div className="column-wrapper row">
          <div className="column col-6">
              <a href=""><h1>SocialPubli</h1></a>
              <a href="">Home</a>
              <a href="">Influencer</a>
              <a href="">Brand</a>
              <a href="">Our Work</a>
          </div>
      </div>
      <div className="row">
      <div className='col-6 Links'> 
          <a className='link '  href=""><i><FiInstagram /></i></a>
          <a className='link ' href=""> <i><FiFacebook /></i></a>
          <a className='link ' href=""> <i><FiLinkedin/></i></a>
          <a className='link ' href=""> <i><FiTwitter/></i></a>
      </div>
      </div>
      </div>
          <h6>copyright @2022</h6> 
        </div>
    </>
  );
};

export default Footer;


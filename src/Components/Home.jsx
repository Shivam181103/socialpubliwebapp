import React from 'react';
import './Navbar.css';
import bgImg from './video/backgroundImg.mp4';
import {FiArrowDown} from 'react-icons/fi';
import Socialsection from './Socialsection'
import Carousel from './Carousel';
import Clients from './Clients';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Letstalk from './Letstalk';
import Newsletter from './Newsletter';


const Home = () => {
  return (
    <>
    <header>
      <section className="container main-container">
        <video className="video" autoPlay loop muted>
          <source src={bgImg} type="video/mp4"/>
        </video>
            <h1 className="main-heading">Influencer Marketing<br/> 
            <strong>Done <span>Right</span></strong></h1>
            <p className="main-para">As an Influencer Marketing Agency, we create the most viral,<br/> 
            captivating & ROI-focused social media influencer<br/> campaigns for brands globally.</p>
            <button type="button" class="main-button btn btn-outline-secondary "><strong> Our Services </strong>
            </button>
      </section>
      
      <Carousel/>
      <Clients/>
      <Newsletter/>
      <Testimonials/>
      <Letstalk/>      
      <Footer/>
      </header>

    </>
  );
};

export default Home;

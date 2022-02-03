import React from 'react';
import './Socialsection.css';
import styled from "styled-components";
import img from './image/img1.jpg';




const Secondsection = () => {
    return(
        <>
            <section>
            <div className=" row social-container">
            <div className="col col-6 social-heading">
            <h1>
            THE WORLD'S TOP INFLUENCER MARKETING AGENCY HAS BECOME ONE OF THE GLOBE'S FASTEST GROWING FULL SERVICE MARKETING FIRMS
            </h1>
          </div>
          <div className="col col-6 graph" >
            <img src={img} className="sec-img"/>
          </div>
        </div>
            </section>
        </>
    );
};

export default Secondsection;
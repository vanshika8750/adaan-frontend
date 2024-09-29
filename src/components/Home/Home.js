import React from 'react';
import './Home.css';
import adaanbg from '../../assets/adanbg.avif';
import Banner from './Banner';
import Footer from '../Footer/Footer';
import TechStack from '../TechStacks/TechStacks';

const Home = () => {
  return (
   <div>

<div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <div className='home-head'>Boost your sales!</div>
          <p>
            Adaan is trusted by 1000+ companies. As part of a 100-year-old
            publishing group, we understand exactly what it takes to succeed in
            the media and marketing business. Adaan started 19 years ago with an
            aim to provide outstanding services to the global publishing industry.
            Today, we are a trusted name in the print and digital marketing
            industry.
          </p>
        </div>

        <div className="home-image">
          <img src={adaanbg} alt="Adaan Background" />
        </div>
      </div>


    </div>
      <Banner/><TechStack/>
      <Footer/>
   </div>
  );
};

export default Home;

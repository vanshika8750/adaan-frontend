import React from 'react';
import './TechStacks.css';
import techstacks from '../../assets/techstacks.webp'

const TechStack = () => {
  return (
    <div>
        <div className='head-tech'>
            Technologies we use
        </div>
    <div className="tech-stack-container">
        
      <div className="image-container">
        <img src={techstacks} alt="Tech Stack" />
      </div>
      <div className="text-container">
        <h2>Advanced Technology for Modern Websites</h2>
        <p>
          At our company, we utilize the latest technologies and best practices to deliver top-notch websites that ensure excellent performance, security, and user experience. From modern frameworks to efficient development processes, we ensure your website is built with the right tools for success.
        </p>
      </div>
    </div>
    </div>
  );
};

export default TechStack;

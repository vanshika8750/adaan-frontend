import React from 'react';
import './Whatsapp.css'
import { BsChatDotsFill } from "react-icons/bs";

const WhatsAppIcon = () => {
  const handleClick = () => {
    window.open('https://wa.me/918800897632', '_blank'); 
  };

  return (
    <div className="whatsapp-icon" onClick={handleClick}>
      <BsChatDotsFill /> 
    </div>
  );
};

export default WhatsAppIcon;

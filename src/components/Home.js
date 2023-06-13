import React from 'react';
import image from '../images/Placeholder_md-advies_home.png'

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1 className="h1-1">Ik ben een</h1>
          <h1 className="h1-2">verteller,</h1>
          <h1 className="h1-3">verbinder</h1>
        </div>
        <div className="home-image-container">
          <img src={image} alt="portret" className="home-image" />
        </div>
      </div>
    </div>
  );
}


export default Home;

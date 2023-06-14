import React, { useState } from 'react';
import ContactForm from './ContactForm';

import image from '../images/Placeholder_md-advies_home.png'

function Home() {
  const [email, setEmail] = useState(''); // added this line

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // prevent the form from refreshing the page
    console.log(email); // for now, let's just log the email. Later, we will send this to the server
  };

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
      <div className="home-usp">
        <h2 className="h2-1">Wat kan ik voor u doen?</h2>
        <ul className="usp-list">
          <li>Rust brengen in uw onderwijsorganisatie</li>
          <li>Interimmen vanuit een bak ervaring</li>
          <li>Ingewikkelde projecten vanuit visieontwikkeling</li>
          <li>Coaching voor schoolleiders</li>
        </ul>
      </div>
      <div className='home-button'>
        <a href="/cv" className='cv-link'>
          <button className="cv-button">Klik hier voor meer informatie</button>
        </a>
      </div>
      <div className="home-UKV">
        <h2 className="h2-1">Ik schrijf ook verhaaltjes</h2>
        <p className='homep'>Wie ik ben, wat ik voel en wat ik denk, laat zich wel lezen uit mijn verhaaltjes.</p>
        <div className="preview-section">
          <span className="preview-label">Voorproefje?</span>
          <button className="preview-button">Lees ze hier</button>
        </div> 
      </div>
      <div className="newsletter">
        <h3>UKV's direct in je mailbox ontvangen? Vul hier je emailadres in.</h3>
        <form className="newsletter-form" onSubmit={handleFormSubmit}> {/* added onSubmit handler */}
          <input
            type="email"
            name="email"
            className="newsletter-input"
            placeholder="Enter your email"
            required
            value={email} // controlled input
            onChange={handleInputChange} // handle input change
          />
          <button type="submit" className="newsletter-button">
            Verstuur
          </button>
        </form>
      </div>
      <hr />
      <div>
        <h2 className='h2-1'>Neem direct contact op</h2>
        <ContactForm />
        {/* other components or HTML as needed */}
      </div>
    </div>
  );
}

export default Home;

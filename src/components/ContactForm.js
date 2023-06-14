import React from 'react';

function ContactForm() {
    const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Submit form data to your server
      console.log('Form data submitted: ', formData);
    };
  
    return (
      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
           <div className="form-group">
            <label htmlFor="name">Naam:</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Bericht:</label>
            <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          {/* Optionally, include a CAPTCHA here */}
          
          <button type="submit">Verstuur</button>
        </form>
      </div>
    );
  }

export default ContactForm;

import React, { useState } from 'react';

const ContactSellerForm = ({ productName, sellerName }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent to ${sellerName} for product ${productName}: ${message}`);
    setMessage('');
  };

  return (
    <div className="contact-seller-form">
      <h2>Contact {sellerName}</h2>
      <p>Ask questions about: {productName}</p>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
        rows="4"
      />
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
};

export default ContactSellerForm;

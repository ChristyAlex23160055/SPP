import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: 'Request Care',
    message: '',
  });

  // Replace with your full phone number including country code (no + or spaces)
  const recipientPhoneNumber = '15550000000';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the text message
    const text = `*New Contact Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Reason:* ${formData.reason}\n` +
      `*Message:* ${formData.message}`;

    // Encode text for URL safety
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${recipientPhoneNumber}?text=${encodedText}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input 
        type="text" 
        name="name" 
        placeholder="John Doe" 
        value={formData.name} 
        onChange={handleChange} 
        required 
      />

      <label>Phone Number</label>
      <input 
        type="tel" 
        name="phone" 
        placeholder="(555) 000-0000" 
        value={formData.phone} 
        onChange={handleChange} 
        required 
      />

      <label>Reason for Inquiry</label>
      <select name="reason" value={formData.reason} onChange={handleChange}>
        <option value="Request Care">Request Care</option>
        <option value="General Inquiry">General Inquiry</option>
        <option value="Volunteering">Volunteering</option>
      </select>

      <label>Message</label>
      <textarea 
        name="message" 
        placeholder="How can we help you?" 
        value={formData.message} 
        onChange={handleChange} 
        required 
      />

      <button type="submit">Send Message</button>
    </form>
  );
};
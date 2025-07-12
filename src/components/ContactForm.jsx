import { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    budget: '',
    description: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.fname || !form.lname || !form.email.includes('@') ||
      !form.phone || !form.budget || form.description.length < 5
    ) {
      setError('Please fill all fields correctly.');
      return;
    }

    try {
      await axios.post('http://3.7.81.243:3253/api/contact/send', form);
      setSuccess('Message sent successfully!');
      setError('');
      setForm({ fname: '', lname: '', email: '', phone: '', budget: '', description: '' });
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
      setSuccess('');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Let’s Talk</h2>

        <div className="form-grid">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            value={form.fname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            value={form.lname}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            value={form.budget}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Tell us about your project..."
            value={form.description}
            onChange={handleChange}
          />
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;

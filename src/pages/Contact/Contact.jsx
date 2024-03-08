import './Contact.css';
import React, { useState} from 'react';
export const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState({fullName: '', email: '', subject: '', message: ''});
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName.trim() === '') {
      setFormErrors({...formErrors, fullName: 'Full name is required'});
    } else if (email.trim() === '') {
      setFormErrors({...formErrors, email: 'Email is required'});
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      setFormErrors({...formErrors, email: 'Invalid email address'});
    } else if (subject.trim() === '') {
      setFormErrors({...formErrors, subject: 'Subject is required'});
    } else if (message.trim() === '') {
      setFormErrors({...formErrors, message: 'Message is required'});
    } else {
      console.log('Form is valid, submit the form here');
    }
  }


  


  return (
    <div className='contact-section'>
      <div className='section-2'>
      <p className='contact'>Contact</p>
    </div>
    <form onSubmit={handleSubmit} className="mx-auto w-50">
  <div className="form-group">
    <label htmlFor="fullName">Full Name</label>
    <input type="text" className="form-control" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
    {formErrors.fullName && <p className="text-danger">{formErrors.fullName}</p>}
  </div>
  <div className="form-group">
    <label htmlFor="email">Email Address</label>
    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
    {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
  </div>
  <div className="form-group">
    <label htmlFor="subject">Subject</label>
    <input type="text" className="form-control" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/>
    {formErrors.subject && <p className="text-danger">{formErrors.subject}</p>}
  </div>
  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea className="form-control" id="message" rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
    {formErrors.message && <p className="text-danger">{formErrors.message}</p>}
  </div>
  <button type="submit" className="btn-primary mt-3 px-5 py-3 bg-danger text-white">Submit</button>

</form>
  
<footer className="container mt-5">
  <div className="row">
    <div className="col-md-6">
      <p>Reach at:</p>
      <p>♥ Location</p>
      <p>Call +01 1234567890</p>
      <p>demo@gmail.com</p>
    </div>
    <div className="col-md-6">
      <p>Famms</p>
      <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with ✪✪ in O Ⓡ</p>
      <p>Distributed By ThemeWagon</p>
      
    </div>
  </div>
</footer>
             






    </div>
  )
}


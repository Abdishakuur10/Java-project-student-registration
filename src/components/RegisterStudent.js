// src/components/RegisterStudent.js
import React, { useState } from 'react';
import './RegisterStudent.css'; // Import the CSS file

const RegisterStudent = ({ onRegister }) => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    age: '',
    class: '',
    subject: '',
    email: '',
    location: '',
    tell: '',
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(student);
    setStudent({
      firstName: '',
      lastName: '',
      age: '',
      class: '',
      subject: '',
      email: '',
      location: '',
      tell: '',
    }); // Reset form
  };

  return (
    <div className="register-student">
      <h2 className="register-student__title">Register Student</h2>
      <form className="register-student__form" onSubmit={handleSubmit}>
        <label className="register-student__label" htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={student.firstName}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <label className="register-student__label" htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={student.lastName}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <label className="register-student__label" htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={student.age}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <label className="register-student__label" htmlFor="class">Class:</label>
        <input
          type="text"
          id="class"
          name="class"
          value={student.class}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <label className="register-student__label" htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={student.subject}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <label className="register-student__label" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <label className="register-student__label" htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={student.location}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <label className="register-student__label" htmlFor="tell">Telephone:</label>
        <input
          type="tel"
          id="tell"
          name="tell"
          value={student.tell}
          onChange={handleChange}
          className="register-student__input"
          required
        />
        
        <button type="submit" className="register-student__button">Register</button>
      </form>
    </div>
  );
};

export default RegisterStudent;

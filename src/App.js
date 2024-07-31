// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RegisterStudent from './components/RegisterStudent.js';
import StudentList from './components/StudentList.js';
// import  './components/App.css'
import './components/RegisterStudent.css'

const App = () => {
  const [students, setStudents] = useState([]);

  const handleRegister = (student) => {
    setStudents([...students, student]);
  };

  const handleDelete = (index) => {
    // Create a new array excluding the student at the specified index
    const newStudents = students.filter((_, i) => i !== index);
    setStudents(newStudents);

    
  };

  return (
    <nhhRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterStudent onRegister={handleRegister} />} />
        <Route path="/students" element={<StudentList students={students} />} />
        {/* <StudentList students={students} onDelete={handleDelete} /> */}
      </Routes>
    </nhhRouter>
  );
};

export default App;

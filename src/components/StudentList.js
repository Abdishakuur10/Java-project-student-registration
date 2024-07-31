// src/components/StudentList.js
import React from 'react';
import './StudentList.css'; // Import the CSS file

const StudentList = ({ students, onDelete }) => {
  return (
    <div className="student-list">
      <h2 className="student-list__title">Student List</h2>
      {students.length === 0 ? (
        <p className="student-list__message">No students registered yet.</p>
      ) : (
        <table className="student-list__table" id="studentTable">
          <thead className="student-list__thead">
            <tr>
              <th className="student-list__th">First Name</th>
              <th className="student-list__th">Last Name</th>
              <th className="student-list__th">Age</th>
              <th className="student-list__th">Class</th>
              <th className="student-list__th">Subject</th>
              <th className="student-list__th">Email</th>
              <th className="student-list__th">Location</th>
              <th className="student-list__th">Telephone</th>
              <th className="student-list__th">Actions</th>
            </tr>
          </thead>
          <tbody className="student-list__tbody">
            {students.map((student, index) => (
              <tr key={index} className="student-list__row">
                <td className="student-list__cell">{student.firstName}</td>
                <td className="student-list__cell">{student.lastName}</td>
                <td className="student-list__cell">{student.age}</td>
                <td className="student-list__cell">{student.class}</td>
                <td className="student-list__cell">{student.subject}</td>
                <td className="student-list__cell">{student.email}</td>
                <td className="student-list__cell">{student.location}</td>
                <td className="student-list__cell">{student.tell}</td>
                <td className="student-list__cell">
                  <button 
                    className="student-list__delete-btn" 
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;

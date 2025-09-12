import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserTypeSelector.css';

const UserTypeSelector = ({ onSelect }) => {
  const navigate = useNavigate();

  const handleSelect = (userType) => {
    onSelect(userType);
    navigate('/'); // العودة إلى الصفحة الرئيسية بعد الاختيار
  };

  return (
    <div className="user-type-selector">
      <div className="selector-container">
        <h1>Welcome to NextStep Navigator</h1>
        <p>Select your category to get personalized content</p>
        
        <div className="user-cards">
          <div className="user-card" onClick={() => handleSelect('student')}>
            <div className="card-icon">🎓</div>
            <h3>Student</h3>
            <p>Grade 8 to 12</p>
            <ul>
              <li>Guidance for choosing majors</li>
              <li>University preparation</li>
              <li>Talent discovery</li>
            </ul>
          </div>
          
          <div className="user-card" onClick={() => handleSelect('graduate')}>
            <div className="card-icon">📜</div>
            <h3>Graduate</h3>
            <p>Bachelor's / Master's Degree</p>
            <ul>
              <li>Advanced career guidance</li>
              <li>Interview tips</li>
              <li>CV development</li>
            </ul>
          </div>
          
          <div className="user-card" onClick={() => handleSelect('professional')}>
            <div className="card-icon">💼</div>
            <h3>Working Professional</h3>
            <p>Career changing or development</p>
            <ul>
              <li>Career path development</li>
              <li>Field changing</li>
              <li>Leadership and advancement</li>
            </ul>
          </div>
        </div>
        
        <div className="note">
          <p>You can change your selection anytime from the top menu</p>
        </div>
      </div>
      navigate('/');
    </div>
    
  );
};

export default UserTypeSelector;
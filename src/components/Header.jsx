import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = ({ userType }) => {
  const navigate = useNavigate();

  const getUserTypeLabel = () => {
    switch(userType) {
      case 'student': return 'Student';
      case 'graduate': return 'Graduate';
      case 'professional': return 'Professional';
      default: return '';
    }
  };

  const handleChangeUserType = () => {
    navigate('/select-user-type');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={() => navigate('/')}>
          <h1>NextStep Navigator</h1>
          <p>Your Guide to the Future</p>
        </div>
        
        <nav className="nav">
          {userType && (
            <div className="user-type-display">
              <span>Viewing as: {getUserTypeLabel()}</span>
              <button onClick={handleChangeUserType} className="change-user-btn">
                Change
              </button>
            </div>
          )}
          
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            {userType && (
              <>
                <li><a href="/Career_Guide">Career Guide</a></li>
                <li><a href="/Multimedia_Guidance">Multimedia</a></li>
                <li><a href="/Admission_Coaching">Admission & Coaching</a></li>
                <li><a href="/Content_Bookmarking_System">Bookmarks</a></li>
              </>
            )}
            <li><a href="/About_as">About Us</a></li>
            <li><a href="/Contact_Us">Contact Us</a></li>
            {userType && <li><a href="/feedback">Feedback</a></li>}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./src/App.css"

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
    

<nav class="navbar">
    <div class="navbar-logo">
        <img src="public\images\snapedit_1757640405510.png" alt="logo" class="logo-image" />
        <div class="logo-text">career pass</div>
    </div>

<div class="dropdown-content">
    <a href="#">Home</a>
    <a href=".\Content_Bookmarking_System">Bookmarks</a>
    <a href=".\Career_Guide">Career Guide</a>
    <a href=".\Multimedia_Guidance">Multimedia Guidance</a>
    <a href=".\Admission_Coaching">Admission & Coaching</a>
    <a href=".\About_as">/About_as</a>
    <a href=".\Contact_Us">Contact Us</a>
    <a href=".\Feedback">Feedback</a>
</div>

</nav>
  );
};

export default Header;
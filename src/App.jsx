import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UserTypeSelector from './components/UserTypeSelector'; 
import About_Us from './pages/About_Us';
import Career_Guide from './pages/Career_Guide';
import Contact_Us from './pages/Contact_Us';
import Content_Bookmarking_System from './pages/Content_Bookmarking_System';
import Multimedia_Guidance from './pages/Multimedia_Guidance';
import Admission_Coaching from './pages/Admission_Coaching';
import Feedback from './pages/Feedback';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header userType={userType} />
        <Routes>
          <Route path="\" element={<Home />} />
          <Route path="\src\pages\Home" element={<Home />} />

          <Route path="\About_Us" element={<About_Us  />} />
          <Route path="\Admission_Coaching" element={<Admission_Coaching  />} />
          <Route path="\Career_Guide" element={<Career_Guide />} />
          <Route path="\Contact_Us" element={<Contact_Us />} />
          <Route path="\Content_Bookmarking_System" element={<Content_Bookmarking_System  />} />
          <Route path="\Feedback" element={<Feedback />} />
          <Route path="\Multimedia_Guidance" element={<Multimedia_Guidance  />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
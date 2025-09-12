import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About_as from './pages/About_as';
import Career_Guide from './pages/Career_Guide';
import Contact_Us from './pages/Contact_Us';
import Content_Bookmarking_System from './pages/Content_Bookmarking_System';
import Multimedia_Guidance from './pages/Multimedia_Guidance';
import Admission_Coaching from './pages/Admission_Coaching';
import feedback from './pages/feedback';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About_as" element={<About_as/>} />
          <Route path="/Admission_Coaching" element={<Admission_Coaching />} />
          <Route path="/Career_Guide" element={<Career_Guide />} />
          <Route path="/Contact_Us" element={<Contact_Us/>} />
          <Route path="/Content_Bookmarking_System" element={<Content_Bookmarking_System />} />
          <Route path="/feedback" element={<feed_back />} />
          <Route path="/Multimedia_Guidance" element={<Multimedia_Guidance/>} />
          <Route path="/Admission_Coaching" element={<Admission_Coaching />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
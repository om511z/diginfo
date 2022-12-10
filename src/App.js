import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Services} from './Pages/Services';
import {Home} from './Pages/Home';
import Aboutus from './Components/Aboutus';
import Contact from './Components/Contact';


function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/about' element={<Aboutus />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export {App};

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route path="/about" component={<About />} />
        {/* Add more routes as needed */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default MainRouter;

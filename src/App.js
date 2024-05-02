import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './components/Header';
import Footer from './components/Footer';
import SlideBar from './components/SlideBar';
import Dashboard from './pages/Dashboard'; // Import page components
import Settings from './pages/Settings';
import View from './pages/View';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <SlideBar />
          <div className="content">
            <Routes> {/* Use Routes element to wrap Route components */}
              <Route exact path="/dashboard" element={<Dashboard />} /> {/* Specify routes for components */}
              <Route exact path="/settings" element={<Settings />} />
              <Route exact path="/view" element={<View />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

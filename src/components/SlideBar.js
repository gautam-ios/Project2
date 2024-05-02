import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
// import any necessary components for navigation

const SlideBar = () => {
  return (
    <div className="slide-bar">
      <h2>Slide Bar</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/view">View</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default SlideBar;

import React from 'react';
import './App.css'; // You can create this CSS file for global styles
import Header from './components/Header';
import './components/Header.css'; // Import Header styles
import Footer from './components/Footer';
import './components/Footer.css'; // Import Footer styles
import SlideBar from './components/SlideBar';
import './components/SlideBar.css'; // Import SlideBar styles

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SlideBar />
        <div className="content">
          <h2>Main Content</h2>
          <p>This is the main content of your app.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

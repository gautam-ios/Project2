import React from 'react';
import './App.css'; // You can create this CSS file for global styles
import Header from './components/Header';
import Footer from './components/Footer';
import SlideBar from './components/SlideBar';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <h1>Main Content</h1>
        <p>This is the main content of your app.</p>
      </main>
      <Footer />
      <SlideBar />
    </div>
  );
}

export default App;

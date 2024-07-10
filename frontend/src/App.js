import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://placehold.co/40x40" alt="logo" className="logo" />
      </div>
      <div className="header-right">
        <img src="https://placehold.co/40x40" alt="user avatar" className="avatar" />
      </div>
    </header>
  );
};

const MainSection = () => {
  return (
    <section className="main-section">
      <h1 className="main-title">Create Muse</h1>
      <div className="main-card">
        <div className="upload-section">
          <img src="https://placehold.co/24x24" alt="upload icon" className="upload-icon" />
          <p className="upload-text">Choose a file or drag and drop it here</p>
          <p className="upload-subtext">We recommend using high-quality .jpg files less than 20MB or .mp4 files less than 200MB.</p>
        </div>
        <div className="form-section">
          <input type="text" placeholder="Add a title" className="form-input" />
          <textarea placeholder="Add a detailed description" className="form-input" />
          <input type="text" placeholder="Add a link" className="form-input" />
          <input type="text" placeholder="Choose a board" className="form-input" />
          <input type="text" placeholder="Tagged topics (0)" className="form-input" />
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <MainSection />
      </main>
    </div>
  );
};

export default App;

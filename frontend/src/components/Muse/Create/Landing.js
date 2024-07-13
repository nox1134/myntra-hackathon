import React from "react";
import Header from "../Create/Header";
import MainSection from "../Create/MainSection";
import "./Create-muse.css";

const Landing = () => {
  return (
    <div className="view-landing">
      <Header />
      <main className="main-content">
        <MainSection />
      </main>
    </div>
  );
};

export default Landing;

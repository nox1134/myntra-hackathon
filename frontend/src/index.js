import "../src/index.css"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from "./components/Muse/Create/Landing";
import ViewLanding from "./components/Muse/View/ViewLanding";
import Explore from "./components/Muse/Explore/Explore";
import Results from "./components/Style-Showdown/Results/Results";
import QuizStarter from "./components/Style-Showdown/Quiz/QuizStarter";
import QuizLanding from "./components/Style-Showdown/Landing/QuizLanding";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  once: true, // This ensures that animations only occur once
});


  ReactDOM.render(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/create-muse" />} />
       <Route path="/create-muse" element={<Landing />} />
      <Route path="/explore" element={<Explore />} />
        <Route path="/view-muse" element={<ViewLanding />} />
        <Route path="/quiz-results" element={<Results />} />
        <Route path="/quiz-page" element={<QuizStarter />} />
        <Route path="/quiz-landing" element={<QuizLanding />} />
        <Route path="*" element={<QuizLanding />} />





      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );

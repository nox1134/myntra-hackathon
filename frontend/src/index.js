import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from './components/Muse/Create/Landing';
import ViewLanding from './components/Muse/View/ViewLanding';


  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/create-muse" element={<Landing />} />
        <Route path="/view-muse" element={<ViewLanding />} />

      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
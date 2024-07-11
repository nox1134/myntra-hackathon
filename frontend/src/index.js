import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from "./components/Muse/Create/Landing";
import Explore from "./components/Muse/Explore/Explore"; // Create this component

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/create-muse" replace />} />
      <Route path="/create-muse" element={<Landing />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

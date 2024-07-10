import './index.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Landing from './components/Muse/Create/Landing';


  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/create-muse" element={<Landing />} />
      </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
  
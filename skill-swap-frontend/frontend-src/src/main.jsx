import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx"; // Update path if needed

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Add more routes later, e.g. /register, /home */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

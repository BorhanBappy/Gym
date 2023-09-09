import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contract from "./components/Contract";
import Gallery from "./components/Gallery";
import Plans from "./components/Plan";
import Trainers from "./components/Trainers";
import Notfound from "./components/Notfound";

import Navbar from "./components/Navbar";
import ProgramDetails from "./components/ProgramDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
        <BrowserRouter>
          {<Navbar />}

          <div className="pt-16"></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/trainers/:name" element={<Trainers />} />
            <Route path="/program-details/:id" element={<ProgramDetails />} />

            <Route path="*" element={<Notfound />} />
            {/* Add a 404 route if needed */}
          </Routes>
          {<Footer />}
        </BrowserRouter>
    </div>
  );
}

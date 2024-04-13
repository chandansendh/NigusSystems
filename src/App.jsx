import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componetns/NavBar";
import Footer from "./componetns/Footer";
import Service from "./componetns/Service";
import Solutions from "./componetns/Solutions";
import Industries from "./componetns/Industries";
import About from "./componetns/About";
import Contact from "./componetns/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Service />} />
          <Route path="/Solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;

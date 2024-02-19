import React, { useState } from "react";
import Home from "./Home";
import About from "./About";
import Api from "./Api";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
     
      <Footer />
    </>
  );
};

export default App;

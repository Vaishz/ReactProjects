import React, { useState } from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Vaish from "./Vaish";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vaish" element={<Vaish />} />
        </Routes>
      </BrowserRouter> 
      <Footer />
    </>
  );
};

export default App;

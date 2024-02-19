import React, { useState } from "react";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Vaish from "./Vaish";
import Quiz from "./Quiz";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter> 
      <Footer />
    </>
  );
};

export default App;

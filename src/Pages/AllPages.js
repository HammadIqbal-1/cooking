import React from "react";
import Home from "./Home";
import Cusicine from "./Cusicine";
import Searched from "./Searched";
import Recipes from "./Recipes";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation(); // call useLocation as a function
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/Cusicine/:type" element={<Cusicine />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name " element={<Recipes />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default Pages;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../components/Products";
import Men  from "../components/Men";
import Home from "../components/Home";
import About from "../components/About";
import HomeDecor from "../components/HomeDecor";
import Kids from "../components/Kids";
import Women from "../components/Women";

const MainRoutes = () => {
  return (
    <>
      {/* Navbar and all the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
       
        <Route path="/products/men" element={<Men />} />
        <Route path="/products/women" element={<Women />} />
        <Route path="/products/kids" element={<Kids />} />
        <Route path="/products/homedecor" element={<HomeDecor />} />
      </Routes>
    </>
  );
};
export { MainRoutes };


// /products/women
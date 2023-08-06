import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Pizzas from "../Pages/Pizzas";

import PizzaDetails from "../Pages/PizzaDetails";
import Cart from '../Pages/Cart';
import Checkout from "../Pages/Checkout";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Routes>
  );
};

export default Routers;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Cart from "../Cart/Cart";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function Rout({
  ShopPage,
  SetShopPage,
  CatigoryProduct,
  AddtoCart,
  CartPage,
  SetCartPage,
  AllProduct,
  setAllProduct,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            AddtoCart={AddtoCart}
            AllProduct={AllProduct}
            setAllProduct={setAllProduct}
          />
        }
      />
      <Route
        path="shop"
        element={
          <Shop
            ShopPage={ShopPage}
            SetShopPage={SetShopPage}
            CatigoryProduct={CatigoryProduct}
            AddtoCart={AddtoCart}
            AllProduct={AllProduct}
            setAllProduct={setAllProduct}
          />
        }
      />
      <Route
        path="cart"
        element={<Cart CartPage={CartPage} SetCartPage={SetCartPage} />}
      />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

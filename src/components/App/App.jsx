import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Rout from "../Rout/Rout";
import HomeProduct from "../Home/HomeProduct";

export default function App() {
  // search box for cat only
  const [Search, SetSearch] = useState("");
  // shop page
  const [ShopPage, SetShopPage] = useState(HomeProduct);
  // add to cart
  const [CartPage, SetCartPage] = useState([]);

  // shop page
  const CatigoryProduct = (x) => {
    const CatProduct = HomeProduct.filter((ele) => ele.cat === x);
    SetShopPage(CatProduct);
  };

  // search box for cat only
  const SearchFilter = () => {
    if ((Search || []).length === 0) {
      alert("Please write in search box !");
      SetShopPage(HomeProduct);
    } else {
      const searchCat = HomeProduct.filter((ele) => ele.cat === Search);
      SetShopPage(searchCat);
    }
  };

  // add to cart
  const AddtoCart = (product) => {
    const exist = CartPage.find((x) => x.id === product.id);
    if (exist) {
      alert("the product is allready added in cart");
    } else {
      alert("added to card");
      SetCartPage([...CartPage, { ...product, qty: 1 }]);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          Search={Search}
          SetSearch={SetSearch}
          SearchFilter={SearchFilter}
        />
        <Rout
          ShopPage={ShopPage}
          SetShopPage={SetShopPage}
          CatigoryProduct={CatigoryProduct}
          AddtoCart={AddtoCart}
          CartPage={CartPage}
          SetCartPage ={SetCartPage}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

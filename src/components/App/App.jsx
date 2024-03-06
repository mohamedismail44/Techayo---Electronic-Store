import React, { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Rout from "../Rout/Rout";
import { ProductContext } from "../Context/MediaStore";

export default function App() {
  // all ptoduct api
  const { AllProduct } = useContext(ProductContext);
  const { setAllProduct } = useContext(ProductContext);
  // shop page api
  const { ShopPage } = useContext(ProductContext);
  const { SetShopPage } = useContext(ProductContext);

  // search box for cat only
  const [Search, SetSearch] = useState("");

  // add to cart
  const [CartPage, SetCartPage] = useState([]);

  // shop page
  const CatigoryProduct = (x) => {
    const CatProduct = AllProduct.filter((ele) => ele.category === x);
    SetShopPage(CatProduct);
  };

  // search box for cat only
  const SearchFilter = () => {
    if ((Search || []).length === 0) {
      alert("Please write in search box !");
      SetShopPage(AllProduct);
    } else {
      const searchCat = AllProduct.filter((ele) => ele.cat === Search);
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
          SetCartPage={SetCartPage}
          AllProduct={AllProduct}
          setAllProduct={setAllProduct}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

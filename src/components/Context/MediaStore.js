import React, { createContext, useEffect, useState } from "react";

export let ProductContext = createContext(null);
export default function MediaContextProvider(props) {
  // all ptoduct api
  const [AllProduct, setAllProduct] = useState([]);
  // api Shop
  const [ShopPage, SetShopPage] = useState(AllProduct);
  // api Home
  const [HomePage, SetHomePage] = useState(AllProduct);

  useEffect(() => {
    async function getProd() {
      const response = await fetch("https://dummyjson.com/products");
      const posts = await response.json();
      setAllProduct(posts.products);
      SetShopPage(posts.products);
      SetHomePage(posts.products);
    }
    getProd();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        AllProduct,
        setAllProduct,
        ShopPage,
        SetShopPage,
        HomePage,
        SetHomePage,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

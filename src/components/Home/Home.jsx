import React, { useState } from "react";
import HomeProduct from "./HomeProduct";
import { Link } from "react-router-dom";

export default function Home({ AddtoCart }) {
  const [TrindingProduct, setTrindingProduct] = useState(HomeProduct);
  // All Product with catigory
  const TrindingClass = (x) => {
    const TrindingCut = HomeProduct.filter((ele) => ele.type === x);
    setTrindingProduct(TrindingCut);
  };
  //   All Product
  const AllTrinding = () => {
    setTrindingProduct(HomeProduct);
  };
  
  //   NewProduct
  const NewProduct = HomeProduct.filter((ele) => ele.type === "new");
  //  featuredProduct
  const featuredProduct = HomeProduct.filter((ele) => ele.type === "featured");
  //   TopProduct
  const TopProduct = HomeProduct.filter((ele) => ele.type === "top selling");

  // show details product
  const [DetailsBox, setDetailsBox] = useState([]);
  const [DetailsProduct, setDetailsProduct] = useState(false);

  // show details product function
  const ShowDetails = (product) => {
    setDetailsBox(product);
    setDetailsProduct(true);
  };
  // close details product
  const CloseDetails = () => {
    setDetailsProduct(false);
  };
  return (
    <>
      {DetailsProduct ? (
        <div className="product-details">
          <i onClick={CloseDetails} className="fa-solid fa-square-xmark"></i>
          <div className="details-container">
            <div className="box">
              <div className="img-box">
                <img src={DetailsBox.image} alt="" />
              </div>
              <div className="details">
                <p className="p1">{DetailsBox.cat}</p>
                <p className="p2">{DetailsBox.Name}</p>
                <p className="p3">
                  Best HP, Dell Laptops, and Gaming Laptops Prices from B.TECH,
                  Shop Online HP Laptop, MacBook Air, Sony Laptop and More with
                  Easy payments"
                </p>
                <p className="p4">{DetailsBox.price}$</p>
                <button onClick={() => AddtoCart(DetailsBox)} href="">
                  add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <section className="home">
        <div className="top-banner">
          <div className="content">
            <h4>silver aluminum</h4>
            <h2>apple watch</h2>
            <p>30% off at your first order</p>
            <Link className="a-content" to="">
              shop now
            </Link>
          </div>
        </div>
        <div className="mid-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 left-box">
                <div className=" heading my-3 d-flex justify-content-between">
                  <div className="l-heading">
                    <h3 onClick={() => AllTrinding()}>trending product</h3>
                  </div>
                  <div className="r-heading d-flex">
                    <h3 onClick={() => TrindingClass("new")}>new</h3>
                    <h3 onClick={() => TrindingClass("featured")}>featured</h3>
                    <h3 onClick={() => TrindingClass("top selling")}>
                      top selling
                    </h3>
                  </div>
                </div>
                <div className="row g-3">
                  {TrindingProduct.map((ele, index) => (
                    
                      <div key={index} className="col-xl-3 col-md-4 col-sm-6">
                        <div className="mid-card pb-3">
                          <div className="image-card">
                            <img src={ele.image} alt="" />
                            <div className="icons">
                              <i className="fa-solid fa-heart"></i>
                              <i
                                onClick={() => ShowDetails(ele)}
                                className="fa-solid fa-eye"
                              ></i>
                            </div>
                          </div>
                          <p className="p1-mid-card">{ele.Name}</p>
                          <p className="p2-mid-card">{ele.price}$</p>
                          <div className="text-center">
                            <button onClick={() => AddtoCart(ele)}>
                              add to card
                            </button>
                          </div>
                        </div>
                      </div>
                    
                  ))}
                </div>
                <div className="show-more">
                  <button>show more</button>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="right-box">
                  <div className="box1">
                    <h3>our test tmonial</h3>
                    <div className="details-box">
                      <img src="images/customer.jpg" alt="" />
                      <h4>stephane robot</h4>
                      <h5>web designer</h5>
                      <p>
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print.
                      </p>
                    </div>
                  </div>
                  <div className="box2">
                    <div className="search-box">
                      <h3>newsletter</h3>
                      <span>join our mailling list</span>
                      <input type="text" placeholder="E-mail" />
                      <button className="a-content">subscribe</button>
                    </div>
                    <div className="icons">
                      <i className="fa-brands fa-facebook"></i>
                      <i className="fa-brands fa-instagram"></i>
                      <i className="fa-brands fa-twitter"></i>
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-5  my-3">
          <div className="row">
            <div className="col-md-3">
              <div className="left-box">
                <img
                  className="left-box-img1"
                  src="images/Multi-Banner-1.avif"
                  alt=""
                />
                <img
                  className="left-box-img2"
                  src="images/Multi-banner-2.avif"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-9">
              <div className="right-box">
                <div className="row1">
                  <img
                    className="right-box-img1"
                    src="images/Multi-Banner-3.webp"
                    alt=""
                  />
                  <img
                    className="right-box-img2"
                    src="images/Multi-banner-4.avif"
                    alt=""
                  />
                </div>
                <div className="row2">
                  <img
                    className="right-box-img3"
                    src="images/Multi-Banner-5.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-5  my-3">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-9 m-auto mb-4">
              <div className="col-1">
                <h3>new product</h3>
                {NewProduct.map((ele, index) => (
                 
                    <div key={index} className="col-1-details">
                      <img src={ele.image} alt="" />
                      <div className="col-1-tx">
                        <h4>{ele.Name}</h4>
                        <h5>{ele.price}$</h5>
                        <div className="icons">
                          <i className="fa-solid fa-heart"></i>
                          <i
                            onClick={() => ShowDetails(ele)}
                            className="fa-solid fa-eye"
                          ></i>
                          <i
                            onClick={() => AddtoCart(ele)}
                            className="fa-solid fa-cart-shopping"
                          ></i>
                        </div>
                      </div>
                    </div>
                 
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-9 m-auto mb-4">
              <div className="col-1">
                <h3>featured product</h3>
                {featuredProduct.map((ele, index) => (
                  
                    <div key={index} className="col-1-details">
                      <img src={ele.image} alt="" />
                      <div className="col-1-tx">
                        <h4>{ele.Name}</h4>
                        <h5>{ele.price}$</h5>
                        <div className="icons">
                          <i className="fa-solid fa-heart"></i>
                          <i
                            onClick={() => ShowDetails(ele)}
                            className="fa-solid fa-eye"
                          ></i>
                          <i
                            onClick={() => AddtoCart(ele)}
                            className="fa-solid fa-cart-shopping"
                          ></i>
                        </div>
                      </div>
                    </div>
                  
                ))}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-9 m-auto mb-4">
              <div className="col-1">
                <h3>top selling product</h3>
                {TopProduct.map((ele, index) => (
                  
                    <div key={index} className="col-1-details">
                      <img src={ele.image} alt="" />
                      <div className="col-1-tx">
                        <h4>{ele.Name}</h4>
                        <h5>{ele.price}$</h5>
                        <div className="icons">
                          <i className="fa-solid fa-heart"></i>
                          <i
                            onClick={() => ShowDetails(ele)}
                            className="fa-solid fa-eye"
                          ></i>
                          <i
                            onClick={() => AddtoCart(ele)}
                            className="fa-solid fa-cart-shopping"
                          ></i>
                        </div>
                      </div>
                    </div>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

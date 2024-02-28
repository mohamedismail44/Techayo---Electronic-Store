import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4 right-box">
              <div className="col1">
                <div className="support">
                  <div className="icon">
                    <i className="fa-brands fa-docker"></i>
                  </div>
                  <div className="details">
                    <h3>great saving</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="support">
                  <div className="icon">
                    <i className="fa-solid fa-truck-fast"></i>
                  </div>
                  <div className="details">
                    <h3>free delivery</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="support">
                  <div className="icon">
                    <i className="fa-solid fa-headset"></i>
                  </div>
                  <div className="details">
                    <h3>24x7 support</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="support">
                  <div className="icon">
                    <i className="fa-solid fa-wallet"></i>
                  </div>
                  <div className="details">
                    <h3>money back</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 ">
              <div className="row ms-5 col2 ">
                <div className="col2-img col-md-12 d-flex justify-content-center ">
                  <img src="images/logo.webp" alt="" />
                </div>
                <div className="col2-p col-md-12 my-4 mb-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus, excepturi. Corporis maxime!
                  </p>
                </div>
                <div className="info col-md-4 col-sm-6 mt-2">
                  <h4>your account</h4>
                  <h5>about us</h5>
                  <h5>account</h5>
                  <h5>payment</h5>
                  <h5>sales</h5>
                </div>
                <div className="info col-md-4 col-sm-6 mt-2">
                  <h4>products</h4>
                  <h5>delivery</h5>
                  <h5>track order</h5>
                  <h5>new product</h5>
                  <h5>old product</h5>
                </div>
                <div className="info col-md-4 col-sm-6 mt-2">
                  <h4>contact us</h4>
                  <h5>4005, gold premume bussines</h5>
                  <h5>+201999999999</h5>
                  <h5>info@gmail.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export default function Navbar({ Search, SetSearch, SearchFilter }) {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  let text = "Flat 10% Over All IPhone";
  let index = 1;
  function txAuto() {
    document.getElementById("text-auto").textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      index = 0;
    }
  }
  setInterval(txAuto, 400);

  return (
    <>
      <section className="header">
        {/* ................top header ..................*/}
        <div className="top-head">
          <div className="container d-flex py-2">
            <div>
              <i className="fa-solid fa-truck pe-2"></i>
            </div>
            <div>
              <span>Free Shipping When Shoping Upto 1000$</span>
            </div>
          </div>
        </div>

        {/* ................ mid header ..................*/}
        <div className="mid-head py-4">
          <div className="container d-flex justify-content-between">
            <img src="images/logo.webp" alt="logo" />

            <div className="search-box">
              <input
                type="text"
                placeholder="Search"
                value={Search}
                onChange={(e) => SetSearch(e.target.value)}
              />
              <button onClick={SearchFilter}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>

            {isAuthenticated ? (
              <div className="Login-box">
                <span>
                  <i className="fa-solid fa-arrow-right-to-bracket pe-1"></i>
                </span>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="Login-box">
                <span>
                  <i className="fa-solid fa-arrow-right-to-bracket pe-1"></i>
                </span>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            )}
          </div>
        </div>
        {/* ................. bottom header .................*/}
        <nav className="navbar bott-head bg-dark py-3 navbar-expand-lg">
          <div className="container-fluid text-white">
            <div className="porfile-data d-flex align-items-center">
              <i className="fa-solid fa-circle-user pe-2 h2"></i>
              {isAuthenticated ? (
                <div>
                  <h2>Hello: {user.nickname}</h2>
                  <span>Email: {user.email}</span>
                </div>
              ) : (
                <div>
                  <span className="h5">Please Login</span>
                </div>
              )}
            </div>
            <button
              className="navbar-toggler text-white "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-sliders fs-1 "></i>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <Link className="link nav-link" to="">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="link nav-link" to="Shop">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link className="link nav-link" to="Cart">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link className="link nav-link" to="About">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="link nav-link" to="Contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="bott-head-butt">
                <span id="text-auto"></span>
              </div>
            </div>
          </div>
        </nav>

        {/* ................. top header .................*/}
      </section>
    </>
  );
}

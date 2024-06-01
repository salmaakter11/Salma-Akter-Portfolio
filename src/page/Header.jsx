import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="main-header d-lg-none">
                <div className="container">
                    {/* Brand */}
                    <div className="logo">
                        <a className="navbar-brand" href="#home">
                            <img  className="logo-dark"  title=""  alt=""  src="assets/img/salma-logo.jpg"  width={100} />
                        </a>
                    </div>
                    <div className="ms-auto">
                        <button className="toggler-menu">
                            <span />
                        </button>
                    </div>
                </div>
            </header>


            <div className="header-left-fixed one-page-nav">
                {/* Brand */}
                <div className="logo">
                    <a className="navbar-brand" href="#home">
                        <img className="logo-dark" title="" alt=""  src="assets/img/salma-logo.jpg" width={100}
                        />
                    </a>
                </div>
                {/* / */}
                <ul className="main-menu">
                    <li>
                        <NavLink data-scroll-nav={0} to="#home">
                            <span className="m-icon">
                                <i className="bi-house-door" />
                            </span>
                            <span className="m-text">Home</span>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink  data-scroll-nav={1} to="#services">
                            <span className="m-icon">
                                <i className="bi-person" />
                            </span>
                            <span className="m-text">About</span>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink  data-scroll-nav={3} to="#work">
                            <span className="m-icon">
                                <i className="bi-columns" />
                            </span>
                            <span className="m-text">Portfolio</span>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink  data-scroll-nav={4} to="#contactus">
                            <span className="m-icon">
                                <i className="bi-telephone" />
                            </span>
                            <span className="m-text">Contact</span>
                        </NavLink >
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Header;
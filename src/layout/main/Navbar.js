import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenuOutline } from 'react-icons/ti';
import { ImCross } from 'react-icons/im';
import "./nav.css";

const Nav = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <div className="relative">
            <div className="w-10/12 mx-auto flex justify-between pt-10">
                <div className="text-2xl font-bold tracking-wider text-primary">Our Users</div>
                <div className="relative">
                    <div className="menu-toggle " onClick={() => setNavOpen(!navOpen)}>
                        <div className=""> {!navOpen ? <span className="text-3xl text-white"> < TiThMenuOutline /> </span> : <span className="text-2xl  font-bold text-white">< ImCross /></span>} </div>
                    </div>
                </div>
            </div>

            <div
                className="nav-overlay z-10 h-screen"
                style={{
                    top: navOpen ? "0" : "-100%",
                    transitionDelay: navOpen ? "0s" : "0s",
                }}
            >
                <ul className="nav-links">
                    <li className="">
                        <Link to="/"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.8s" : "0s",
                            }}>{navOpen ? <span className="text-2xl  font-bold text-white">< ImCross /></span> : ''}</Link>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#home"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.8s" : "0s",
                            }}
                        >
                            Home
                        </a>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#Project"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "0.9s" : "0s",
                            }}
                        >
                            Projects
                        </a>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#about"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1s" : "0s",
                            }}
                        >
                            About
                        </a>
                        <div className="nav-item-wrapper"></div>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#contact"
                            onClick={() => setNavOpen(!navOpen)}
                            style={{
                                top: navOpen ? "0" : "120px",
                                transitionDelay: navOpen ? "1.1s" : "0s",
                            }}
                        >
                            Contact
                        </a>
                        <div className="nav-item-wrapper"></div>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Nav;

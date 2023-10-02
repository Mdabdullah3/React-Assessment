import React from "react";
import logo from "../assets/logo/logo.png";
import vector from "../assets/logo/Group(1).svg";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-[#361354]">
      <footer className="footer p-10  text-white  w-11/12 md:w-10/12 mx-auto">
        <div>
          <div className="flex items-end gap-5">
            <img src={logo} alt="" />
            <div>
              <h1 className="border-[1px] w-20 border-white"> </h1>
              <img src={vector} className="w-20" alt="" />
            </div>
          </div>
          <div>
            <h1 className="flex items-center gap-3 mt-3">
              <span>
                <FiSmartphone />
              </span>
              13234-774464
            </h1>
            <h1 className="flex items-center gap-3 mt-4">
              <span>
                <AiOutlineMail />
              </span>
              anghorag@support.gmail.com
            </h1>
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-wider mt-4 mb-2">
              Join our social links
            </h1>
            <hr />
            <div className="flex items-center gap-4 mt-4 text-xl">
              <h1 className="text-white bg-primary px-4 py-3 rounded-lg">
                <BsFacebook />
              </h1>
              <h1 className="text-white bg-primary px-4 py-3 rounded-lg">
                <BsLinkedin />
              </h1>
            </div>
          </div>
        </div>

        <nav>
          <header className="footer-title text-primary">Categories</header>
          <a className="link link-hover">Makeup</a>
          <a className="link link-hover">Skin Care</a>
          <a className="link link-hover">Bath and Body</a>
          <a className="link link-hover">Hair Care</a>
          <a className="link link-hover">Sexual Wellness</a>
          <a className="link link-hover">Personal Care</a>
        </nav>
        <nav>
          <header className="footer-title text-primary">Quick Links</header>
          <a className="link link-hover">Others</a>
          <a className="link link-hover">Sellers Pick</a>
          <a className="link link-hover">Campigns</a>
          <a className="link link-hover">Hair Care</a>
        </nav>
        <nav>
          <header className="footer-title text-primary">Support</header>
          <a className="link link-hover">Return Policy</a>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">FAQS</a>
          <a className="link link-hover">FAQS</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
      </footer>
      <hr />
      <h1 className="text-white text-center tracking-wider py-3 text-sm">
        Copyright @ 2023 Anghorag. All Right Reserved
      </h1>
    </div>
  );
};

export default Footer;

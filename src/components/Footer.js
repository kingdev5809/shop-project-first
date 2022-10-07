import React from "react";
import facebokIcon from "../img/facebok.png";
import insagramIcon from "../img/instagram.png";
import twitterIcon from "../img/twitter.png";
import guthubIcon from "../img/github.png";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">KINGs SHOP © {new Date().getFullYear()}</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+998 77 777 77 77</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">support@kingdevshop.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <img src={facebokIcon} alt="" />
            </a>
            <a href="#">
              <img src={insagramIcon} alt="" />{" "}
            </a>
            <a href="#">
              <img src={twitterIcon} alt="" />
            </a>
            <a href="#">
              <img src={guthubIcon} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

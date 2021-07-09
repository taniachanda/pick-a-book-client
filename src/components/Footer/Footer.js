import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="footer-site-logo mb-3 mt-5">
              <h4 className="f-title text-center ">Pick-a-Book</h4>
            </div>
            <ul className="d-flex justify-content-center list-unstyled nav-links mb-3">
              <li className="mx-3" component={Link} to="/">
                Home
              </li>
              <li className="mx-3" component={Link} to="/orderedBook">
                Orders
              </li>
              <li className="mx-3" component={Link} to="/addBooks">
                Admin
              </li>
              <li className="mx-3" component={Link} to="#">
                Deal
              </li>
              <li component={Link} to="/signIn">
                Sign in
              </li>
            </ul>
            <div className="text-center mb-5">
              <h6 style={{ fontWeight: "bold" }}>Stay in tuch</h6>
              <ul className="d-flex justify-content-center list-unstyled nav-links mb-3 mt-3">
                <li className="mx-3 i-icon">
                  <a
                    href="https://www.instagram.com/taniachanda9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <InstagramIcon color="secondary" />
                  </a>
                </li>
                <li className="mx-3 f-icon">
                  <a
                    href="https://www.facebook.com/tania.chanda"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon color="primary" />
                  </a>{" "}
                </li>
                <li className="mx-3 t-icon">
                  <a
                    href="https://twitter.com/TaniaChanda1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                </li>
                <li className="mx-3 p-icon">
                  <PinterestIcon />{" "}
                </li>
              </ul>
            </div>
            <div className="text-center mt-3 mb-3">
              <p>
                {" "}
                <small>
                  Copyright {new Date().getFullYear()} All Rights Reserved By
                  Tania
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

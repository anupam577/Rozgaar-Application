import React from "react";
import "./footer.css";
import logo from "../../assets/logo.svg";
import styled from "styled-components";
import {
  FaEnvelope,
  FaArrowRight,
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaGooglePlusG,
} from "react-icons/fa";

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 2rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
  }
`;

const Footer1 = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="col">
            <Logo>
              <img src={logo} alt="Rozgaar" />
              <h1>Rozgaar</h1>
            </Logo>{" "}
          </div>
          <div className="col">
            <h3>
              Developer{" "}
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>Aman Singh</p>
            <p>+919305656344</p>
            <p>amansingh30008@gmail.com</p>
            <br></br>
            <p>Anupam Singh</p>
            <p>+918619591246</p>
            <p>fracanupam577@gmail.com</p>
          </div>
          <div className="col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About Us</a>
              </li>
              {/* <li>
                <a href="/">Services</a>
              </li> */}
              <li>
                <a href="/jobs">Jobs</a>
              </li>
              {/* <li>
                <a href="/faq">FAQ</a>
              </li> */}
            </ul>
          </div>
          <div className="col">
            <h3>
              Newsletter
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <form className="newsletter">
              <div className="icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                placeholder="Enter your email id"
                name=""
                required
              ></input>
              <button type="submit" name="">
                <div className="arrow">
                  <FaArrowRight />
                </div>
              </button>
            </form>
            <div className="social-icons">
              <a href="/">
                <div className="social-icon">
                  {" "}
                  <FaTwitter />
                </div>
              </a>
              <a href="/">
                <div className="social-icon">
                  <FaInstagram />
                </div>{" "}
              </a>
              <a href="/">
                <div className="social-icon">
                  <FaWhatsapp />
                </div>
              </a>

              <a href="/">
                <div className="social-icon">
                  {" "}
                  <FaFacebook />
                </div>
              </a>

              <a href="/">
                <div className="social-icon">
                  <FaGooglePlusG />
                </div>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright">Rozgaar Copyright &#169; 2023</p>
      </footer>
    </div>
  );
};

export default Footer1;

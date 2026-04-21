import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* <!-- Contact Section Start --> */}
      <section className="contact-section">
        <div className="contact-container">
          <div>
            <h5>Ready to get started?......</h5>
            <h5>Let's talk.......</h5>
          </div>
          <div>
            <button className="btn">
              <ion-icon name="call"></ion-icon>
              <span className="number">12345678912</span>
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Footer Section Start --> */}
      <footer className="footer">
        <div className="footer-info-container pt-5 ps-5 pe-5">
          <div className="footer-content">
            <h4>AtooZ</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quam
              recusandae sed hic. Eos, dolorem!
            </p>
          </div>
          <div className="footer-content">
            <h4>About</h4>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Condition</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-content">
            <h4>Features</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="footer-content">
            <h4>Others</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Est quam
              recusandae sed hic. Eos, dolorem!
            </p>
          </div>
        </div>
        <hr />
        <div className="media-container">
          <div className="copyright">
            <small>Copyright 2026,</small>
            <span>Designed & Developed By</span>
            <span style={{ color: "red" }}>EKATTOR</span>
            <span style={{ color: "green" }}>iT</span>
          </div>
          <div className="social-media">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </div>
  );
};

export default Footer;

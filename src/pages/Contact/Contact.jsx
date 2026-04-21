import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <section className="container mt-5 p-5 contact-page">
        <div className="row ">
          <div className="contact-info col-md-6 text-white rounded-3">
            <div className="text-center mt-3 mb-4 fw-bold">
              <h2>Have Something in Write?</h2>
              <h2>Let's Talk</h2>
            </div>
            <div className="contact-address text-start">
              <p>
                E-commerce content is material businesses create to attract and
                retain potential customers online.
              </p>
              <p>Gulshan</p>
              <p>12345678912</p>
              <p>atooz@gmail.com</p>
            </div>
          </div>
          <div className="contact-form col-md-6 border-0">
            <input type="text" className="w-100" placeholder="Full Name" />
            <br />
            <input type="email" className="w-100" placeholder="Email" />
            <br />
            <input type="text" className="w-100" placeholder="Phone" />
            <br />
            <input type="text" className="w-100" placeholder="Subject" />
            <br />
            <textarea
              rows="4"
              className="w-100 mb-3"
              placeholder="Message"
            ></textarea>
            <br />
            <div className="text-start">
              <button className="bg-danger p-2 border-0 text-white rounded-1 fw-bold">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

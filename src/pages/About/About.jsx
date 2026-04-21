import React from "react";

const About = () => {
  return (
    <div className="about">
      {/* <!-- Collection Section Start --> */}
      <section className="container my-5 about-page">
        <div className="row align-items-center">
          {/* <!-- LEFT CONTENT --> */}
          <div className="col-md-6">
            <div className="collection-description">
              <h2 className="fw-bold">Atooz Collection!</h2>
              <p className="fs-5">Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                mollitia excepturi impedit autem labore dignissimos!
              </p>
              <button className="btn btn-danger px-4 py-2">Shop Now</button>
            </div>
          </div>

          {/* <!-- RIGHT IMAGE DESIGN --> */}
          <div className="col-md-6 position-relative d-flex justify-content-center">
            {/* <!-- Red Background Box --> */}
            <div className="bg-danger position-absolute red-box"></div>

            {/* <!-- Main Image --> */}
            <img
              src="assets/images/atooz-collection.jpg"
              alt=""
              className="img-fluid position-relative main-img"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

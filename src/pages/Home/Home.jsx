import React from "react";
import { FaGift, FaTruck } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";

const Home = () => {
  return (
    <div className="">
      <div className="banner w-100">
        <img className="" src="assets/images/banner.png" alt="" />
      </div>

      {/* <!-- Category Section Start --> */}

      <section className="category-container">
        <div>
          <div className="category-content">
            <img src="assets/images/Bluetooth-Speaker.png" alt="" />
            <h4>Smart Phone</h4>
          </div>
        </div>
        <div>
          <div className="category-content">
            <img src="assets/images/smart-watch.png" alt="" />
            <h4>Smart Watch</h4>
          </div>
        </div>
        <div>
          <div className="category-content">
            <img src="assets/images/watch-strap.png" alt="" />
            <h4>Watch Strap</h4>
          </div>
        </div>
        <div>
          <div className="category-content">
            <img src="assets/images/smart-watch.png" alt="" />
            <h4>Smart Watch</h4>
          </div>
        </div>
        <div>
          <div className="category-content">
            <img src="assets/images/Bluetooth-Speaker.png" alt="" />
            <h4>Smart Phone</h4>
          </div>
        </div>
      </section>

      {/* <!-- Gift/Coupon Card Started --> */}
      <section>
        {/* <div className="d-flex justify-content-evenly pt-4 pb-4 ps-5 pe-5 coupon_card"> */}
        <div className="coupon_card d-md-flex pt-md-4 pb-mb-4 p-md-5 align-items-center justify-content-between">
          <div className="d-flex gap-2">
            <FaGift size={35} style={{ color: "#FD6602" }} />
            <h4>Gift Special</h4>
          </div>

          <div>
            <p>
              Wrap new offers / gift every single day on weekends - New Coupon
              code:
              <span style={{ color: "#FD6602" }}>Ramadan 2026</span>
            </p>
          </div>
          <div className="coupon-btn">
            <button>Get Coupon</button>
          </div>
        </div>
      </section>
      {/* <!-- Gift/Coupon Card End --> */}

      {/* <!-- New Arrival Section Start --> */}
      <section>
        <div className="arrival-container">
          <div className="arrival-content">
            <h3 className="title-primary">New Arrival Products</h3>
            <button className="primary-btn">View All</button>
          </div>
          <div className="arrival-image-container">
            <div className="arrival-images">
              <div>
                <img src="assets/images/watch1.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
            <div className="arrival-images">
              <div>
                <img src="assets/images/watch-2.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
            <div className="arrival-images">
              <div>
                <img src="assets/images/watch-3.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
            <div className="arrival-images">
              <div>
                <img src="assets/images/speaker.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- New Arrival Section End --> */}

      {/* <!-- Top Selling Section Start --> */}
      <section>
        <div className="topSelling-container">
          <div className="topSelling-content">
            <h3 className="title-primary">Top Selling Products</h3>
            <button className="primary-btn">View All</button>
          </div>
          <div className="topSelling-image-container">
            <div className="topSelling-images">
              <div>
                <img src="assets/images/watch1.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
            <div className="topSelling-images">
              <div>
                <img src="assets/images/watch-2.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
            <div className="topSelling-images">
              <div>
                <img src="assets/images/watch-3.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
            <div className="topSelling-images">
              <div>
                <img src="assets/images/speaker.png" alt="" />
              </div>
              <div className="image-content">
                <p>
                  JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight
                  Silver (0 Available)
                </p>
                <h4>3850.00 BDT</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Top Selling Section End --> */}

      {/* <!-- Featured Section Start --> */}
      <section className="featured">
        <h2>Our Featured Products</h2>
        <div className="featured-container">
          <div className="featured-content">
            <div>
              <img src="assets/images/watch1.png" alt="" />
            </div>
            <div className="featured-description">
              <h5>Smart Watch</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/watch-2.png" alt="" />
            </div>
            <div className="featured-description">
              <h5>Smart Watch</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/watch-3.png" alt="" />
            </div>
            <div className="featured-description">
              <h5>Smart Watch</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/speaker-2.jpg" alt="" />
            </div>
            <div className="featured-description">
              <h5>Speaker</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/watch-2.png" alt="" />
            </div>
            <div className="featured-description">
              <h5>Smart Watch</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/speaker.png" alt="" />
            </div>
            <div className="featured-description">
              <h5>Speaker</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/watch1.png" alt="" />
            </div>
            <div className="featured-description">
              <h5>Smart Watch</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/speaker-2.jpg" alt="" />
            </div>
            <div className="featured-description">
              <h5>Speaker</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/speaker-3.jpg" alt="" />
            </div>
            <div className="featured-description">
              <h5>Speaker</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
              <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="featured-content">
            <div>
              <img src="assets/images/watch-3.png" alt="" />
            </div>
            <div className="featured-description">
              <h5>Smart Watch</h5>
              <span className="price-tag">
                <TbCurrencyTaka />
                <span>1200</span>
              </span>
                 <span style={{color: '#fd6602', marginBottom: '10px'}}>
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline />
              </span>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Featured Section End --> */}

      {/* <!-- Delivery & Payment Section Start --> */}

      <section className="payment">
        <div className="d-md-flex justify-content-between align-items-center ps-5 pe-5 pt-3 pb-4">
          <div className=" text-center">
            <FaTruck size={35} color="#fd6602" />
            <h3 className="title-secondary">Super Fast and Free Delivery</h3>
          </div>
          <div className=" text-center">
            <MdConnectWithoutContact size={35} color="#fd6602" />
            <h3 className="title-secondary">Non-Contact Shipping</h3>
          </div>
          <div className=" text-center">
            <GiReceiveMoney size={35} color="#fd6602" />
            <h3 className="title-secondary">Money-back Guaranteed</h3>
          </div>
          <div className=" text-center">
            <RiSecurePaymentLine size={35} color="#fd6602" />
            <h3 className="title-secondary">Super Secure Payment System</h3>
          </div>
        </div>
      </section>

      {/* <!-- Delivery & Payment Section End --> */}

      {/* <!-- Company Section Start --> */}
      <section className="company-container">
        <h2 className="title-primary">Trusted By 100+ Companies</h2>
        <div className="company">
          <img src="assets/images/instagram.jpg" alt="Instagram" />
          <img src="assets/images/tiktok.jpg" alt="Tiktok" />
          <img src="assets/images/youtube.jpg" alt="YouTube" />
          <img src="assets/images/music.jpg" alt="Music" />
          <img src="assets/images/netflix.jpg" alt="Netflix" />
        </div>
      </section>
      {/* <!-- Company Section End --> */}
    </div>
  );
};

export default Home;

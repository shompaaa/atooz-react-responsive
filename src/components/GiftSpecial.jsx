import React from "react";
import { FaGift } from "react-icons/fa";

const GiftSpecial = () => {
  return (
    <div>
      <section>
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
    </div>
  );
};

export default GiftSpecial;

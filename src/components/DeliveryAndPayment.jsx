import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdConnectWithoutContact } from 'react-icons/md';
import { RiSecurePaymentLine } from 'react-icons/ri';

const DeliveryAndPayment = () => {
    return (
        <div>
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
        </div>
    );
};

export default DeliveryAndPayment;
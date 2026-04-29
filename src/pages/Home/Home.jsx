import React from "react";
import HeroBanner from "../../components/HeroBanner";
import Category from "../../components/Category";
import GiftSpecial from "../../components/GiftSpecial";
import NewArrivalProducts from "../../components/NewArrivalProducts";
import TopSellingProducts from "../../components/TopSellingProducts";
import FeaturedProducts from "../../components/FeaturedProducts";
import DeliveryAndPayment from "../../components/DeliveryAndPayment";
import TrustedCompany from "../../components/TrustedCompany";

const Home = () => {
  return (
    <div className="">
      <HeroBanner></HeroBanner>
      <Category></Category>
      <GiftSpecial></GiftSpecial>
      <NewArrivalProducts></NewArrivalProducts>
      <TopSellingProducts></TopSellingProducts>
      <FeaturedProducts></FeaturedProducts>
      <DeliveryAndPayment></DeliveryAndPayment>
      <TrustedCompany></TrustedCompany>
    </div>
  );
};

export default Home;

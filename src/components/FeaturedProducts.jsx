import React from "react";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      image: "assets/images/watch1.png",
      price: 1200,
      stock: 5,
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "assets/images/watch-2.png",
      price: 1000,
      stock: 0,
    },
    {
      id: 3,
      name: "Smart Watch",
      image: "assets/images/watch-3.png",
      price: 900,
      stock: 3,
    },
    {
      id: 4,
      name: "Speaker",
      image: "assets/images/speaker-2.jpg",
      price: 800,
      stock: 0,
    },
    {
      id: 5,
      name: "Smart Watch",
      image: "assets/images/watch-2.png",
      price: 750,
      stock: 10,
    },
    { id: 6, name: "Speaker", image: "assets/images/speaker.png", price: 1200 },
    {
      id: 7,
      name: "Smart Watch",
      image: "assets/images/watch1.png",
      price: 1250,
      stock: 9,
    },
    {
      id: 8,
      name: "Speaker",
      image: "assets/images/speaker-2.jpg",
      price: 1300,
      stock: 12,
    },
    {
      id: 9,
      name: "Speaker",
      image: "assets/images/speaker-3.jpg",
      price: 1500,
      stock: 0,
    },
    {
      id: 10,
      name: "Smart Watch",
      image: "assets/images/watch-3.png",
      price: 1100,
      stock: 1,
    },
  ];

  return (
    <section className="featured">
      <h2>Our Featured Products</h2>

      <div className="featured-container">
        {products.filter((item)=>item.price >= 1000)
        .map((product) => (
          <div className="featured-content" key={product.id}>
            <div>
              <img src={product.image} alt={product.name} />
            </div>

            <div className="featured-description">
              <h5>{product.name}</h5>

              <span className="price-tag">
                <TbCurrencyTaka />
                <span>{product.price}</span>
              </span>

              <div className="flex justify-content-between">
                <span style={{ color: "#fd6602", marginBottom: "10px" }}>
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStar />
                  <IoMdStarHalf />
                  <IoMdStarOutline />
                </span>

                <p>
                  {product.stock > 0 ? (
                    <p className="text-success">{product.stock} available</p>
                  ) : (
                    <small className="text-danger ">Out of Stock</small>
                  )}
                </p>
              </div>

              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

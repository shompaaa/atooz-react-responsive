import React from "react";

const NewArrivalProducts = () => {
  const arrivals = [
    {
      id: 1,
      image: "assets/images/watch1.png",
      title: "JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight Silver",
      price: 3850,
      stock: 0,
    },
    {
      id: 2,
      image: "assets/images/watch-2.png",
      title: "JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight Silver",
      price: 3850,
      stock: 0,
    },
    {
      id: 3,
      image: "assets/images/watch-3.png",
      title: "JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight Silver",
      price: 3850,
      stock: 0,
    },
    {
      id: 4,
      image: "assets/images/speaker.png",
      title: "JOYROOM JR-FC2 Pro Classic Series Smart Watch – Moonlight Silver",
      price: 3850,
      stock: 0,
    },
  ];

  return (
    <section>
      <div className="arrival-container">
        <div className="arrival-content">
          <h3 className="title-primary">New Arrival Products</h3>
          <button className="primary-btn">View All</button>
        </div>

        <div className="arrival-image-container">
          {arrivals.map((item) => (
            <div className="arrival-images" key={item.id}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>

              <div className="image-content">
                <p>
                  {item.title} ({item.stock} Available)
                </p>
                <h4>{item.price} BDT</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalProducts;
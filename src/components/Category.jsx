import React from "react";

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Smart Phone",
      image: "assets/images/Bluetooth-Speaker.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "assets/images/smart-watch.png",
    },
    {
      id: 3,
      name: "Watch Strap",
      image: "assets/images/watch-strap.png",
    },
    {
      id: 4,
      name: "Smart Watch",
      image: "assets/images/smart-watch.png",
    },
    {
      id: 5,
      name: "Smart Phone",
      image: "assets/images/Bluetooth-Speaker.png",
    },
  ];

  return (
    <div>
      <section className="category-container">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="category-content">
              <img src={category.image} alt={category.name} />
              <h4>{category.name}</h4>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Category;
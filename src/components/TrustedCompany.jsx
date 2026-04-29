import React from "react";

const TrustedCompany = () => {
  const companies = [
    { id: 1, name: "Instagram", image: "assets/images/instagram.jpg" },
    { id: 2, name: "Tiktok", image: "assets/images/tiktok.jpg" },
    { id: 3, name: "YouTube", image: "assets/images/youtube.jpg" },
    { id: 4, name: "Music", image: "assets/images/music.jpg" },
    { id: 5, name: "Netflix", image: "assets/images/netflix.jpg" },
  ];

  return (
    <section className="company-container">
      <h2 className="title-primary">Trusted By 100+ Companies</h2>

      <div className="company">
        {companies.map((company) => (
          <img key={company.id} src={company.image} alt={company.name} />
        ))}
      </div>
    </section>
  );
};

export default TrustedCompany;

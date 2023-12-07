import React from "react";

function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Beach House in Collingwood</h1>
        <span className="rating">⭐ 4.89 (128)</span>
        <span className="location">Collingwood, Ontario</span>
        <button className="availability-button">Check availability</button>
      </header>
      <section className="description">
        <p>
          This sunny and spacious room is for those traveling light and looking
          for a comfy and cosy place to lay their head for a night or two. This
          beach house sits in a vibrant neighborhood littered with cafes, pubs,
          restaurants, and supermarkets and is close to all the major
          attractions such as Edinburgh Castle and Arthur's Seat.
        </p>
      </section>
      <section className="images">
        <img src="path-to-your-beach-house-image.jpg" alt="Beach House" />
        <div className="image-grid">
          <img src="path-to-interior-image.jpg" alt="Interior" />
        </div>
      </section>
    </div>
  );
}

export default Home;

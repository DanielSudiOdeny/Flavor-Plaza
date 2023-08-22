import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductListing from "../components/ProductListing";
import "../styles/home-page.css";
import Footer from "../components/Footer";

const HomePage = () => {
  const [featuredResaurant, setFeaturedRestaurants] = useState([]);
  const [popularCategories, setPopularCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featuredRestaurants")
      .then((response) => response.json())
      .then((data) => setFeaturedRestaurants(data))
      .catch((error) =>
        console.error("Error fetching featured products:", error)
      );

    fetch(" http://localhost:5000/categories")
      .then((response) => response.json())
      .then((data) => setPopularCategories(data))
      .catch((error) =>
        console.error("Error fetching popular categories:", error)
      );
  }, []);

  return (
    <div className="home-page">
      <header>
        <Navbar />
      </header>
      <div className="hero-section">
        <h1>Welcome To Flavor Plaza !</h1>
        <p>Discover the best deals on a wide range of meals.</p>
        <Link to="/products" className="restaurant-home-btn">
          View Restaurants
        </Link>
      </div>
      <section className="popular-categories">
        <h2>Popular Categories</h2>
        <Sidebar categories={popularCategories} />
      </section>
      <section className="featured-restaurants">
        <h2>Featured Restaurants</h2>
        <ProductListing products={featuredResaurant} />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;

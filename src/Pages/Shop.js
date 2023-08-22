import React, { useState, useEffect } from "react";
import ProductListing from "../components/ProductListing";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";
import Footer from "../components/Footer";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/categories=${selectedCategory}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="shop-page">
      <header></header>
      <div className="content-container">
        <Sidebar onCategoryChange={handleCategoryChange} />
        <div className="product-listing-container">
          <h2>Shop</h2>
          <ProductListing products={products} />
        </div>
      </div>
      <Cart />
      <Footer />
    </div>
  );
};

export default Shop;

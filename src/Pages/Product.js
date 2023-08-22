import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import Sidebar from "./Sidebar";
import Cart from "./Cart";
import Footer from "./Footer";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product data from your backend or API
        // Replace this with your actual fetch code
        const response = await fetch(`http://localhost:5000/products${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return (
    <div className="product-page">
      <header>
        <Navbar />
      </header>
      <div className="content-container">
        <Sidebar />
        <div className="product-details-container">
          {product ? <ProductDetails product={[product]} /> : <p>Loading...</p>}
        </div>
      </div>
      <Cart />
      <Footer />
    </div>
  );
};

export default ProductPage;

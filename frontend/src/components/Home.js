import React from "react";
import { useEffect, useState } from "react";
import CreateArea from "./CreateArea";
import Product from "./Product";

function Home() {
  const [productsArray, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const response = await fetch("http://localhost:4000/");
      const products = await response.json();

      // Populate the productsArray with the fetched data
      setProducts(products);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    // Call the function through the ref
    fetchProducts();
  }, []);

  return (
    <div>
      <CreateArea />
      {productsArray.length > 0 ? (
        productsArray.map((product) => {
          return (
            <Product
              key={product.productId}
              productId={product.productId}
              productName={product.productName}
              productPrice={product.productPrice}
              productQuantity={product.productQuantity}
            />
          );
        })
      ) : (
        <center>
          <p>Add Products To List Them Below</p>
        </center>
      )}
    </div>
  );
}

export default Home;

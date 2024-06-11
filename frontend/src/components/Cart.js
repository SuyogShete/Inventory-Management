import React from "react";
import { useState, useEffect } from "react";

export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [discount, setDiscount] = useState(0);

  async function fetchCartProducts() {
    try {
      const response = await fetch("http://localhost:4000/cart");
      const products = await response.json();

      // Populate the productsArray with the fetched data
      setCartProducts(products);
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  const calculateTotalPrice = () => {
    let total = cartProducts.reduce((sum, item) => sum + item.productPrice, 0);

    return total - (total * discount) / 100;
  };

  useEffect(() => {
    // Call the function through the ref
    fetchCartProducts();
  }, []);

  const handleDiscountChange = (event) => {
    const { value } = event.target;
    setDiscount(value);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.productQuantity}</td>
              <td>${product.productPrice}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">
              <strong>Total Price</strong>
            </td>
            <td className="total-price">${totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <div className="discount-container">
        <label htmlFor="discount">Discount : </label>
        <select id="discount" value={discount} onChange={handleDiscountChange}>
          <option value="0">0%</option>
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="15">15%</option>
          <option value="20">20%</option>
        </select>
      </div>
    </div>
  );
};

export default Cart;

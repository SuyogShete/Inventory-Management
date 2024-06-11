import React from "react";

function Product(props) {
  const onDeleteProduct = async () => {
    console.log("Delete function called");

    const productId = props.productId;
    const productQuantity = props.productQuantity;

    console.log(productId);
    console.log(productQuantity);

    try {
      const response = await fetch(
        `https://inventory-management-1-8cbo.onrender.com/delete-product/delete-product/${productId}/${productQuantity}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Successfully deleted product");
        window.location.reload();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const onAddProductToCart = async () => {
    const productId = props.productId;
    const productName = props.productName;
    const productQuantity = props.productQuantity;
    const productPrice = props.productPrice;

    const cartProduct = {
      productId: productId,
      productName: productName,
      productQuantity: productQuantity,
      productPrice: productPrice,
    };
    try {
      const response = await fetch(
        `https://inventory-management-1-8cbo.onrender.com/cart/add-product/${productId}/${productQuantity}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(cartProduct),
        }
      );

      if (response.ok) {
        alert("Successfully added product to cart");
        window.location.reload();
      } else {
        console.error("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <div className="note">
      <h1>Product Id = {props.productId}</h1>
      <h1>Name = {props.productName}</h1>
      <p>Quantity = {props.productQuantity}</p>
      <p>Total Price = {props.productPrice}</p>
      <button onClick={onDeleteProduct}>Delete</button>
      <button onClick={onAddProductToCart}>Cart</button>
    </div>
  );
}

export default Product;

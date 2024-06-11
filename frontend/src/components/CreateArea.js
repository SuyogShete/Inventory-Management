import React from "react";
import { useState } from "react";

function CreateArea() {
  const [newProduct, setNewProduct] = useState({
    productId: "",
    productName: "",
    productQuantity: "",
    productPricePerUnit: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNewProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  }

  function submitProduct(event) {
    event.preventDefault();
    onAddProduct(newProduct);
  }

  const onAddProduct = async (product) => {
    const { productId, productName, productQuantity, productPricePerUnit } =
      product;

    if (
      !productName ||
      !productPricePerUnit ||
      !productQuantity ||
      !productId
    ) {
      alert("Input feild of form cannot be empty");
      return;
    }

    const newProduct = { productName, productPricePerUnit };

    try {
      const response = await fetch(
        `http://localhost:4000/add-product/${productId}/${productQuantity}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newProduct),
        }
      );

      if (response.ok) {
        alert("Successfully added product");
        setNewProduct({
          productId: "",
          productName: "",
          productQuantity: "",
          productPricePerUnit: "",
        });

        window.location.reload();
      } else {
        console.error(response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form>
        <input
          name="productId"
          placeholder="Enter Product Id"
          onChange={handleChange}
          value={newProduct.productId}
          type="number"
        />
        <input
          name="productName"
          placeholder="Enter Product Name"
          onChange={handleChange}
          value={newProduct.productName}
        />
        <input
          name="productQuantity"
          placeholder="Enter Product Quantity"
          onChange={handleChange}
          value={newProduct.productQuantity}
          type="number"
        />
        <input
          name="productPricePerUnit"
          placeholder="Enter Product Price Per Quantity"
          onChange={handleChange}
          value={newProduct.productPricePerUnit}
          type="number"
        />
        <button onClick={submitProduct}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

import React from "react";
import { useAddNewProductMutation } from "../Redux/service/dummyData";

const AddNewProduct = () => {
  const [AddNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();

  if (error) {
    return <h1>ERROR</h1>;
  }

  if (isLoading) {
    <>Loading...</>;
  }

  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-Shirt",
        description: "This is one of the best and amazing",
      };

      await AddNewProduct(newProductData);
    } catch (err) {
      console.log("Error adding new product:", err);
    }
  };

  return (
    <div>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add New Product
      </button>
    </div>
  );
};

export default AddNewProduct;

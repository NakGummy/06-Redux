import React from "react";
import { useUpdateProductMutation } from "../Redux/service/dummyData";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();

  if (error) {
    <h1>ERROR</h1>;
  }

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductDate = {
        title: "Title Updated",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductDate,
      });
    } catch (e) {
      console.error("Error updating product:", e);
    }
  };

  return (
    <>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </>
  );
};

export default UpdateProduct;

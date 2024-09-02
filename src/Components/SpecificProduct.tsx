import React from "react";
import { useGetProductByIdQuery } from "../Redux/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2);

  console.log(data);

  if (isError) {
    return <h1>OoooohhNooooo we got an error</h1>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};

export default SpecificProduct;

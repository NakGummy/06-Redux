import React from "react";
import { useGetAllProductQuery } from "../Redux/service/dummyData";

const AllProducts = () => {
  const res = useGetAllProductQuery();
  const { data, isError, isLoading } = useGetAllProductQuery();
  console.log(data);

  if (isError) {
    return <h1>OoooohhNooooo we got an error</h1>;
  }

  if (isLoading) {
    return <>"Loading..."</>;
  }

  console.log(res);

  return (
    <>
      {data?.products.map((p) => (
        <>
          <div key={p.id}>{p.title}</div>
          <p key={p.id}>{p.description}</p>
        </>
      ))}
    </>
  );
};

export default AllProducts;

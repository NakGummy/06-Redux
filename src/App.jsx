import React from "react";
import AllProducts from "./Components/AllProducts";
import SpecificProduct from "./Components/SpecificProduct";
import AddNewProduct from "./Components/AddNewProduct";
import UpdateProduct from "./Components/UpdateProduct";
import Counter from "./Components/Counter";

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      {/* <AddNewProduct /> */}
      <UpdateProduct productId={1} />
    </div>
  );
};

export default App;

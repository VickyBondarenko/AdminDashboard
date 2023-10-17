import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import AllProducts from "../components/Products/AllProducts";
import { selectProducts } from "../redux/products/productsSelector";

import {
  fetchSearchedProducts,
  getAllProducts,
} from "../redux/products/productsThunk";

const AllProductsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector(selectProducts);
  console.log("data", data);

  const fetchData = (params) => {
    dispatch(fetchSearchedProducts(params));
  };
  return (
    <>
      <div className="px-5 py-6 ">
        AllProductsPage
        <FilterForm
          page={"1"}
          limit={"5"}
          placeholder={"Product Name"}
          fetchData={fetchData}
        />
        <AllProducts data={data} />
      </div>
    </>
  );
};

export default AllProductsPage;

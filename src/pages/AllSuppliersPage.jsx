import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import AllSuppliers from "../components/Suppliers/AllSuppliers";
import { selectSuppliers } from "../redux/suppliers/suppliersSelector";
import {
  fetchSearchedSuppliers,
  getAllSuppliers,
} from "../redux/suppliers/suppliersThunk";

const AllSuppliersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSuppliers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector(selectSuppliers);
  console.log("data", data);

  const fetchData = (params) => {
    dispatch(fetchSearchedSuppliers(params));
  };

  return (
    <>
      <div className="px-5 py-6 ">
        SuppliersPage
        <FilterForm
          page={"1"}
          limit={"5"}
          placeholder={"User Name"}
          fetchData={fetchData}
        />
        <AllSuppliers data={data} />
      </div>
    </>
  );
};

export default AllSuppliersPage;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllCustomers from "../components/Customers/AllCustomers";
import FilterForm from "../components/FilterForm";
import { selectCustomers } from "../redux/customers/customersSelector";
import {
  getAllCustomers,
  fetchSearchedCustomers,
} from "../redux/customers/customersThunk";

const CustomersDataPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCustomers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector(selectCustomers);
  console.log("data", data);

  const fetchData = (params) => {
    dispatch(fetchSearchedCustomers(params));
  };

  return (
    <>
      <div className="px-5 py-6 ">
        CustomersPage
        <FilterForm
          page={"1"}
          limit={"5"}
          placeholder={"User Name"}
          fetchData={fetchData}
        />
        <AllCustomers data={data} />
      </div>
    </>
  );
};

export default CustomersDataPage;

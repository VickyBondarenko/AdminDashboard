import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import AllOrders from "../components/Orders/AllOrders";
import { selectOrders } from "../redux/orders/ordersSelector";
import { getAllOrders, fetchSearchedOrders } from "../redux/orders/ordersThunk";

const AllOrdersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector(selectOrders);
  console.log("data", data);

  const fetchData = (params) => {
    dispatch(fetchSearchedOrders(params));
  };

  return (
    <>
      <div className="px-5 py-6 ">
        AllOrdersPage
        <FilterForm
          page={"1"}
          limit={"5"}
          placeholder={"User Name"}
          fetchData={fetchData}
        />
        <div>
          <AllOrders data={data} />
        </div>
      </div>
    </>
  );
};

export default AllOrdersPage;

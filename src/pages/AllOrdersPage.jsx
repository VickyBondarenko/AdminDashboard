import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/Fiter/FilterForm";
import FilterPlug from "../components/Fiter/FilterPlug";
import { Loader } from "../components/Loader";
import AllOrders from "../components/Orders/AllOrders";
import { Pagination } from "../components/Pagination/Pagination";
import {
  getIsLoading,
  selectOrders,
  selectTotalPages,
} from "../redux/orders/ordersSelector";
import { getAllOrders, fetchSearchedOrders } from "../redux/orders/ordersThunk";

const AllOrdersPage = () => {
  const [page, setPage] = useState(1);
  const [wordQuery, setWordQuery] = useState("");
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const limit = "5";

  useEffect(() => {
    if (wordQuery === "") {
      dispatch(getAllOrders({ page, limit }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const data = useSelector(selectOrders);
  const isLoading = useSelector(getIsLoading);

  const fetchData = (params) => {
    dispatch(fetchSearchedOrders(params));
  };
  const fetchAlldata = () => {
    dispatch(getAllOrders({ page, limit }));
  };

  const onChangePage = (currentPage) => {
    const number = Number(currentPage);

    const element = document.getElementById("ahcnor1");
    if (element) {
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    setPage(number);
  };

  return (
    <>
      {isLoading && (
        <div className="w-screenMinusSideBar h-screenMinusHeader flex justify-center items-center border-l border-borderLight">
          <Loader />
        </div>
      )}
      {!isLoading && (
        <div className="pl-10 pb-10 border-l border-borderLight">
          <FilterForm
            page={page}
            limit={"5"}
            placeholder={"User Name"}
            fetchData={fetchData}
            fetchAlldata={fetchAlldata}
            onChangePage={setPage}
            onChangeWordQuery={setWordQuery}
          />
          {data.length === 0 ? (
            <FilterPlug />
          ) : (
            <>
              <AllOrders data={data} />

              {totalPages !== 1 && totalPages && (
                <Pagination
                  totalPages={totalPages}
                  currentpage={page}
                  onChangePage={onChangePage}
                />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AllOrdersPage;

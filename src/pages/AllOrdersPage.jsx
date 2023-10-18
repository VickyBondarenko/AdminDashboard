import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterForm from "../components/FilterForm";
import AllOrders from "../components/Orders/AllOrders";
import { Pagination } from "../components/Pagination/Pagination";
import { selectOrders, selectTotalPages } from "../redux/orders/ordersSelector";
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

  const fetchData = (params) => {
    dispatch(fetchSearchedOrders(params));
  };

  const onChangePage = (currentPage) => {
    if (currentPage !== "...") {
      const number = Number(currentPage);

      const element = document.getElementById("ahcnor1");
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }

      setPage(number);
    }
  };

  return (
    <>
      <div className="pl-10 ">
        <FilterForm
          page={page}
          limit={"5"}
          placeholder={"User Name"}
          fetchData={fetchData}
          onChangePage={setPage}
          on
          onChangeWordQuery={setWordQuery}
        />

        <AllOrders data={data} />

        {totalPages !== 1 && totalPages && (
          <Pagination
            totalPages={totalPages}
            currentpage={page}
            onChangePage={onChangePage}
          />
        )}
      </div>
    </>
  );
};

export default AllOrdersPage;

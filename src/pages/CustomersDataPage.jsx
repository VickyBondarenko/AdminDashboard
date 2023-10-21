import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllCustomers from "../components/Customers/AllCustomers";
import FilterForm from "../components/FilterForm";
import FilterPlug from "../components/FilterPlug";
import { Pagination } from "../components/Pagination/Pagination";
import {
  selectCustomers,
  selectTotalPages,
} from "../redux/customers/customersSelector";
import {
  getAllCustomers,
  fetchSearchedCustomers,
} from "../redux/customers/customersThunk";

const CustomersDataPage = () => {
  const [page, setPage] = useState(1);
  const [wordQuery, setWordQuery] = useState("");
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();
  const limit = "5";

  useEffect(() => {
    if (wordQuery === "") {
      dispatch(getAllCustomers({ page, limit }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const data = useSelector(selectCustomers);

  const fetchData = (params) => {
    dispatch(fetchSearchedCustomers(params));
  };
  const fetchAlldata = (params) => {
    dispatch(getAllCustomers(params));
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
      <div className="px-10  ">
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
            <AllCustomers data={data} />

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
    </>
  );
};

export default CustomersDataPage;

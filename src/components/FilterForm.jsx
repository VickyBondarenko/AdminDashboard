import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

// import { selectedQuery } from "redux/search/searchSelector";

// import {
//   fetchAllSearchedIngredient,
//   fetchAllSearchedTitle,
// } from "redux/search/searchThunks";
import { useState } from "react";
import { fetchSearchedOrders } from "../redux/orders/ordersThunk";
import { fetchSearchedCustomers } from "../redux/customers/customersThunk";
import { selectOrders } from "../redux/orders/ordersSelector";

const FilterForm = ({ placeholder, page, limit, fetchData }) => {
  const [wordQuery, setWordQuery] = useState("");
  const dispatch = useDispatch();
  //   const query = useSelector(selectedQuery);
  let params = {
    wordQuery,
    page,
    limit,
  };
  const data = useSelector(selectOrders);

  // useEffect(() => {
  //   if (wordQuery === "") {
  //     return;
  //   }
  //   if (!wordQuery === "") {
  //     dispatch(search(params));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [page, limit, wordQuery]);

  const fetchSearchData = () => {
    console.log("wordQuery", wordQuery === "");
    // switch (search) {
    //   case "orders":
    //     dispatch(fetchSearchedOrders(params));
    //     break;

    //   case "customers":
    //     dispatch(fetchSearchedCustomers(params));
    //     break;

    //   default:
    //     console.log("Invalid subscription type");
    // }
    fetchData(params);
    // dispatch(search(params));
  };

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();

    if (wordQuery.trim() === "") {
      toast.warn("Enter your query");
      return;
    }

    fetchSearchData();
    console.log("data", data);
  };

  //   console.log("data", data);
  const handleInputChange = (e) => {
    setWordQuery(e.target.value);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <ToastContainer />
      <input
        className=""
        type="text"
        placeholder={placeholder}
        value={wordQuery}
        name="searchInput"
        onChange={handleInputChange}
      />
      <button className="" type="submit">
        Search
      </button>
    </form>
  );
};

export default FilterForm;

import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import IconsSVG from "../assets/svg/symbol-defs.svg";

import { selectOrders } from "../redux/orders/ordersSelector";

const FilterForm = ({
  placeholder,
  page,
  limit,
  fetchData,
  onChangePage,
  onChangeWordQuery,
}) => {
  const [wordQuery, setWordQuery] = useState("");

  let params = {
    wordQuery,
    page,
    limit,
  };
  // const data = useSelector(selectOrders);

  useEffect(() => {
    if (wordQuery === "") {
      return;
    }
    if (!wordQuery == "") {
      fetchData(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  const fetchSearchData = () => {
    fetchData({ wordQuery, page: 1, limit });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (wordQuery.trim() === "") {
      toast.warn("Enter your query");
      return;
    }
    onChangePage(1);
    fetchSearchData();
  };

  const handleInputChange = (e) => {
    setWordQuery(e.target.value);
    onChangeWordQuery(e.target.value);
  };

  return (
    <form
      className="flex flex-row pt-10 md:pt-[50px] xl:pt-[76px] md:pb-5"
      onSubmit={handleSubmit}
    >
      <ToastContainer />
      <input
        className="py-[13px] px-[18px] bg-white border border-borderLight rounded-[60px] placeholder:text-customXs mr-2 md:mr-[14px] "
        type="text"
        placeholder={placeholder}
        value={wordQuery}
        name="searchInput"
        onChange={handleInputChange}
      />
      <button
        className="bg-accent gap-2 flex flex-row items-center py-[13px] px-[30px] text-white text-customXs md:text-customS font-medium rounded-[60px]"
        type="submit"
      >
        <svg className=" w-[14px] h-[14px] stroke-white fill-accent">
          <use xlinkHref={`${IconsSVG}#icon-filter`} />
        </svg>
        Filter
      </button>
    </form>
  );
};

export default FilterForm;
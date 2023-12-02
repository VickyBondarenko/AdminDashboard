import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import IconsSVG from "../../assets/svg/symbol-defs.svg";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

const StyledDatepicker = ({ initialDate, setSelectedOption }) => {
  const startDateValue =
    initialDate instanceof Date ? initialDate : new Date(initialDate);
  const [startDate, setStartDate] = useState(startDateValue);

  console.log("startDate", startDate);

  useEffect(() => {
    const formattedDate = format(startDate, "MMMM d, yyyy");
    setSelectedOption(formattedDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);

  const handleChange = (date) => {
    console.log("date", date);
    setStartDate(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      calendarStartDay={1}
      dateFormat="MMMM d, yyyy"
      showIcon
      icon={
        <svg
          className={`absolute     top-[8px]
    right-[12px]   w-5 h-5  stroke-accent fill-whiteText hover:stroke-black  cursor-pointer`}
        >
          <use xlinkHref={`${IconsSVG}#icon-calendar`} />
        </svg>
      }
    />
  );
};

export default StyledDatepicker;

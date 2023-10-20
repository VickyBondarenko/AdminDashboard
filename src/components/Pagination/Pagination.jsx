// import style from "./Pagination.module.scss";
import { useEffect, useState } from "react";

export const Pagination = ({ onChangePage, totalPages, currentpage }) => {
  const [isActive, setIsActive] = useState(currentpage);
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setIsActive(currentpage);
  }, [currentpage]);

  const onClick = (e) => {
    setIsActive(Number(e.target.innerText));
  };

  return (
    <div className="flex flex-row gap-4 w-[375px] md:w-[789px] xl:w-full justify-center pt-5 pb-10">
      {pages.map((page, index) => (
        <p
          className={`w-3 h-3 rounded-full text-[1px]  ${
            isActive === page
              ? "bg-accent text-accent"
              : "bg-greenLight text-greenLight"
          }`}
          key={index}
          currentpage={currentpage}
          onClick={(e) => {
            onChangePage(e.target.innerText);
            onClick(e);
          }}
        >
          {page}
        </p>
      ))}
    </div>
  );
};

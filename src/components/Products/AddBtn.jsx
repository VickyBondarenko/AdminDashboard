import IconsSVG from "../../assets/svg/symbol-defs.svg";

export const AddBtn = () => {
  return (
    <button type="button" className=" flex gap-2 items-center pb-5">
      <div className="p-[13px] bg-accent rounded-full">
        <svg className=" w-4 h-4  stroke-white fill-white ">
          <use xlinkHref={`${IconsSVG}#icon-plus`} />
        </svg>
      </div>

      <span className="text-customS font-medium">Add a new product</span>
    </button>
  );
};

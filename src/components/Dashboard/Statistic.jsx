import IconsSVG from "../../assets/svg/symbol-defs.svg";

const Statistic = ({ title, count, icon }) => {
  return (
    <>
      <div className=" bg-white w-[157px] xl:w-[240px] h-[100px] p-[14px] border border-borderLight hover:border-accent focus:border-accent rounded-lg flex flex-col gap-8">
        <div className="flex flex-row gap-2">
          <svg className=" w-[18px] h-[18px] fill-white stroke-black">
            <use xlinkHref={`${IconsSVG}#${icon}`} />
          </svg>
          <h3 className="text-customXxs text-lighterText">{title}</h3>
        </div>
        <div className="text-customMd font-semibold">{count}</div>
      </div>
    </>
  );
};

export default Statistic;

import IconsSVG from "../../assets/svg/symbol-defs.svg";

const LogOutBtn = () => {
  return (
    <>
      <div className="p-[14px] rounded-full bg-accent ">
        <svg width="16" height="16" fill="white">
          <use xlinkHref={`${IconsSVG}#icon-logout`} />
        </svg>
      </div>
    </>
  );
};

export default LogOutBtn;

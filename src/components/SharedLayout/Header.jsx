import Logo from "../../assets/image/logo.png";
import IconsSVG from "../../assets/svg/symbol-defs.svg";

const Header = () => {
  return (
    <>
      <div className="py-6 px-5 flex flex-row items-center gap-5 border-b border-borderLight w-screen ">
        <svg width="32" height="32" stroke="#1D1E21" fill="#1D1E21">
          <use xlinkHref={`${IconsSVG}#icon-menu-burger`} />
        </svg>
        <img className="  w-11 h-11" src={Logo} alt="Logo" />
        <p className="font-semibold text-mainText">E-Pharmacy</p>
      </div>
    </>
  );
};

export default Header;

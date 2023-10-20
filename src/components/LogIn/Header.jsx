import Logo from "../../assets/image/image-logo-auth.png";

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-[14px]">
        {" "}
        <img className="  w-11 h-11" src={Logo} alt="Logo" />
        <p className="font-semibold text-mainText md:text[20px]">E-Pharmacy</p>
      </div>
    </>
  );
};

export default Header;

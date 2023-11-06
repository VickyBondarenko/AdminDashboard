import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";
import IconsSVG from "../../assets/svg/symbol-defs.svg";
import LogOutBtn from "./LogOutBtn";
import { selectUserEmail } from "../../redux/auth/authSelector";

import SubTitle from "./SubTitle";
import { useEffect, useState } from "react";
import SideBarMenu from "./SideBarMenu";
import Title from "./Title";
import { getCurrentUser } from "../../redux/auth/authThunk";

const Header = () => {
  const [isSideBarMenuOpen, setIsSideBarMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();

  const userEmail = useSelector(selectUserEmail);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  let locationText;
  const pageName = location.pathname;

  switch (pageName) {
    case "/dashboard":
      locationText = "Dasboard";
      break;

    case "/orders":
      locationText = "All orders";
      break;

    case "/products":
      locationText = "All products";
      break;

    case "/suppliers":
      locationText = "All suppliers";
      break;

    case "/customers":
      locationText = "All customers";
      break;

    default:
      console.log("Invalid subscription type");
  }

  const handleOpenSideBarMenu = () => {
    setIsSideBarMenuOpen(true);
  };

  return (
    <>
      <div className="py-6 px-5 flex flex-row items-center gap-5 border-b border-borderLight w-screenMinusScroll justify-between">
        <div className=" flex flex-row items-center gap-5">
          {!isDesktop && (
            <>
              <svg
                className="w-8 h-8 fill-black stroke-black"
                width="32"
                height="32"
                stroke="#1D1E21"
                fill="#1D1E21"
                onClick={handleOpenSideBarMenu}
              >
                <use xlinkHref={`${IconsSVG}#icon-menu-burger`} />
              </svg>
              <SideBarMenu
                isOpen={isSideBarMenuOpen}
                setIsOpen={setIsSideBarMenuOpen}
              />
            </>
          )}
          <Link to="/dashboard">
            <img className="w-10 h-10" src={Logo} alt="Logo" />
          </Link>

          <div>
            <Title />
            <div className="flex flex-row items-center">
              <SubTitle text={locationText} />
              <div className="border-r h-3  border-lighterText mx-2"></div>
              <SubTitle text={userEmail} />
            </div>
          </div>
        </div>

        {isDesktop && <LogOutBtn />}
      </div>
    </>
  );
};

export default Header;

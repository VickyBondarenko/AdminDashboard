import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";
import IconsSVG from "../../assets/svg/symbol-defs.svg";
import LogOutBtn from "./LogOutBtn";
import { selectUserEmail, selectUserId } from "../../redux/auth/authSelector";
import { logoutUser } from "../../redux/auth/authThunk";
import SubTitle from "./SubTitle";

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const userId = useSelector(selectUserId);
  const userEmail = useSelector(selectUserEmail);

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  let locationText;
  const pageName = location.pathname;
  console.log("pageName", pageName);

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

  const handleLogOut = () => {
    dispatch(logoutUser(userId));
  };

  return (
    <>
      <div className="py-6 px-5 flex flex-row items-center gap-5 border-b border-borderLight w-screen justify-between">
        <div className=" flex flex-row items-center gap-5">
          {!isDesktop && (
            <svg width="32" height="32" stroke="#1D1E21" fill="#1D1E21">
              <use xlinkHref={`${IconsSVG}#icon-menu-burger`} />
            </svg>
          )}
          <Link to="/dashboard">
            <img className="  w-11 h-11" src={Logo} alt="Logo" />
          </Link>

          <div>
            <h2 className="font-semibold text-mainText">Medicine store</h2>
            <div className="flex flex-row items-center">
              <SubTitle text={locationText} />
              <div className="border-r h-3  border-lighterText mx-2"></div>
              <SubTitle text={userEmail} />
            </div>
          </div>
        </div>

        {isDesktop && (
          <div onClick={handleLogOut}>
            <LogOutBtn />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

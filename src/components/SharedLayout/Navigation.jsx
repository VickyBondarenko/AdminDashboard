import { Link, useLocation } from "react-router-dom";
import IconsSVG from "../../assets/svg/symbol-defs.svg";

const Navigation = () => {
  const location = useLocation();
  const navList = [
    { iconName: `${IconsSVG}#icon-dashboard`, route: "/dashboard" },
    { iconName: `${IconsSVG}#icon-shopping-cart`, route: "/orders" },
    { iconName: `${IconsSVG}#icon-products`, route: "/products" },
    { iconName: `${IconsSVG}#icon-suppliers`, route: "/suppliers" },
    { iconName: `${IconsSVG}#icon-customers`, route: "/customers" },
  ];

  return (
    <>
      <nav>
        <ul className="flex flex-col gap-[14px] md:gap">
          {navList.map((item, index) => (
            <li key={index} className="">
              <Link to={`${item.route}`}>
                <div className="p-3 md:p-[14px] rounded-full bg-white group ">
                  <svg
                    className={`w-[14px] md:w-4 h-[14px] md:h-4
                     ${
                       item.route === location.pathname
                         ? "fill-accent"
                         : "fill-iconGrey"
                     }
                      group-hover:fill-accent`}
                  >
                    <use xlinkHref={item.iconName} />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;

import IconsSVG from "../../assets/svg/symbol-defs.svg";
import { logoutUser } from "../../redux/auth/authThunk";
import { useDispatch, useSelector } from "react-redux";
import { selectUserId } from "../../redux/auth/authSelector";

const LogOutBtn = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const handleLogOut = () => {
    dispatch(logoutUser(userId));
  };

  return (
    <>
      <div
        onClick={handleLogOut}
        className="p-[13px] rounded-full bg-accent border border-inherit cursor-pointer group hover:bg-white hover:border hover:border-accent"
      >
        <svg className=" w-4 h-4 fill-white group-hover:fill-accent">
          <use xlinkHref={`${IconsSVG}#icon-logout`} />
        </svg>
      </div>
    </>
  );
};

export default LogOutBtn;

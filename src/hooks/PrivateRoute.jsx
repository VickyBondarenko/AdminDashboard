import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/authSlice/authSelectors";
import { useSelector } from "./reduxHooks";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  return !isLoggedIn ? <Navigate to="/welcome" /> : children;
};
export default PrivateRoute;

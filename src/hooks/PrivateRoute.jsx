import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  return !isLoggedIn ? <Navigate to="/login" /> : children;
};
export default PrivateRoute;

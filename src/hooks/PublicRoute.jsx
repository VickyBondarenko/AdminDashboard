import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../redux/auth/authSelector";
import { useSelector } from "react-redux";

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  return isLoggedIn ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;

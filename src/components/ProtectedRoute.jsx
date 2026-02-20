import { Navigate } from "react-router-dom";
import { useCart } from "./CartContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useCart();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
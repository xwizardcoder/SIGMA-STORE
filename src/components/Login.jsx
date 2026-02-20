import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useCart();
  const navigate = useNavigate();

  const login = () => {
    setUser(true);
    navigate("/checkout");
  };

  return (
    <div className="flex items-center justify-center h-96 bg-purple-400 h-[88vh]">
      <button
        onClick={login}
        className="bg-white px-6 py-3 rounded hover:bg-purple-600 hover:text-white"
      >
        Login as Guest
      </button>
    </div>
  );
};

export default Login;
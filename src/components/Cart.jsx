




import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, totalPrice, user } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (user) {
      navigate("/checkout");
    } else {
      alert("Please login as guest to continue.");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 md:p-8">
           
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        
           Your Cart
        </h2>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
           
            Your cart is empty.
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4"
                >
                  <div>
                    <h4 className="font-semibold text-gray-700">
                      {item.title}
                    </h4>
                    <p className="text-gray-500">${item.price}</p>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                Total:
              </h3>
              <span className="text-2xl font-bold text-green-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-6 bg-black hover:bg-gray-800 text-white py-3 rounded-xl text-lg font-semibold transition duration-200"
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
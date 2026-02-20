import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleOrder = () => {
    setOrderPlaced(true);
    clearCart();
    setTimeout(() => navigate("/"), 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white shadow-lg rounded-xl p-10 text-center">
          <h1 className="text-2xl font-bold text-green-600">
             Order Placed Successfully!
          </h1>
          <p className="text-gray-500 mt-2">
            Redirecting to homepage...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        
        <div className="md:col-span-2 space-y-6">
          
          <h2 className="text-2xl font-bold text-gray-800">
            Checkout
          </h2>

          {cart.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <p className="text-gray-600 mb-4">
                Your cart is empty.
              </p>
              <Link
                to="/shop"
                className="bg-black text-white px-6 py-2 rounded-lg"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow divide-y">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 object-contain bg-gray-100 p-2 rounded"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-800 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Delivery in 5-7 days
                    </p>
                  </div>

                  <div className="font-semibold text-gray-900">
                    ${item.price}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        
        {cart.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6 h-fit sticky top-24">
            
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-3">
              PRICE DETAILS
            </h3>

            <div className="space-y-3 mt-4 text-sm">
              <div className="flex justify-between">
                <span>Price ({cart.length} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">FREE</span>
              </div>

              <div className="flex justify-between font-semibold border-t pt-3 text-base">
                <span>Total Amount</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleOrder}
              className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition"
            >
              PLACE ORDER
            </button>

            <p className="text-xs text-gray-500 mt-4">
              Safe and secure payments. Easy returns.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
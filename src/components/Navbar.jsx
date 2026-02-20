// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "./CartContext";

// const Navbar = () => {
//   const { cart, user, setUser } = useCart();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
//         <h2 className="text-2xl font-bold text-gray-800">
//           Sigma Store
//         </h2>

//         <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
//           <Link to="/" className="hover:text-black transition">
//             Home
//           </Link>
//           <Link to="/shop" className="hover:text-black transition">
//             Shop
//           </Link>
//           <Link to="/cart" className="hover:text-black transition">
//             Cart ({cart.length})
//           </Link>
//           <Link to="/checkout" className="hover:text-black transition">
//             Checkout
//           </Link>

//           {user ? (
//             <button
//               onClick={() => setUser(false)}
//               className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/login"
//               className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
//             >
//               Login
//             </Link>
//           )}
//         </div>

//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 text-gray-700 font-medium">
//           <Link to="/" onClick={() => setMenuOpen(false)} className="block">
//             Home
//           </Link>
//           <Link to="/shop" onClick={() => setMenuOpen(false)} className="block">
//             Shop
//           </Link>
//           <Link to="/cart" onClick={() => setMenuOpen(false)} className="block">
//             Cart ({cart.length})
//           </Link>
//           <Link to="/checkout" onClick={() => setMenuOpen(false)} className="block">
//             Checkout
//           </Link>

//           {user ? (
//             <button
//               onClick={() => {
//                 setUser(false);
//                 setMenuOpen(false);
//               }}
//               className="w-full bg-red-500 text-white px-4 py-2 rounded-lg"
//             >
//               Logout
//             </button>
//           ) : (
//             <Link
//               to="/login"
//               onClick={() => setMenuOpen(false)}
//               className="block w-full bg-black text-white px-4 py-2 rounded-lg text-center"
//             >
//               Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { cart, user, setUser } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <h2 className="text-2xl font-bold text-gray-800">
          Sigma Store
        </h2>

        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>

          <Link to="/shop" className="hover:text-black transition">
            Shop
          </Link>

          <Link to="/#contact" className="hover:text-black transition">
            Contact
          </Link>

          <Link to="/cart" className="hover:text-black transition">
            Cart ({cart.length})
          </Link>

          <Link to="/checkout" className="hover:text-black transition">
            Checkout
          </Link>

          {user ? (
            <button
              onClick={() => setUser(false)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
            >
              Login
            </Link>
          )}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
        <img src="./menu.png" alt=""  width={20} height={20}/>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-4 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </Link>

          <Link to="/shop" onClick={() => setMenuOpen(false)} className="block">
            Shop
          </Link>

          <Link to="/#contact" onClick={() => setMenuOpen(false)} className="block">
            Contact
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)} className="block">
            Cart ({cart.length})
          </Link>

          <Link to="/checkout" onClick={() => setMenuOpen(false)} className="block">
            Checkout
          </Link>

          {user ? (
            <button
              onClick={() => {
                setUser(false);
                setMenuOpen(false);
              }}
              className="w-full bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-black text-white px-4 py-2 rounded-lg text-center"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
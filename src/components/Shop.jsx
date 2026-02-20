// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then(res => res.json())
//       .then(data => setProducts(data));
//   }, []);

//   return (
//     <div className="grid md:grid-cols-4 gap-6 p-6">
//       {products.map(product => (
//         <div key={product.id} className="border p-4 rounded shadow">
//           <img src={product.image} className="h-40 mx-auto" />
//           <h3 className="font-semibold mt-2">
//             {product.title.slice(0, 40)}...
//           </h3>
//           <p className="text-green-600 font-bold">${product.price}</p>
//           <Link to={`/product/${product.id}`} className="text-blue-500">
//             View
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Shop;










import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Shop the worlds premium brands here
      </h1>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col"
          >
            {/* Product Image */}
            <div className="flex items-center justify-center h-48">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {product.title.length > 50
                  ? product.title.slice(0, 50) + "..."
                  : product.title}
              </h3>

              <p className="text-green-600 font-bold text-lg mt-2">
                ${product.price}
              </p>

              <Link
                to={`/product/${product.id}`}
                className="mt-auto inline-block text-center bg-black hover:bg-gray-800 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
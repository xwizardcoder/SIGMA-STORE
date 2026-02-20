

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        Shop the world’s premium brands here
      </h1>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col"
          >
            <div className="flex items-center justify-center h-48">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 object-contain hover:scale-105 transition duration-300"
              />
            </div>

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
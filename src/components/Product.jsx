import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";

const Product = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-600 animate-pulse">
          Loading Product...
        </h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl max-w-6xl w-full grid md:grid-cols-2 gap-8 p-6 md:p-10">
        
        <div className="flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 md:h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm text-gray-500 uppercase tracking-wide">
            {product.category}
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
            {product.title}
          </h2>

          <p className="text-2xl text-green-600 font-semibold mt-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-xl text-lg font-semibold transition duration-300 w-full md:w-fit"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
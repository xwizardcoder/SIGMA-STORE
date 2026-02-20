import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-r from-purple-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
          
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Amazing Products
            </h1>
            <p className="text-lg md:text-xl text-blue-100">
              Shop the latest trends with the best prices. 
              Quality products delivered right to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/shop"
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>

              <Link
                to="/cart"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
              >
                View Cart
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="/banner.jpg"
              alt="Shopping.."
              className="rounded-xl shadow-2xl w-full max-w-md cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Shop With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4"> Fast Delivery</h3>
              <p className="text-gray-600">
                Get your orders delivered quickly and safely to your home.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4"> Secure Payment</h3>
              <p className="text-gray-600">
                100% secure payment methods to protect your transactions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4"> Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected products with guaranteed quality.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-gray-300 mb-8">
            Explore our collection and find your perfect product today.
          </p>
          <Link
            to="/shop"
            className="bg-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Browse Products
          </Link>
        </div>
      </section>



<section id="contact" className="py-20 bg-gray-200 flex justify-center text-white">
  <div className="max-w-6xl mx-auto px-6">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Get In Touch
      </h2>
      <p className="text-gray-600 text-lg">
        We'd love to hear from you. Reach out for any questions, feedback, or support.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Customer Support
          </h3>
          <p className="text-gray-600">
            Email: support@sigmastore.com
          </p>
          <p className="text-gray-600">
            Phone: +91 8811223344
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Office Address
          </h3>
          <p className="text-gray-600">
            prayagraj jhalwa
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Business Hours
          </h3>
          <p className="text-gray-600">
            Monday – Friday: 9:00 AM – 6:00 PM
          </p>
          <p className="text-gray-600">
            Saturday: 10:00 AM – 4:00 PM
          </p>
        </div>
      </div>

     
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
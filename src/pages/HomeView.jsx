import { useEffect, useState } from "react";
import axios from "axios";

import Pages from "../components/elements/pagination/pagination";
import "../App.css";

function HomeView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchShops = async (page) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `http://localhost:3000/api/v1/shops?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = response.data;
      if (data.isSuccess) {
        setShops(data.data.shops);
      } else {
        setError("error");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // fetch data -> fetch / axios
  useEffect(() => {
    fetchShops(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700">
              Our Services
            </a>
            <a href="#" className="text-gray-700">
              Why Us
            </a>
            <a href="#" className="text-gray-700">
              Testimonial
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
          </nav>
        </div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
          Register
        </button>
      </header>

      <main className="text-center">
        {loading && <p> loading... </p>}
        {error && <p className="text-red-500"> {error} </p>}
        {!loading && !error && (
          <>
            <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shops.length === 0 ? (
                <p className="text-gray-500">no data available</p>
              ) : (
                shops.map((shop, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-md bg-white shadow-md"
                  >
                    <img
                      src={shop.products[0].images[0]}
                      alt={shop.products[0].name[0]}
                      className="w-full h-40 object-cover mb-4"
                    />
                    <h3 className="font-semibold">{shop.products[0].name}</h3>
                    <p className="text-green-500 font-bold">
                      {shop.products[0].price} / hari
                    </p>
                    <p className="text-gray-600 mt-2 text-sm">id = {shop.id}</p>
                    <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                      <span>4 orang</span> <span>Manual</span>
                      <span>Tahun 2020</span>
                    </div>
                    <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                      Pilih Mobil
                    </button>
                  </div>
                ))
              )}
            </section>
            <Pages currentPage={currentPage} onPageChange={handlePageChange} />
          </>
        )}
      </main>
    </>
  );
}

export default HomeView;

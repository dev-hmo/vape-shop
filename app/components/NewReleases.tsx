"use client";
import { useState } from "react";

export default function NewReleases() {
  // Array of all products
  const allProducts = [
    {
      id: 1,
      name: "Citrus Mon: 20,000 Puf Disposable 3 Percent",
      price: "30,000 MMK",
      img: "/assets/images/product3.jpg",
    },
    {
      id: 2,
      name: "Strawberry Yogurt with Refreshing Flavor Nic 3 Percent",
      price: "30,000 MMK",
      img: "/assets/images/product4.jpg",
    },
    {
      id: 3,
      name: "Blueberry Chill with Nic 3 Percent",
      price: "30,000 MMK",
      img: "/assets/images/product5.jpg",
    },
    {
      id: 4,
      name: "Mango Bliss with Nic 3 Percent",
      price: "30,000 MMK",
      img: "/assets/images/product6.jpg",
    },
    {
      id: 5,
      name: "Pineapple Blast with Nic 3 Percent",
      price: "30,000 MMK",
      img: "/assets/images/product7.jpg",
    },
    {
      id: 6,
      name: "Cool Mint Nic 3 Percent",
      price: "30,000 MMK",
      img: "/assets/images/product8.jpg",
    },
  ];

  // State to manage visible products
  const [visibleProducts, setVisibleProducts] = useState(3);

  // Function to load more products
  const handleViewMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 2); // Load 2 more products at a time
  };

  return (
    <section className="bg-gray-50 mx-10">
      <div className="container mx-auto text-center">
        <div className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <h1 className="text-red-600">New</h1>
          <h1>Released</h1>
        </div>
        <p className="text-lg text-gray-600 mb-8">
          Try Our Latest Flavors Here
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {allProducts.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="relative h-56 bg-cover bg-center rounded-lg shadow-md"
              style={{
                backgroundImage: `url(${product.img})`,
              }}
            >
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
                <h3 className="text-lg font-bold text-white">{product.name}</h3>
                <p className="text-sm text-gray-300 mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleProducts < allProducts.length && (
          <button
            onClick={handleViewMore}
            className="mt-8 px-11 py-2 bg-slate-200 text-gray-800 font-semibold rounded-3xl hover:bg-red-600 transition"
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
}

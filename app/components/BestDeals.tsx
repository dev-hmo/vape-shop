"use client"; // Add this directive to make it a client component

import { useState } from "react";

export default function BestDeals() {
  const products = [
    {
      id: 1,
      name: "Refreshing Mint",
      price: "30,000 MMK",
      img: "/assets/images/product1.jpg",
    },
    {
      id: 2,
      name: "Strawberry Yogurt",
      price: "30,000 MMK",
      img: "/assets/images/product2.jpg",
    },
    {
      id: 3,
      name: "Mango Yogurt",
      price: "30,000 MMK",
      img: "/assets/images/product3.jpg",
    },
    {
      id: 4,
      name: "Iced Coffee",
      price: "30,000 MMK",
      img: "/assets/images/product4.jpg",
    },
    {
      id: 5,
      name: "Cola Mint",
      price: "30,000 MMK",
      img: "/assets/images/product5.jpg",
    },
    {
      id: 6,
      name: "Nut Tobacco",
      price: "30,000 MMK",
      img: "/assets/images/product6.jpg",
    },
    // Add more products as needed
    {
      id: 7,
      name: "Refreshing Mint",
      price: "30,000 MMK",
      img: "/assets/images/product1.jpg",
    },
    {
      id: 8,
      name: "Strawberry Yogurt",
      price: "30,000 MMK",
      img: "/assets/images/product2.jpg",
    },
    {
      id: 9,
      name: "Mango Yogurt",
      price: "30,000 MMK",
      img: "/assets/images/product3.jpg",
    },
    {
      id: 10,
      name: "Iced Coffee",
      price: "30,000 MMK",
      img: "/assets/images/product4.jpg",
    },
    {
      id: 11,
      name: "Cola Mint",
      price: "30,000 MMK",
      img: "/assets/images/product5.jpg",
    },
    {
      id: 12,
      name: "Nut Tobacco",
      price: "30,000 MMK",
      img: "/assets/images/product6.jpg",
    },
  ];

  const [visibleProducts, setVisibleProducts] = useState(4); // Initially show 4 products

  const handleViewMore = () => {
    setVisibleProducts(products.length); // Show all products on "View More"
  };

  return (
    <section className="py-16 bg-gray-100 mx-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Best Deals</h2>
        <p className="text-gray-500 mb-8">Just For You</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {products.slice(0, visibleProducts).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 relative"
            >
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                25% Off
              </span>

              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="mt-1 text-gray-500 line-through">40,000 MMK</p>
                <p className="mt-1 text-green-600">{product.price}</p>
                <p className="mt-1 text-yellow-500 text-sm font-medium">
                  ⭐ 600 Points
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleProducts < products.length && (
          <button
            onClick={handleViewMore}
            className="mt-8 px-6 py-2 bg-gray-300 text-black font-bold rounded-lg hover:bg-gray-400 transition"
          >
            View More
          </button>
        )}
      </div>
    </section>
  );
}

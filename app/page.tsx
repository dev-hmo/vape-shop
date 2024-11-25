import HeroSection from "./components/HeroSection";
import BestDeals from "./components/BestDeals";
import MembershipProgram from "./components/MembershipProgram";
import NewReleases from "./components/NewReleases";
import FlavorSection from "./components/FalvorSection";
import ProductSection from "./components/ProductSection";
import Head from "next/head";

export default function HomePage() {
  const productData = [
    {
      title: "Refreshing Mint",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product1.jpg",
    },
    {
      title: "Strawberry Yogurt",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product2.jpg",
    },
    {
      title: "Mango Yogurt",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product3.jpg",
    },
    {
      title: "Iced Coffee",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product4.jpg",
    },
    {
      title: "Cola Mint",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product5.jpg",
    },
    {
      title: "Nut Tobacco",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product6.jpg",
    },
    // Add more products as needed
    {
      title: "Refreshing Mint",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product1.jpg",
    },
    {
      title: "Strawberry Yogurt",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product2.jpg",
    },
    {
      title: "Mango Yogurt",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product3.jpg",
    },
    {
      title: "Iced Coffee",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product4.jpg",
    },
    {
      title: "Cola Mint",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product5.jpg",
    },
    {
      title: "Nut Tobacco",
      price: "30,000 MMK",
      points: "600 Points",
      image: "/assets/images/product6.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Your Home Page Title | Best Vapes Online</title>
        <meta
          name="description"
          content="Explore our range of vape products, from devices to pods and disposables. Get the best deals!"
        />
        <meta
          name="keywords"
          content="vapes, vape devices, disposable vapes, pods, best vapes online, vape shop"
        />
        <meta name="author" content="Your Company Name" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Your Home Page Title | Best Vapes Online"
        />
        <meta
          property="og:description"
          content="Explore our range of vape products, from devices to pods and disposables. Get the best deals!"
        />
        <meta
          property="og:image"
          content="https://www.yoursite.com/assets/images/og-home.jpg"
        />
        <meta property="og:url" content="https://www.yoursite.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Your Home Page Title | Best Vapes Online"
        />
        <meta
          name="twitter:description"
          content="Explore our range of vape products, from devices to pods and disposables. Get the best deals!"
        />
        <meta
          name="twitter:image"
          content="https://www.yoursite.com/assets/images/twitter-home.jpg"
        />
      </Head>
      <div>
        <HeroSection />
        <BestDeals />
        <MembershipProgram />
        <NewReleases />
        <FlavorSection />

        {/* Product Sections */}
        <div className="mb-16">
          {" "}
          {/* Space before footer */}
          <ProductSection
            category="Devices"
            description="Find the best for you here!"
            backgroundImage="/assets/images/devices-bg.jpg"
            products={productData}
          />
          <ProductSection
            category="Pods"
            description="Variety of choices available"
            backgroundImage="/assets/images/pods-bg.jpg"
            products={productData}
          />
          <ProductSection
            category="Disposable"
            description="Easy, clean & superb flavor"
            backgroundImage="/assets/images/disposable-bg.jpg"
            products={productData}
          />
        </div>
      </div>
    </>
  );
}

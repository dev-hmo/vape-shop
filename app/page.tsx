import HeroSection from "./components/HeroSection";
import BestDeals from "./components/BestDeals";
import MembershipProgram from "./components/MembershipProgram";
import NewReleases from "./components/NewReleases";
import FlavorSection from "./components/FlavorSection";
import ProductSection from "./components/ProductSection";
import { getProductsByCategory } from "./data/products";

export default function HomePage() {
  const deviceProducts = getProductsByCategory("devices");
  const podProducts = getProductsByCategory("pods");
  const disposableProducts = getProductsByCategory("disposable");

  return (
    <div>
      <HeroSection />

      <section id="best-deals">
        <BestDeals />
      </section>

      <section id="membership">
        <MembershipProgram />
      </section>

      <section id="new-releases">
        <NewReleases />
      </section>

      <section id="flavors">
        <FlavorSection />
      </section>

      {/* Product Sections */}
      <div className="pb-16 space-y-6">
        <ProductSection
          category="Devices"
          description="Find the best for you here!"
          backgroundImage="/assets/images/devices-bg.jpg"
          products={deviceProducts}
        />
        <ProductSection
          category="Pods"
          description="Variety of choices available"
          backgroundImage="/assets/images/pods-bg.jpg"
          products={podProducts}
        />
        <ProductSection
          category="Disposable"
          description="Easy, clean & superb flavor"
          backgroundImage="/assets/images/disposable-bg.jpg"
          products={disposableProducts}
        />
      </div>
    </div>
  );
}

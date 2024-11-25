import { Gem } from "lucide-react";

const MembershipSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-auto gap-4">
        {/* Left Card: Membership Program */}
        <div className="bg-gray-800 rounded-lg p-8 flex flex-col justify-between shadow-card relative lg:col-span-3 lg:row-span-2">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/assets/images/bigmember.png')] opacity-40 rounded-lg"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Membership Program
            </h2>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">
              Be a Vape Pi member and get our
              <br /> special exclusive offers.
            </p>
            <button className="px-6 py-2 bg-slate-600 text-white font-semibold rounded-full hover:bg-yellow-400 transition">
              View
            </button>
          </div>
        </div>

        {/* Mid Grid: Product Categories */}
        <div className="lg:row-span-2 lg:col-start-4">
          {/* Devices Card */}
          <div className="bg-gray-800 h-full rounded-lg p-4 shadow-card flex flex-col justify-between hover:shadow-lg transition">
            <img
              src="/assets/images/devicesmbs.png"
              alt="Devices"
              className="h-40 sm:h-52 lg:h-72 w-full object-contain"
            />
            <h3 className="text-base lg:text-lg font-semibold">Devices</h3>
            <p className="text-gray-400 text-sm lg:text-base">
              Find the best for
              <br /> you here!
            </p>
          </div>
        </div>

        {/* Right Grid: Product Categories */}
        <div className="lg:col-start-5">
          {/* Pods Card */}
          <div className="bg-gray-800 rounded-lg p-4 shadow-card flex flex-col justify-between hover:shadow-lg transition">
            <img
              src="/assets/images/podmbs.jpg"
              alt="Pods"
              className="h-16 sm:h-20 lg:h-24 w-full object-contain mb-1"
            />
            <h3 className="text-base lg:text-lg font-semibold mb-1">Pods</h3>
            <p className="text-gray-400 text-sm lg:text-base">
              Variety of choices
              <br /> available.
            </p>
          </div>
        </div>
        <div className="lg:col-start-5 lg:row-start-2">
          {/* Disposable Card */}
          <div className="bg-gray-800 rounded-lg p-4 shadow-card flex flex-col justify-between hover:shadow-lg transition">
            <img
              src="/assets/images/disposablembs.jpg"
              alt="Disposable"
              className="h-16 sm:h-20 lg:h-24 w-full object-contain mb-1"
            />
            <h3 className="text-base lg:text-lg font-semibold mb-1">
              Disposable
            </h3>
            <p className="text-gray-400 text-sm lg:text-base">
              Easy, clean &<br /> superb flavor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;

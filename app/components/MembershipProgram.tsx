"use client";

const MembershipSection = () => {
  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-auto gap-5">
        {/* Left Card: Membership Program */}
        <div className="vip-card relative lg:col-span-3 lg:row-span-2 rounded-2xl overflow-hidden group min-h-[320px] transition-all duration-500 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/5">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: "url('/assets/images/bigmember.png')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#07070e]/95 via-[#07070e]/85 to-purple-950/50" />

          {/* Golden Card Chip */}
          <div className="absolute top-8 right-8 z-10 w-12 h-9 rounded-lg bg-amber-400 opacity-80 border border-amber-300/30 flex items-center justify-center shadow-inner overflow-hidden">
            <div className="grid grid-cols-3 w-full h-full p-1 gap-0.5 opacity-40">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="border border-black/20 rounded-sm" />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center h-full p-10 lg:p-14">
            <span className="text-xs tracking-[0.25em] uppercase text-amber-400 font-semibold mb-3">
              Exclusive Benefits
            </span>
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              VAPE PI <span className="gradient-text">VIP</span>
            </h2>
            <p className="text-slate-400 mb-8 text-sm lg:text-base max-w-md leading-relaxed">
              Unlock the ultimate vaping experience. Access member-only pricing, earn 10% back in points on every purchase, and claim free seasonal gifts.
            </p>
            <div>
              <button className="btn-primary text-sm px-8 py-3 bg-amber-500 border-none text-slate-950 font-bold hover:shadow-amber-500/30">
                Join VIP Club
              </button>
            </div>
          </div>
        </div>

        {/* Devices Card */}
        <div className="lg:row-span-2 lg:col-start-4">
          <div className="h-full bg-[#1a1a2e] rounded-2xl p-6 border border-white/5 card-hover group flex flex-col justify-between overflow-hidden relative">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-purple-500/10 to-transparent" />
            <div className="relative z-10">
              <img
                src="/assets/images/devicesmbs.png"
                alt="Vape Devices"
                className="h-40 sm:h-52 lg:h-72 w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative z-10 mt-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                Devices
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Find the best for you here!
              </p>
            </div>
          </div>
        </div>

        {/* Pods Card */}
        <div className="lg:col-start-5">
          <div className="bg-[#1a1a2e] rounded-2xl p-5 border border-white/5 card-hover group flex flex-col justify-between overflow-hidden relative">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-pink-500/10 to-transparent" />
            <img
              src="/assets/images/podmbs.jpg"
              alt="Vape Pods"
              className="relative z-10 h-20 lg:h-28 w-full object-contain mb-3 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="relative z-10">
              <h3 className="text-base lg:text-lg font-semibold text-white group-hover:text-pink-300 transition-colors">
                Pods
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Variety of choices available.
              </p>
            </div>
          </div>
        </div>

        {/* Disposable Card */}
        <div className="lg:col-start-5 lg:row-start-2">
          <div className="bg-[#1a1a2e] rounded-2xl p-5 border border-white/5 card-hover group flex flex-col justify-between overflow-hidden relative">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-amber-500/10 to-transparent" />
            <img
              src="/assets/images/disposablembs.jpg"
              alt="Disposable Vapes"
              className="relative z-10 h-20 lg:h-28 w-full object-contain mb-3 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="relative z-10">
              <h3 className="text-base lg:text-lg font-semibold text-white group-hover:text-amber-300 transition-colors">
                Disposable
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Easy, clean & superb flavor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;

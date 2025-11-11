import React from "react";

const Pricing = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
              WebkitBackgroundClip: "text",
            }}
          >
            🏆 Kryzox Tournament Coins Pricing
          </span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Unlock your way into epic battles — affordable, fair, and competitive.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* 10 Coins */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">10 Coins</h3>
            <p className="text-3xl font-semibold text-white mb-3">₹10</p>
            <p className="text-sm text-gray-400">Basic entry level pack</p>
          </div>

          {/* 50 Coins */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">50 Coins</h3>
            <p className="text-3xl font-semibold text-white mb-3">₹45</p>
            <p className="text-sm text-gray-400">Save ₹5 — best for regular players</p>
          </div>

          {/* 100 Coins */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">100 Coins</h3>
            <p className="text-3xl font-semibold text-white mb-3">₹80</p>
            <p className="text-sm text-gray-400">Save ₹20 — perfect for tournament squads</p>
          </div>

          {/* 500 Coins */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">500 Coins</h3>
            <p className="text-3xl font-semibold text-white mb-3">₹350</p>
            <p className="text-sm text-gray-400">Save ₹150 — for pro players & teams</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-[#1B1230] border border-purple-500/20 rounded-2xl p-6 text-center shadow-lg">
          <p className="text-lg text-gray-300 leading-relaxed">
            💰 <span className="text-purple-300 font-semibold">Kryzox Coins</span> can be used to join tournaments for{" "}
            <span className="text-white font-medium">BGMI</span>,{" "}
            <span className="text-white font-medium">PUBG</span>, and{" "}
            <span className="text-white font-medium">Free Fire</span>.
          </p>
          <p className="text-sm text-gray-400 mt-3">
            Earn rewards, climb the leaderboard, and become the ultimate champion!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

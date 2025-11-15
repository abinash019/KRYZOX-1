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
            💼 Software & Services Pricing
          </span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Simple, transparent pricing for your digital solutions.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Chatbot Integration */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <div className="text-4xl mb-3">🤖</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">WhatsApp Chatbot</h3>
            <p className="text-3xl font-semibold text-white mb-3">20K</p>
            <p className="text-sm text-gray-400">AI chatbot integration</p>
          </div>

          {/* Static Website */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <div className="text-4xl mb-3">🌐</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Static Website</h3>
            <p className="text-3xl font-semibold text-white mb-3">30K</p>
            <p className="text-sm text-gray-400">Fast & responsive design</p>
          </div>

          {/* RideShare Platform */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">RideShare Platform</h3>
            <p className="text-3xl font-semibold text-white mb-3">20K/mo</p>
            <p className="text-sm text-gray-400">Subscription based system</p>
          </div>

          {/* eLearning Platform */}
          <div className="bg-[#241B3A]/80 border border-purple-500/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 hover:-translate-y-2 transition-all duration-500 backdrop-blur-md">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">eLearning Platform</h3>
            <p className="text-3xl font-semibold text-white mb-3">20K/mo</p>
            <p className="text-sm text-gray-400">Complete LMS solution</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-[#1B1230] border border-purple-500/20 rounded-2xl p-6 text-center shadow-lg">
          <p className="text-lg text-gray-300 leading-relaxed">
            🚀 <span className="text-purple-300 font-semibold">High-quality software</span> for businesses, startups, and enterprises.
          </p>
          <p className="text-sm text-gray-400 mt-3">Custom solutions available upon request.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
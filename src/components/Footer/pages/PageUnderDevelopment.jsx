import React from "react";

const PageUnderDevelopment = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black px-6">
      <div className="text-center bg-[#1B1233] p-12 md:p-20 rounded-3xl shadow-2xl max-w-xl">
        {/* Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-24 w-24 text-pink-500 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1
          className="text-5xl md:text-6xl font-extrabold mb-4"
          style={{
            background: "linear-gradient(90deg, #ff6ec4, #7873f5, #42e695)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Oops!
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl text-purple-300 font-semibold mb-4">
          Page Under Development
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-8 leading-relaxed">
          The page you are trying to visit is currently under construction.
          We are working hard to make it available soon. Stay tuned!
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default PageUnderDevelopment;

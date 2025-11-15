import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#1B1233] text-white px-6 md:px-16 lg:px-32 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 relative">
          <span
            className="text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5)",
              WebkitBackgroundClip: "text",
            }}
          >
            About Us
          </span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Last Updated: [Insert Update Date]
        </p>

        {/* Content */}
        <section className="space-y-8">
          <div>
            <p className="text-gray-300 leading-relaxed text-base">
              <strong>Kryzox</strong> is a cutting-edge digital platform built
              for global gamers and vibrant social communities. We provide a
              seamless space where players can connect, compete, and collaborate
              in exciting ways.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-300">
              Our Platform Offers:
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2 text-base">
              <li>
                <strong>Custom Rooms:</strong> Create private matches with your
                own rules.
              </li>
              <li>
                <strong>1v1 Challenges:</strong> Compete head-to-head and
                showcase your skills.
              </li>
              <li>
                <strong>Tournaments & Rankings:</strong> Climb the leaderboards
                and earn recognition.
              </li>
              <li>
                <strong>In-App Social Interactions:</strong> Chat, share, and
                engage with fellow players.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-purple-300">
              Our Vision:
            </h2>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-2 text-base">
              <li>
                Deliver an <strong>accessible, fair, and competitive</strong>{" "}
                digital arena for all.
              </li>
              <li>
                Safeguard <strong>user privacy</strong> and maintain strong{" "}
                <strong>data security</strong> measures.
              </li>
              <li>
                <strong>Empower gaming communities</strong> with innovative,
                robust tools.
              </li>
              <li>
                Continuously <strong>evolve and improve</strong> based on
                community feedback.
              </li>
            </ul>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 px-1 md:px-1 lg:px-1 text-gray-300 space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-[#c84de5] mb-4">🏢 Kryzox</h2>
            <p>
              <strong>Owned By:</strong>{" "}
              <span className="text-[#79a5d5] font-semibold">Krishna Kumar</span>
            </p>
            <p>
              <strong>Headquarters:</strong>{" "}
              <span className="text-[#79a5d5]">India</span>
            </p>
            <p>
              <strong>Industry:</strong>{" "}
              <span className="text-[#79a5d5]">IT & Softwares</span>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:support@kryzox.com"
                className="text-[#c84de5] hover:underline transition-all"
              >
                support@kryzox.com
              </a>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.kryzox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c84de5] hover:underline transition-all"
              >
                www.kryzox.com
              </a>
            </p>
            <p className="mt-6 text-gray-500 text-sm">
              © {new Date().getFullYear()} KRYZOX | Owned by Krishna Kumar
            </p>
          </div>


        </section>
      </div>
    </div>
  );
};

export default AboutUs;

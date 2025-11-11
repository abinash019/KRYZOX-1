import React from "react";

const RefundPolicy = () => {
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
            Refund & Cancellation Policy
          </span>
        </h1>
        <p className="text-sm text-center text-gray-400 mb-12">
          Effective Date: November 11, 2025 | Last Updated: November 11, 2025
        </p>

        {/* Policy Sections */}
        <section className="space-y-10">
          {/* 1. Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              1. Introduction
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Welcome to <strong>KRYZOX</strong> (owned by{" "}
              <strong>Krishna Kumar</strong>). This Refund &
              Cancellation Policy explains how we handle refunds, cancellations,
              and returns for tournament registrations, in-app purchases, and
              related services. By using our platform, you agree to the terms
              outlined below.
            </p>
          </div>

          {/* 2. Tournament Cancellations */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              2. Tournament Cancellations
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Customers can cancel their tournament registration or purchase{" "}
              <strong>up to 24 hours before</strong> the tournament start time.
              Cancellations after this period will <strong>not</strong> be
              eligible for a refund.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
              <li>
                Cancellation ≥ 24 hours before the start: Eligible for a full
                refund or credit.
              </li>
              <li>
                Cancellation &lt; 24 hours before the start: Non-refundable.
              </li>
              <li>
                If the tournament is postponed or canceled by Kryzox, you’ll
                receive a full refund or event credit.
              </li>
            </ul>
          </div>

          {/* 3. Digital Goods */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              3. Digital Goods & Coin Purchases
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Purchases of digital items such as coins, credits, or in-app
              rewards are considered <strong>non-refundable</strong> once
              delivered or consumed. Refunds are only considered in cases of
              technical failure or duplicate charges.
            </p>
          </div>

          {/* 4. Refund Process */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              4. Refund Process
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Once approved, refunds are processed to the original payment
              method. Depending on your payment provider, it may take{" "}
              <strong>5–14 business days</strong> for the amount to reflect in
              your account.
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
              <li>
                If you haven’t received your refund, check with your bank or
                card provider.
              </li>
              <li>
                Contact our support team if the refund is not received within 14
                business days.
              </li>
            </ul>
          </div>

          {/* 5. Partial Refunds */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              5. Partial Refunds
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              Partial refunds may be issued for incomplete services or events
              canceled midway due to unforeseen issues. Such refunds will be
              evaluated on a case-by-case basis.
            </p>
          </div>

          {/* 6. Exchanges */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              6. Exchanges
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              We only replace items if they are defective or damaged (for
              physical goods, if any). For tournaments or digital goods,
              exchanges are not applicable.
            </p>
          </div>

          {/* 7. How to Request a Refund */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              7. How to Request a Refund
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              To request a cancellation or refund, please email our support team
              with the following details:
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
              <li>Full name and registered email ID</li>
              <li>Order or Tournament ID</li>
              <li>Reason for cancellation/refund</li>
            </ul>
            <p className="text-gray-300 mt-3">
              📧 Email:{" "}
              <a
                href="mailto:support@kryzox.com"
                className="text-purple-400 underline"
              >
                support@kryzox.com
              </a>{" "}
              | 📞 Phone: +91 98765 43210
            </p>
          </div>

          {/* 8. Address */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              8. Business Address
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              622 Manglam Electronic Market, Jaipur, Rajasthan, India 302001
            </p>
          </div>

          {/* 9. Updates */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-300">
              9. Updates to This Policy
            </h2>
            <p className="text-gray-300 mt-2 leading-relaxed">
              We may update this policy from time to time. All revisions will be
              published on this page with the updated date. Please review this
              page regularly to stay informed.
            </p>
          </div>
        </section>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-16">
          © {new Date().getFullYear()} <strong>KRYZOX</strong> — (owned by{" "}
          <strong>Krishna Kumar</strong>)
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;

import React, { useRef, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useForm, ValidationError } from "@formspree/react";
import NavBar from "../../components/Navbar/NavBar";

export default function AccountDeletionRequest() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [state, handleSubmit] = useForm("xjkoavnb"); 
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
      setIsSuccess(true);
      const timer = setTimeout(() => setIsSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <div>
        <NavBar />
      <div
        className="min-h-screen bg-[#241B3A] py-16 text-white font-sans border mt-[80px]"
        style={{ borderColor: "rgba(200, 77, 229, 0.3)" }}
      >
        {/* Header */}
        <section className="max-w-3xl mx-auto px-6 text-center">
          <h1
            className="text-5xl font-semibold mb-5 text-transparent bg-clip-text"
            style={{
              background: "linear-gradient(45deg, #c84de5, #79a5d5, #5e41a1)",
              WebkitBackgroundClip: "text",
            }}
          >
            Account Deletion Request
          </h1>
          <p className="text-[#d9cbcb] text-lg mb-10">
            We’re sorry to see you go. Please confirm your details below to
            request permanent deletion of your account.
          </p>
        </section>

        {/* Success Message */}
        {state.succeeded && isSuccess && (
          <p className="text-center text-green-400 font-semibold mb-8">
            ✅ Your deletion request has been submitted successfully.
          </p>
        )}

        {/* Deletion Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#241B3A] border border-purple-500/20 rounded-3xl p-10 shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-purple-300">
            Confirm Account Deletion
          </h2>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-purple-200 mb-2"
            >
              Registered Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-400 text-sm mt-1"
            />
          </div>

          {/* Reason */}
          <div>
            <label
              htmlFor="reason"
              className="block text-sm font-medium text-purple-200 mb-2"
            >
              Reason for Deletion (Optional)
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4"
              className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              placeholder="Tell us why you’re leaving..."
            />
          </div>

          {/* Confirmation */}
          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-medium text-purple-200 mb-2"
            >
              Type <span className="text-purple-400 font-semibold">DELETE</span>{" "}
              to confirm
            </label>
            <input
              id="confirm"
              name="confirm"
              required
              pattern="DELETE"
              className="w-full px-4 py-3 bg-[#1B1230] border border-purple-500/30 rounded-xl text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all"
              placeholder="Type DELETE"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-3 text-white font-semibold rounded-xl shadow-lg transition-all duration-500 bg-[length:200%_100%] hover:bg-[position:100%_0]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #c84de5, #79a5d5, #5e41a1)",
            }}
          >
            {state.submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}


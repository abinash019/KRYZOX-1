import { lazy, Suspense, useEffect } from "react";
import { scroller } from "react-scroll";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Herosection/HeroSection";
import ErrorBoundry from "../utils/ErrorBoundry";
import ContactUsForm from "../components/contactus/ContactUs";
import Pricing from "../components/pricing/Pricing";

// Lazy-loaded features
const Feature1 = lazy(() => import("../components/Features/Feature1/Feature1"));
const Feature2 = lazy(() => import("../components/Features/Feature2/Feature2"));
const Feature3 = lazy(() => import("../components/Features/Feature3/Feature3"));

const Home = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      // Smooth scroll to the target section on page load
      scroller.scrollTo(scrollTo, {
        duration: 700,
        delay: 50,
        smooth: true,
        offset: -80, // adjust for fixed navbar height
      });
    }
  }, [scrollTo]);

  return (
    <div className="max-w-[1600px] m-auto bg-[#0B0811] text-white">
      <NavBar />

      <div className="pt-[80px] w-full">
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>


        <ErrorBoundry>
          <Suspense
            fallback={
              <div className="min-h-screen flex justify-center items-center uppercase text-4xl text-white font-bold bg-[#260F3B]">
                Loading...
              </div>
            }
          >
            {/* Features Sections */}
            <section id="games">
              <Feature2 />
            </section>

            <section id="features">
              <Feature1 />
            </section>

            <section id="earning">
              <Feature3 />
            </section>
          </Suspense>
        </ErrorBoundry>

        {/* Pricing Section */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* Contact Section */}
        <section id="contactUs">
          <ContactUsForm />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;

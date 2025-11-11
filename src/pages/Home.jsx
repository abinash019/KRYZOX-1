import { lazy, Suspense } from "react";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Herosection/HeroSection";
const Feature1 = lazy(() => import("../components/Features/Feature1/Feature1"));
const Feature2 = lazy(() => import("../components/Features/Feature2/Feature2"));
const Feature3 = lazy(() => import("../components/Features/Feature3/Feature3"));
import ErrorBoundry from "../utils/ErrorBoundry";
import ContactUsForm from "../components/contactus/ContactUs";
import Pricing from "../components/pricing/Pricing";

const Home = () => {
  return (
    <div className="max-w-[1600px] m-auto">
      <NavBar />

      <div className="pt-[80px] w-full">
        {/* 👇 Give this section an id="home" */}
        <section id="home">
          <HeroSection />
        </section>

        <ErrorBoundry>
          <Suspense
            fallback={
              <div className="min-h-screen flex justify-center items-center uppercase text-4xl text-white font-bold bg-[#260F3B]">
                loading...
              </div>
            }
          >
            {/* 👇 Wrap each feature section with its matching id */}
            <section id="games">
              <Feature1 />
            </section>

            <section id="features">
              <Feature2 />
            </section>

            <section id="earning">
              <Feature3 />
            </section>

          </Suspense>
        </ErrorBoundry>

        {/* 👇 Pricing section (if you have a separate component) */}
        <section id="pricing">
          <Pricing />
        </section>

        {/* 👇 Contact section */}
        <section id="contactUs">
          <ContactUsForm />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;

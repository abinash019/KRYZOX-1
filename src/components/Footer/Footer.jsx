import FooterComponet from "./FooterComponet";
import { Github, Twitter, MSquare, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
const data1 = [
  { content: "Products", link: "/products" },
  { content: "Games", link: "/games" },
  { content: "Features", link: "/features" },
  { content: "Download", link: "/download" },
  { content: "System Requirements", link: "/under-development" },
];

const data2 = [
  { content: "Community", link: "/under-development" },
  { content: "Discord", link: "/under-development" },
  { content: "Forums", link: "/under-development" },
  { content: "Tournaments", link: "/under-development" },
  { content: "Leaderboards", link: "/under-development" },
];

const data3 = [
  { content: "Support", link: "/under-development" },
  { content: "Help Center", link: "/under-development" },
  { content: "Contact", link: "/contactus" }, // keep real link
  { content: "Bug Reports", link: "/under-development" },
  { content: "Feedback", link: "/under-development" },
];

const data4 = [
  { content: "Company", link: "/under-development" },
  { content: "AboutUs", link: "/about-us" }, // keep real link
  { content: "Careers", link: "/under-development" },
  { content: "Press", link: "/under-development" },
  { content: "Partners", link: "/under-development" },
];



const icons = [
  {
    icon: faInstagram,
    alternative: "instagram",
    color: "text-gray-400",
    link: "https://shorturl.at/XjavH",
  },
  {
    icon: faFacebookF,
    alternative: "facebook",
    color: "text-[#79a5d5]",
    link: "https://shorturl.at/Pa2l5",
  },
  {
    icon: faTiktok,
    alternative: "tiktok",
    color: "text-[#c84de5]",
    link: "https://shorturl.at/Mg34q",
  },
  {
    icon: faYoutube,
    alternative: "youtube",
    color: "text-[#84147C]",
    link: "https://shorturl.at/whnI9",
  },
];

const Footer = () => {
  return (
    <footer
      className="h-auto w-auto px-10 py-10 md:px-20 lg:px-35"
      id="contact"
      style={{
        backgroundColor: "#1D0A2E",
        borderColor: "rgba(200, 77, 229, 0.3)",
      }}
    >
      <div
        className="h-auto w-auto text-white flex flex-wrap gap-20 border-b  py-5 pb-20"
        style={{ borderColor: "rgba(200, 77, 229, 0.3)" }}
      >
        <div className="flex flex-col gap-10 max-w-[400px]">
          <div className="flex items-center gap-4 text-3xl font-bold">
            <img
              src="/home/logo/logo.png"
              alt="KRYZOX Logo"
              className="w-14 h-14 rounded-full"
            />
            <span
              className="text-transparent bg-clip-text"
              style={{
                background: "linear-gradient(45deg, #79a5d5, #c84de5, #5e41a1)",
                WebkitBackgroundClip: "text",
              }}
            >
              KRYZOX
            </span>
          </div>
          <p className="text-gray-400">
            The ultimate gaming platform that brings together competitive
            gaming, community, and cutting-edge technology.
          </p>
          <div className="flex gap-5">
            {icons.map((element, index) => (
              <SocialMediaLinks
                key={index}
                icon={element.icon}
                alternative={element.alternative}
                color={element.color}
                link={element.link}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row md:gap-20 gap-y-10">
          <FooterComponet data={data1}></FooterComponet>
          <FooterComponet data={data2}></FooterComponet>
          <FooterComponet data={data3}></FooterComponet>
          <FooterComponet data={data4}></FooterComponet>
        </div>
      </div>
      {/* privacy or additional inof section */}
      <section className="flex flex-col justify-between  text-sm text-gray-400 mt-10 md:flex-wrap md:flex-row">
        <div>
          <p>© {new Date().getFullYear()}  KRYZOX | Owned by Krishna Kumar.</p>
        </div>
        <div>
          <ul className="text-sm list-none flex flex-col mt-15  gap-5 md:mt-0 md:flex-wrap md:flex-row">
            <li className="hover:text-white transition-colors duration-300">
              <Link to="/account-deletion">Delete Account</Link>
            </li>

            <li className="hover:text-white transition-colors duration-300">
              <Link to="/refund-policy">Refund Policy</Link>
            </li>
            <li className="hover:text-white transition-colors duration-300">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="hover:text-white transition-colors duration-300">
              <Link to="/terms-and-conditions">Terms of Service</Link>
            </li>
            <li className="hover:text-white transition-colors duration-300">
              <Link to="cookie-policy">Cookie Policy</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

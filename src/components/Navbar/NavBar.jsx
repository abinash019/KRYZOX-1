import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AlignJustify as Hamburger, X } from "lucide-react";
import clsx from "clsx";
import ProfileDropdown from "./ProfileDropdown";
import LoginBtn from "./ui/LoginBtn";
import { useSelector } from "react-redux";
import "./navbar.css";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Games", path: "/games" },
  { name: "Features", path: "/features" },
  { name: "Pricing", path: "/pricing" },
  { name: "ContactUs", path: "/contactus" },
];

const Logo = () => (
  <NavLink to="/">
    <div className="flex items-center gap-4">
      <img
        src="/home/logo/logo.png"
        alt="logo"
        className="h-14 w-14 object-cover rounded-full"
      />
      <div className="logo flex relative font-bold text-2xl shadow-2xl ">
        <span>KRYZOX</span>
        <span className="top-logo-container">
          <span className="logo-dollar animate-pulse z-10">💰</span>
          <span className="top-logo animate-pulse">EARN</span>
        </span>
      </div>
    </div>
  </NavLink>
);

const MobileNavigation = ({ setIsMobileNavOpen, isMobileNavOpen, isLoggedIn, loggedInUserInfo }) => (
  <div
    className={clsx(
      "fixed inset-0 gap-10 w-full h-full bg-gray-900 bg-opacity-90 z-50 flex flex-col pt-10 px-10 overflow-hidden translate-x-[-100%] transition-transform duration-500 ease-in-out md:hidden",
      { "translate-x-[0%]": isMobileNavOpen, "translate-x-[100%] pointer-events-none": !isMobileNavOpen }
    )}
  >
    <X size={30} className="absolute top-5 right-5 text-white cursor-pointer block md:hidden" onClick={() => setIsMobileNavOpen(false)} />
    <Logo />
    <div className="flex flex-col gap-10 mt-10">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className="text-gray-300 hover:text-white transition-all duration-500 cursor-pointer"
          onClick={() => setIsMobileNavOpen(false)}
        >
          {link.name}
        </NavLink>
      ))}
      {!isLoggedIn ? (
        <NavLink to="/auth/login">
          <LoginBtn>Login</LoginBtn>
        </NavLink>
      ) : (
        <ProfileDropdown userData={loggedInUserInfo} />
      )}
    </div>
  </div>
);

const NavBar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isLoggedIn, loggedInUserInfo } = useSelector((state) => state.auth);

  return (
    <nav className="h-[80px] w-full max-w-[1600px] fixed top-0 z-20 bg-[#0B0811] text-white flex items-center justify-between px-3 border-b border-b-[#c84de5] md:px-7 lg:px-35">
      <Logo />
      <div className="flex gap-10 items-center">
        <ul className="list-none h-auto w-auto font-semibold text-gray-300 hidden md:flex gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className="link group relative cursor-pointer"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        {!isLoggedIn ? (
          <NavLink to="/auth/login">
            <LoginBtn className="hidden md:block" userData={loggedInUserInfo}>Login</LoginBtn>
          </NavLink>
        ) : (
          <div className="hidden md:block">
            <ProfileDropdown userData={loggedInUserInfo} />
          </div>
        )}
      </div>

      <MobileNavigation
        setIsMobileNavOpen={setIsMobileNavOpen}
        isMobileNavOpen={isMobileNavOpen}
        isLoggedIn={isLoggedIn}
        loggedInUserInfo={loggedInUserInfo}
      />

      <Hamburger className="block md:hidden" size={30} onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} />
    </nav>
  );
};

export default NavBar;

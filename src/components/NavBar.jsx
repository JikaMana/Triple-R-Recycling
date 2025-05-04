import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Home,
  PenLine,
  HelpCircle,
  ArrowUpRight,
  Cog,
  User,
  Menu,
} from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const iconSize = 32;
  const iconStrokeWidth = 1.5;
  const iconClasses = "p-2 bg-white rounded-full";
  const linkClasses =
    "flex items-center gap-x-2 bg-gray-200 hover:bg-gray-300 pl-1 pr-3 py-1 rounded-full text-gray-700 font-medium transition-colors duration-150";
  const mobileLinkClasses =
    "flex items-center gap-2 px-4 py-2 rounded-md font-medium text-lg transition";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!menuRef.current.contains(e.target) && menuRef.current) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);
  return (
    <div className="fixed w-full border-b-2 border-gray-400 backdrop-blur-xs z-50">
      <nav className="flex justify-between items-center max-w-[95%] mx-auto">
        <div className="flex items-center gap-x-1">
          <Menu
            color="#99a1af"
            size={32}
            className="lg:hidden hover:cursor-pointer "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            ref={menuRef}
          />
          <div className="flex items-center">
            <img src="/tripleR.svg" alt="TRIPLE R" className="w-16 h-16 mt-3" />
            <h1 className="hidden sm:block text-gray-400 font-medium text-lg sm:text-xl">
              Triple R
            </h1>
          </div>
        </div>
        {/* Desktop naviagtion  */}
        <ul className="hidden lg:flex gap-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? "bg-green-800 text-gray-100" : ""}`
              }
            >
              <Home
                size={iconSize}
                strokeWidth={iconStrokeWidth}
                className={iconClasses}
              />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? "bg-green-800 text-gray-100" : ""}`
              }
            >
              <User
                size={iconSize}
                strokeWidth={iconStrokeWidth}
                className={iconClasses}
              />
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? "bg-green-800 text-gray-100" : ""}`
              }
            >
              <Cog
                size={iconSize}
                strokeWidth={iconStrokeWidth}
                className={iconClasses}
              />
              <span>Services</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? "bg-green-800 text-gray-100" : ""}`
              }
            >
              <PenLine
                size={iconSize}
                strokeWidth={iconStrokeWidth}
                className={iconClasses}
              />
              <span>Blog</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `${linkClasses} ${isActive ? "bg-green-800 text-gray-100" : ""}`
              }
            >
              <HelpCircle
                size={iconSize}
                strokeWidth={iconStrokeWidth}
                className={iconClasses}
              />
              <span>FAQ</span>
            </NavLink>
          </li>
        </ul>

        <div className="bg-green-800 sm:px-4 p-2 rounded-full hover:scale-105 transition-all">
          <Link to="/contact" className="flex text-white">
            <p className="text-sm sm:text-lg font-medium">Contact Us</p>
            <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </Link>
        </div>
      </nav>
      {/* Mobile Navigation  */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:hidden flex-col gap-3 bg-white 0 text-green-900 p-4 transition-all duration-300 ease-in-out`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${mobileLinkClasses} ${
                isActive
                  ? "bg-green-800 text-gray-200"
                  : "hover:bg-green-800 hover:text-gray-200"
              }`
            }
          >
            <Home size={20} className="stroke-current" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${mobileLinkClasses} ${
                isActive
                  ? "bg-green-800 text-white"
                  : "hover:bg-green-800 hover:text-gray-200"
              }`
            }
          >
            <User size={20} className="stroke-current" />
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/service"
            className={({ isActive }) =>
              `${mobileLinkClasses} ${
                isActive
                  ? "bg-green-800 text-white"
                  : "hover:bg-green-800 hover:text-gray-200"
              }`
            }
          >
            <Cog size={20} className="stroke-current" />
            <span>Services</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${mobileLinkClasses} ${
                isActive
                  ? "bg-green-800 text-white"
                  : "hover:bg-green-800 hover:text-gray-200"
              }`
            }
          >
            <PenLine size={20} className="stroke-current" />
            <span>Blog</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              `${mobileLinkClasses} ${
                isActive
                  ? "bg-green-800 text-white"
                  : "hover:bg-green-800 hover:text-gray-200"
              }`
            }
          >
            <HelpCircle size={20} className="stroke-current" />
            <span>FAQ</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdSportsGymnastics } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navlinks = [
  { name: "Home", link: "/" },
  { name: "Gallery", link: "/gallery" },
  { name: "Plans", link: "/plans" },
  { name: "Trainers", link: "/trainers/John" },
  { name: "Contract", link: "/contract" },
  { name: "About", link: "/about" },
  // Add more links as needed
];

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="bg-[#93917C] fixed w-full">
        <div className="flex justify-between p-2">
          <div className="flex">
            <span className="text-3xl text-indigo-600">
              <MdSportsGymnastics />
            </span>
            <span className="font-bold md:text-2xl cursor-pointer text-black">
              Borhan&apos;s GYM
            </span>
          </div>
          {/* Hide this on small screens */}
          <div className="hidden md:block">
            <ul className="flex space-x-6 mr-4 text-2xl">
              {Navlinks.map((linkItem, index) => (
                <li
                  key={index}
                  className={`hover:text-zinc-950  text-[#333333] ${
                    location.pathname === linkItem.link
                      ? " text-white rounded-md"
                      : null
                  }`}
                >
                  <Link to={linkItem.link}>{linkItem.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden flex justify-end p-0 top-0 mr-3">
            <button onClick={toggleNav} className="">
              {isNavOpen ? <ImCross /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed p-4 top-18 right-0 bg-[#25383C] ${
            isNavOpen
              ? "opacity-200 translate-x-0 transition-transform ease-in duration-300"
              : "opacity-0 translate-x-[130px] transition-transform ease-out duration-900"
          }`}
        >
          <ul className="">
            {Navlinks.map((linkItem, index) => (
              <li
                key={index}
                className={`hover:text-zinc-950 text-2xl p-2 ${
                  location.pathname === linkItem.link
                    ? "text-red-500 rounded-md"
                    : null
                }`}
              >
                <Link to={linkItem.link}>{linkItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  );
}

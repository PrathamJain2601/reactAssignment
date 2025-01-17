import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>

      <header className="text-textColor body-font border-b-2 border-borderColor shadow-sm shadow-borderColor">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-highlight rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-3xl text-textColor">WebD</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-xl justify-center gap-6">
            <a className="mr-5 hover:text-highlight"><Link to="/home">Home</Link></a>
            <a className="mr-5 hover:text-highlight"><Link to="/about">About</Link></a>
            <a className="mr-5 hover:text-highlight"><Link to="/contact">Contact</Link></a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;

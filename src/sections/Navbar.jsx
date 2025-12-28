import React, { useState } from "react"; // Import React and useState hook for managing component memory
import { navLinks } from "../constants"; // Import the list of navigation links from the data file

// Helper Component: Renders the list of link items
const NavItems = ({ onClick = () => { } }) => {
  return (
    <ul className="nav-ul">
      {/* Map through the navLinks array to create list items dynamically */}
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          {/* Link that calls onClick (to close mobile menu) and scrolls to the section */}
          <a href={href} className="nav-li_a" onClick={onClick}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

// Main Navbar Component
const Navbar = () => {
  // State to track if the mobile menu is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Bar Container */}
        <div className="flex justify-between items-center py-5 px-4">
          {/* Logo / Name Link */}
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            chandrangshu sarkar
          </a>

          {/* Hamburger Menu Button (Only visible on small screens) */}
          <button
            onClick={() => setIsOpen(!isOpen)} // Toggle the isOpen state on click
            aria-label="Toggle Menu"
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"} // Switch icon based on state
              alt="menu toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Navigation Links (Hidden on small screens) */}
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Sidebar (Shows up when isOpen is true) */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          {/* Pass onClick to close the menu after a link is clicked */}
          <NavItems onClick={() => setIsOpen(false)} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar; // Export the Navbar to be used in App.jsx
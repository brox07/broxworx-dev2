import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-broxworx-turq text-dark-grey font-chakra-petch ">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl">broxworx.dev</h1>
        <button
          className="lg:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <ul className="lg:flex justify-end flex-1 items-center">
            <li className="lg:mr-3">
              <a className="block px-4 py-1 md:p-2 lg:px-4" href="#about">/about</a>
            </li>
            <li className="lg:mr-3">
              <a className="block px-4 py-1 md:p-2 lg:px-4" href="#pick-em">/pick-em</a>
            </li>
            <li className="lg:mr-3">
              <a className="block px-4 py-1 md:p-2 lg:px-4" href="#projects">/projects</a>
            </li>
            <li className="lg:mr-3">
              <a className="block px-4 py-1 md:p-2 lg:px-4" href="#contact">/contact</a>
            </li>
            <li className="lg:mr-3">
              <a className="block px-4 py-1 md:p-2 lg:px-4" href="#subscribe">/subscribe</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { connectWeb3 } from "../utils/web3";
import ConnectButton from "./ConnectButton";
const Navbar = () => {
  const [connectedAddress, setConnectedAddress] = useState(null);
  const handleConnect = async () => {
    try {
      const web3 = await connectWeb3();
      const accounts = await web3.eth.requestAccounts();
      if (accounts.length > 0) {
        setConnectedAddress(accounts[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const pathName = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const activeClass = `block py-2 pl-3 pr-4 text-lg text-white
  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0
  md:dark:text-blue-500`;

  const inactiveClass = `block py-2 pl-3 pr-4 text-lg text-gray-900 rounded
  hover:bg-gray-100 md:hover:bg-transparent
  md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500
  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white
  md:dark:hover:bg-transparent dark:border-gray-700`;
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 lg:px-16 md:px-12  sm:px-6">
        <Link href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Amivote
          </span>
        </Link>
        <div className="flex md:order-2">
          <ConnectButton
            handleConnect={handleConnect}
            connectedAddress={connectedAddress}
          />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            isMobileMenuOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className={pathName === "/" ? activeClass : inactiveClass}
              >
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/voting"
                className={pathName === "/voting" ? activeClass : inactiveClass}
              >
                {" "}
                Voting
              </Link>
            </li>
            <li>
              <Link
                href="/result"
                className={pathName === "/result" ? activeClass : inactiveClass}
              >
                {" "}
                Result
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathName === "/about" ? activeClass : inactiveClass}
              >
                {" "}
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

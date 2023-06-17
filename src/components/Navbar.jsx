import { useState } from "react";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="fixed bg-white z-[10000] top-0 text-neutralGrayishViolet font-pops font-semibold left-0 h-[10%] w-full flex justify-between items-center px-10 lg:px-32">
      <div className="flex gap-10 items-center">
        <img src={Logo} alt="" className="w-[80%] lg:w-[30%] cursor-pointer" />
        <div className="lg:flex gap-4 hidden">
          <div className="hover:text-primaryCyan cursor-pointer">Features</div>
          <div className="hover:text-primaryCyan cursor-pointer">Pricing</div>
          <div className="hover:text-primaryCyan cursor-pointer">Resources</div>
        </div>
      </div>

      <div className="lg:block hidden">
        {!isLoggedIn ? (
          <div className="flex gap-2">
            <div
              className="hover:text-white hover:bg-primaryCyan cursor-pointer flex justify-center items-center h-10 w-24 rounded-full"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              Log In
            </div>
            <div
              className="hover:text-white hover:bg-primaryCyan cursor-pointer flex justify-center items-center h-10 w-24 rounded-full"
              onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
              Sign Up
            </div>
          </div>
        ) : (
          <div
            className="hover:text-white hover:bg-primaryCyan cursor-pointer flex justify-center items-center h-10 w-24 rounded-full"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            Log Out
          </div>
        )}
      </div>
      <div
        className="flex justify-center items-center lg:hidden "
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-list h-6 w-6 text-black"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      {showMenu && (
        <div className="lg:hidden fixed top-[10%] justify-center items-center rounded-xl text-center left-[5%] w-[90%] gap-5 py-5 flex flex-col bg-primaryDarkViolet text-white">
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
          <div className="border-b-2 border-[#ffffff30] h-0 w-[90%]" />
          {!isLoggedIn ? (
            <div className="flex flex-col gap-3 w-full items-center">
              <div
                className="active:text-white active:bg-primaryCyan cursor-pointer flex justify-center items-center w-[80%] h-10 lg:w-24 rounded-full"
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                  setShowMenu(!showMenu);
                }}
              >
                Log In
              </div>
              <div
                className="active:text-white active:bg-primaryCyan cursor-pointer flex justify-center items-center w-[80%] h-10 lg:w-24 rounded-full"
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                  setShowMenu(!showMenu);
                }}
              >
                Sign Up
              </div>
            </div>
          ) : (
            <div
              className="active:text-white active:bg-primaryCyan cursor-pointer flex justify-center items-center w-[80%] h-10 lg:w-24 rounded-full"
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
                setShowMenu(!showMenu);
              }}
            >
              Log Out
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import Logo from "../images/logo.svg";
import BannerImage from "../images/illustration-working.svg";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  return (
    <div className="fixed bg-white z-[1000] top-0 text-neutralGrayishViolet font-pops font-semibold left-0 h-[10%] w-full flex justify-between items-center px-10 lg:px-32">
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
              onClick={() => setShowLogin(true)}
            >
              Log In
            </div>
            <div
              className="hover:text-white hover:bg-primaryCyan cursor-pointer flex justify-center items-center h-10 w-24 rounded-full"
              onClick={() => setShowSignup(true)}
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
                  setShowMenu(!showMenu);
                  setShowLogin(true);
                }}
              >
                Log In
              </div>
              <div
                className="active:text-white active:bg-primaryCyan cursor-pointer flex justify-center items-center w-[80%] h-10 lg:w-24 rounded-full"
                onClick={() => {
                  setShowMenu(!showMenu);
                  setShowSignup(true);
                }}
              >
                Sign Up
              </div>
            </div>
          ) : (
            <div
              className="active:text-white active:bg-primaryCyan cursor-pointer flex justify-center items-center w-[80%] h-10 lg:w-24 rounded-full"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              Log Out
            </div>
          )}
        </div>
      )}
      {showLogin && (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-[#00000050] top-0 left-0 z-[10000]">
          <div className="h-[60%] relative overflow-hidden w-[90%] lg:w-[50%] bg-white rounded-xl flex flex-col justify-center items-start px-10">
            <div className="font-bold z-[1000] mt-5 mb-5 text-primaryDarkViolet text-2xl">
              Welcome Back!
            </div>
            <input
              type="email"
              placeholder="Enter email id"
              className="h-[3rem] w-full lg:w-[50%] z-[1000] mb-2 rounded-lg bg-primaryDarkViolet text-neutralGrayishViolet px-3 lg:px-10 placeholder-neutralGrayishViolet"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="h-[3rem] w-full lg:w-[50%] z-[1000] rounded-lg bg-primaryDarkViolet text-neutralGrayishViolet px-3 lg:px-10 placeholder-neutralGrayishViolet"
            />
            <div
              className="bg-primaryCyan z-[1000] text-white px-3 py-3 cursor-pointer mt-6 font-bold rounded-xl w-full lg:w-[10em] text-center"
              onClick={() => {
                setShowLogin(false);
                setIsLoggedIn(true);
              }}
            >
              Get Started
            </div>
            <div className="text-xs z-[1000] mt-5">
              Dont have an account?{" "}
              <span
                className="text-primaryCyan hover:text-primaryDarkViolet cursor-pointer"
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                }}
              >
                Sign Up!
              </span>
            </div>
            <img
              src={BannerImage}
              alt=""
              className="lg:opacity-100 opacity-30 absolute z-0 right-[-30px] h-[50%]"
            />
            <div
              className="absolute top-10 right-10 cursor-pointer"
              onClick={() => {
                setShowLogin(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>

            <img src={Logo} alt="" className="absolute top-10 left-10" />
          </div>
        </div>
      )}
      {showSignup && (
        <div className="fixed h-screen w-screen flex justify-center items-center bg-[#00000050] top-0 left-0 z-[10000]">
          <div className="h-[60%] relative overflow-hidden w-[90%] lg:w-[50%] bg-white rounded-xl flex flex-col justify-center items-start px-10">
            <div className="font-bold z-[1000] mb-5 mt-10 text-primaryDarkViolet text-2xl">
              Welcome!
            </div>
            <input
              type="text"
              placeholder="Enter username"
              className="h-[3rem] w-full lg:w-[50%] z-[1000] mb-2 rounded-lg bg-primaryDarkViolet text-neutralGrayishViolet px-3 lg:px-10 placeholder-neutralGrayishViolet"
            />
            <input
              type="email"
              placeholder="Enter email id"
              className="h-[3rem] w-full lg:w-[50%] z-[1000] mb-2 rounded-lg bg-primaryDarkViolet text-neutralGrayishViolet px-3 lg:px-10 placeholder-neutralGrayishViolet"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="h-[3rem] w-full lg:w-[50%] z-[1000] rounded-lg bg-primaryDarkViolet text-neutralGrayishViolet px-3 lg:px-10 placeholder-neutralGrayishViolet"
            />
            <div
              className="bg-primaryCyan z-[1000] text-white px-3 py-3 cursor-pointer mt-3 font-bold rounded-xl w-full lg:w-[10em] text-center"
              onClick={() => {
                setShowSignup(false);
                setIsLoggedIn(true);
              }}
            >
              Get Started
            </div>
            <div className="text-xs z-[1000] mt-2">
              Already have an account?{" "}
              <span
                className="text-primaryCyan  hover:text-primaryDarkViolet cursor-pointer"
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                }}
              >
                Sign In!
              </span>
            </div>
            <img
              src={BannerImage}
              alt=""
              className="lg:opacity-100 opacity-30 absolute z-0 right-[-30px] h-[50%]"
            />
            <div
              className="absolute top-10 right-10 cursor-pointer"
              onClick={() => {
                setShowSignup(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
            <img src={Logo} alt="" className="absolute top-10 left-10" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

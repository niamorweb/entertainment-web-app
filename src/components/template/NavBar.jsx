import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({ userConnected, setUserConnected }) {
  const [showAccountNav, setShowAccountNav] = useState(false);

  const handleNavAccount = () => {
    setShowAccountNav(!showAccountNav);
  };

  const handleLogout = () => {
    setUserConnected(false);
  };

  return (
    <section
      id="navbar"
      className=" shadow-md z-20 fixed left-4 right-4 h-fit bottom-4 md:top-4 md:h-auto md:right-auto  "
    >
      <div className="py-8 px-6 rounded-xl shadow-xl  bg-colorSemiDarkBlue  flex flex-row items-center justify-between w-full md:flex-col md:h-full">
        <div className="logo h-fit">
          <NavLink to="/">
            <img className="w-6 h-fit " src="../../assets/logo.svg" alt="" />
          </NavLink>
        </div>
        <nav className="nav-pages h-fit flex gap-8 items-center md:flex-col md:w-fit ">
          <NavLink to="/" activeclassname="active">
            {" "}
            <svg
              className="w-6 h-fit "
              width="100"
              height="100"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                fill="#5A698F"
              />
            </svg>
          </NavLink>
          <NavLink to="/movies" activeclassname="active">
            <svg
              className="w-6 h-fit"
              width="100"
              height="100"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                fill="#5A698F"
              />
            </svg>
          </NavLink>
          <NavLink to="/series">
            <svg
              className="w-6 h-fit"
              width="100"
              height="100"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
                fill="#5A698F"
              />
            </svg>
          </NavLink>
          {userConnected ? (
            <NavLink to="/bookmarks">
              <svg
                className="w-6 h-fit"
                width="100"
                height="100"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
                  fill="#5A698F"
                />
              </svg>
            </NavLink>
          ) : null}
        </nav>
        {/* <NavLink to="/account" activeclassname="active"> */}
        <div className=" h-fit relative">
          <img
            className="w-6 h-fit cursor-pointer"
            onClick={() => handleNavAccount()}
            src="../../assets/user.png"
            alt=""
          />
          {showAccountNav ? (
            userConnected ? (
              <div className="account_box absolute bg-red-500 text-white font-semibold px-3 py-1 rounded-md -top-[3rem] right-0 md:top-0 md:-right-[6rem]">
                <button onClick={() => handleLogout()}>Logout</button>{" "}
              </div>
            ) : (
              <div className="account_box absolute flex gap-2 md:flex-col font-semibold -top-[3rem] right-0 md:-top-[1rem] md:-right-[6rem]">
                <NavLink to="/auth">
                  <button className=" bg-red-500 text-white px-3 py-1  rounded-md">
                    Login
                  </button>{" "}
                </NavLink>
                <NavLink to="/sign-up">
                  <button className=" bg-red-500 text-white px-3 py-1 whitespace-nowrap rounded-md">
                    Sign Up
                  </button>
                </NavLink>
              </div>
            )
          ) : null}
        </div>
      </div>
      {/* </NavLink> */}
    </section>
  );
}

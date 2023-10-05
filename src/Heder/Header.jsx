import React from "react";
import { bgHeader, bgMobile } from "../assets";

const Header = () => {
  return (
    <>
      <header className="w-full  bg-[--bg-header]  overflow-hidden relative z-10">
        <img src={bgHeader} className="w-full h-52 md:hidden" alt="" />
        <img src={bgMobile} className="w-full  hidden md:block md:h-44" alt="" />
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="logo" />
      <button>Get started </button>
      {/* TODO: Add arrow image in button ^^ */}

      
    </div>
  );
};

export default Navbar;

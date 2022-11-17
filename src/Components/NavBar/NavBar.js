import React from "react";
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
const NavBar = () => {
  return (
    <nav>
      <div className="NavItems">
        <div className="Less">
          <FaLessThan />
        </div>
        <div className="More">
          <FaGreaterThan />
        </div>
      </div>
      <div className="Profile">
        <img src="./Images/Daily.png" alt="fff" />
        <h4 className="user">Myth</h4>
      </div>
    </nav>
  );
};

export default NavBar;

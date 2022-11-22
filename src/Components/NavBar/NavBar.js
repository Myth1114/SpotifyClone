import React from "react";
import {IoMdNotificationsOutline,IoIosTimer} from 'react-icons/io'
import {CiSettings} from 'react-icons/ci'
const NavBar = () => {
  return (
    <nav>
      <div className="Profile">
        <img src="./Images/Daily.png" alt="fff" />
        <span className="User">Mythlesh</span>
      </div>
      <div className="NavIcons">
       <span><IoMdNotificationsOutline/></span>
       <span><IoIosTimer/></span>
       <span><CiSettings/></span>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { AiOutlineHome ,AiOutlineSearch} from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";

import "./MobileFooter.css";
const MobileFooter = () => {
  return (
    <div className="MobileFooter">
      <div className="Footer">
        <div className="Contents">
          <span className="Icon">
            <AiOutlineHome />
          </span>
          <span className="Title">Home</span>
        </div>
        <div className="Contents">
          <span className="Icon">
            <AiOutlineSearch />
          </span>
          <span className="Title">Search</span>
        </div>
        <div className="Contents">
          <span className="Icon">
            <BiLibrary />
          </span>
          <span className="Title">Library</span>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;

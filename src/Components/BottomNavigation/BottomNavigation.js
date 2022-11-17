import React from "react";
import "./BottomNavigation.css";

import { AiOutlineHeart, AiOutlineAlignCenter ,AiOutlineExpandAlt } from "react-icons/ai";
import { BiShuffle} from "react-icons/bi";
import {ImNext2, ImPrevious2} from 'react-icons/im'
import { FaPlayCircle } from "react-icons/fa";
import { RiRepeat2Fill } from "react-icons/ri";
import { TbMicrophone2,TbDevices2 } from "react-icons/tb";
import { BsFillVolumeUpFill } from "react-icons/bs";

const BottomNavigation = () => {
  return (
    <footer>
      <div className="MusicPlayer">
        <div className="LeftBox">
          <img src="/Images/1.png" alt="jj" />
          <div className="SongName">
            <h4>Timi vayera(Samir Shrestha)</h4>
            <small>Samir Shrestha</small>
          </div>
          <span className="Icon">
            <AiOutlineHeart />
          </span>
        </div>
        <div className="MiddleBox">
          <div className="MusicBottons">
            <span className="Icon">
              <BiShuffle />
            </span>
            <span className="Icon">
              <ImPrevious2 />
            </span>
            <span className="Icon Play">
              <FaPlayCircle />
            </span>
            <span className="Icon">
              <ImNext2 />
            </span>
            <span className="Icon">
              <RiRepeat2Fill />
            </span>
          </div>
          <div className="Slider">
            <progress className="ProgressBar" value="70" max="100">
              70%
            </progress>
          </div>
        </div>
        <div className="RightBox">
          <span className="RightIcon">
            <TbMicrophone2 />
          </span>
          <span className="RightIcon">
            <AiOutlineAlignCenter />
          </span>
          <span className="RightIcon">
            <TbDevices2 />
          </span>
          <span className="RightIcon">
            <BsFillVolumeUpFill />
          </span>
          <span>
            <progress className="ProgressBar2" value="70" max="100">
              70%
            </progress>
          </span>
          <span className="RightIcon">
            <AiOutlineExpandAlt />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default BottomNavigation;

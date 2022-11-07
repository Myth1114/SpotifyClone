import React from "react";
import "./BottomNavigation.css";

import { AiOutlineHeart } from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";
import { BsFillPlayFill } from "react-icons/bs";
import { RiRepeat2Fill } from "react-icons/ri";
import { TbMicrophone2 } from "react-icons/tb";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { TbDevices2 } from "react-icons/tb";
import { AiOutlineExpandAlt } from "react-icons/ai";
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
              <GiPreviousButton />
            </span>
            <span className="Icon">
              <BsFillPlayFill />
            </span>
            <span className="Icon">
              <GiNextButton />
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
          <span>
            <TbMicrophone2 />
          </span>
          <span>
            <AiOutlineAlignCenter />
          </span>
          <span>
            <TbDevices2 />
          </span>
          <span>
            <BsFillVolumeUpFill />
          </span>
          <span>
            <progress value="70" max="100">
              70%
            </progress>
          </span>
          <span>
            <AiOutlineExpandAlt />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default BottomNavigation;

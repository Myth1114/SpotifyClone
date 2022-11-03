import React from "react";

import SideBar from "../Components/Sidebar/SideBar";
import RecentPlaylist from "../Components/RecentPlaylist/RecentPlaylist";
import MixesPlaylist from "../Components/MixesPlaylist/MixesPlaylist";
import { collection } from "../Data/collection";
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
import { GoPlay } from "react-icons/go";
const LandingPage = () => {
  return (
    <section className="LandingPage">
      <SideBar/>
      <div className="Main">
        <div className="NavbarPlaylist">
          <nav>
            <div className="NavItems">
              <div className="Less"><FaLessThan/></div>
              <div className="More"><FaGreaterThan/></div>
            </div>
            <div className="Profile">
              <img src="./Images/Daily.png" alt="fff"/>
              <h4 className="user">Myth</h4>
            </div>
          </nav>
          <div className="Playlist">
            <div className="DailyMixes">
              <h2>Good Evening</h2>
              <div className="Container">
              {collection.map((el)=>{
                return (
                  <div className="Box">
                    <img src={el.img} alt="ww"/>
                    <span className="Back"></span>
                    <span className="Title">{el.name}</span>
                    <div className="FirstButton"><GoPlay fill="#1ed760" size={50}/></div>
                  </div>                  
                )
              })}
               </div>
            </div>
          </div>
          <RecentPlaylist/>
          <MixesPlaylist/>
        </div>
       
      </div>
    </section>
  );
};

export default LandingPage;

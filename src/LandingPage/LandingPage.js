import React from "react";
import {FaGreaterThan, FaLessThan} from 'react-icons/fa'
import SideBar from "../Components/Sidebar/SideBar";
import CardComponent from "../Components/CardComponent/CardComponent";
import { GoPlay } from "react-icons/go";
import { recent } from "../Data/recent";
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
              {recent.map((el)=>{
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
          <CardComponent/>
        </div>
       
      </div>
    </section>
  );
};

export default LandingPage;

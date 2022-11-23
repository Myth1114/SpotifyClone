import React from "react";

import SideBar from "../Components/Sidebar/SideBar";
import NavBar from "../Components/NavBar/NavBar";
import RecentPlaylist from "../Components/RecentPlaylist/RecentPlaylist";
import MixesPlaylist from "../Components/MixesPlaylist/MixesPlaylist";
import { collection } from "../Data/collection";
import { GoPlay } from "react-icons/go";

const LandingPage = () => {
  const currDate = new Date().getHours();
  console.log(currDate);
  return (
    <section className="LandingPage">
      <SideBar />
      <div className="Main">
        <NavBar />
        <div className="NavbarPlaylist">
          <div className="Playlist">
            <div className="DailyMixes">
              {/* {currDate >=12 && currDate <=18 ? <h2>Good Afternoon</h2> : <h2>Good Morning</h2> } */}
              {(() => {
                if (currDate < 12) {
                  return <h2>Good Morning</h2>;
                } else if (currDate >= 12 && currDate <= 16) {
                  return <h2>Good Afternoon</h2>;
                } else {
                  return <h2>Good Evening</h2>;
                }
              })()}
              <div className="Container">
                {collection.map((el) => {
                  return (
                    <div className="Box">
                      <img src={el.img} alt="ww" />
                      <span className="Back"></span>
                      <span className="Title">{el.name}</span>
                      <div className="FirstButton">
                        <GoPlay fill="#1ed760" size={50} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <RecentPlaylist />
          <MixesPlaylist />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

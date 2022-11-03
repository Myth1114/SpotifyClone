import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import './Sidebar.css'
const SideBar = () => {
  return (
        <div className="Sidebar">
          <div className="Spotify">
            <img src="/Images/spotify.png" alt="logo" />
            <span className="Heading">Spotify</span>
          </div>
          <div className="SidebarLists">
            <div className="sidebar-list">
              <div className="icon">
                <GrHomeRounded fill="#fff" size={20} />
              </div>
              <span className="name">Home</span>
            </div>
            <div className="sidebar-list">
              <div className="icon">
                <BsSearch fill="#fff" size={17} />
              </div>
              <span className="name">Search</span>
            </div>
            <div className="sidebar-list">
              <div className="icon">
                <BiLibrary fill="#fff" size={20} />
              </div>
              <span className="name">Library</span>
            </div>
          </div>
        </div>
    
  )
}

export default SideBar
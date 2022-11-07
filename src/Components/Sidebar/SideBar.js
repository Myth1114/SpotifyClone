import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import "./Sidebar.css";
const SideBar = () => {
  return (
    <div className="Sidebar">
      <div className="Spotify">
        <img src="/Images/spotify.png" alt="logo" />
        <span className="Heading">Spotify</span>
      </div>
      <div className="SidebarLists">
        <div className="sidebar-list">
          <span className="icon">
            <GrHomeRounded fill="#fff" />
          </span>
          <span className="name">Home</span>
        </div>
        <div className="sidebar-list">
          <span className="icon">
            <BsSearch />
          </span>
          <span className="name">Search</span>
        </div>
        <div className="sidebar-list">
          <span className="icon">
            <BiLibrary />
          </span>
          <span className="name">Library</span>
        </div>
        <div className="sidebar-list gap">
          <span className="icon Heart">
            <AiOutlineHeart />
          </span>
          <span className="name">Liked Songs</span>
        </div>
        <div className="sidebar-list">
          <span className="icon Bookmark">
            <BsFillBookmarkCheckFill />
          </span>
          <span className="name">Your Episodes</span>
        </div>
        <div className="sidebar-list">
          <span className="icon Playlist">
            <AiOutlinePlus />
          </span>
          <span className="name">Create Playlist</span>
        </div>
      </div>
      <div className="SideScrollBar">
        <ul>
          <li>2000s Mix</li>
          <li>2010s Mix</li>
          <li>Beast Mode</li>
          <li>Workout</li>
          <li>Today's Top Hits</li>
          <li>Happy Mood</li>
          <li>Sad Hour</li>
          <li>Travel Songs</li>
          <li>Bollywood Mush</li>
          <li>Best of Bruno Mars</li>
          <li>Atif Aslam's Mix</li>
          <li>My Playlist</li>
          <li>Liked Songs</li>
          <li>Party Hits</li>
          <li>Viral Hits</li>
          <li>Nepali Hits Songs Collection</li>
          <li>Soft Pop Hits</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

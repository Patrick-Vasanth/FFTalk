import React from "react";
import Search from "./Search";
import NavBar from "./NavBar";
import NavBar2 from "./NavBar2";
import SideBar from "./SideBar";
import Activity from "./Activity";
import Settings from "./Settings";
import Post from "./Post";
import "./Assest/Patrick.css";

export default function HomePage() {
  return (
    <div className="mainHome-p">
      <div className="homeMain-p">
        <div className="mainSideBar-p">
          <SideBar />
        </div>
        <div className="homeFlex-p">
          <div className="mainSearch">
            <Search />
          </div>
          <div className="mainNavBar-p">
            <NavBar />
          </div>
          <div className="mainNavBar2-p">
            <NavBar2 />
          </div>
          <div className="mainActivity-p">
            <Activity />
            <div className="mainPost-p">
              <Post />
            </div>
          </div>
          <div className="mainSettings-p">
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
}

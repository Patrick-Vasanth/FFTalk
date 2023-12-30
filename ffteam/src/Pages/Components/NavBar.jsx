import React from "react";
import "./Assest/Patrick.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

export default function NavBar() {
  return (
    <div className="navBar-p">
      <div className="navIcon1-p">
        <HomeOutlinedIcon className="Navicon-p" />
      </div>
      <div className="navIcon2-p">
        <SmartDisplayOutlinedIcon className="Navicon-p" />
      </div>
      <div className="navIcon3-p">
        <PeopleAltOutlinedIcon className="Navicon-p" />
      </div>
    </div>
  );
}

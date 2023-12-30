import React from "react";
import Profile from "../Images/card-2.jpg";
import "./Assest/Patrick.css";

export default function SideBar() {
  return (
    <div className="sideBar-p">
      <div className="innerRow-p">
        <h3>Friends</h3>
        <div className="sideRow1-p">
          <img src={Profile} alt="profile" />
          <div className="subrow1-p">
            <h4>Jacob Jones</h4>
            <h6>@javobjones</h6>
          </div>
        </div>
        <div className="sideRow2-p">
          <img src={Profile} alt="profile" />
          <div className="subrow2-p">
            <h4>Jacob Jones</h4>
            <h6>@javobjones</h6>
          </div>
        </div>
        <div className="sideRow3-p">
          <img src={Profile} alt="profile" />
          <div className="subrow3-p">
            <h4>Jacob Jones</h4>
            <h6>@javobjones</h6>
          </div>
        </div>
        <div className="sideRow4-p">
          <img src={Profile} alt="profile" />
          <div className="subrow4-p">
            <h4>Jacob Jones</h4>
            <h6>@javobjones</h6>
          </div>
        </div>
        <button className="butn">Show More</button>
      </div>
    </div>
  );
}

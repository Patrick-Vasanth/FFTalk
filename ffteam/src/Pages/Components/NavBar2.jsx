import React from "react";
import "./Assest/Patrick.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import Profile from "../Images/card-2.jpg";

export default function NavBar2() {
  return (
    <div className="navBar2-p">
      <div className="nav2Icon1-p">
        <NotificationsNoneOutlinedIcon className="Navicon2-p" />
      </div>
      <div className="nav2Icon2-p">
        <ChatBubbleOutlineOutlinedIcon className="Navicon2-p" />
      </div>
      <div className="profileImg-p">
        <img src={Profile} alt="profile" />
      </div>
    </div>
  );
}

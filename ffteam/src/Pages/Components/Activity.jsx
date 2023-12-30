import React from "react";
import "./Assest/Patrick.css";
import Profile from "../Images/card-2.jpg";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

export default function Activity() {
  return (
    <div className="recentActivity-p">
      <h3>Update your activity</h3>
      <div className="updateStatus-p">
        <div className="statusImg-p">
          <img src={Profile} alt="profile" />
        </div>
        <input type="text" placeholder="How about your feeling ?" />
      </div>
      <div className="uploadPhoto-p">
        <div className="uploadGrp-p">
          <div className="galleryIcon-p">
            <CollectionsOutlinedIcon className="gIcon-p" />
          </div>
          <div className="uploadBtn-p">
            <button className="photoUploadBtn-p">Photos/Videos</button>
          </div>
        </div>
        <div className="postBtnGrp-p">
          <div className="uploadIcon-p">
            <PostAddOutlinedIcon className="pIcon-p" />
          </div>
          <div className="postBtn-p">
            <button className="postBtn-p">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}

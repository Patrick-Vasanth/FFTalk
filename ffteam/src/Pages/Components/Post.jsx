import React from "react";
import Profile from "../Images/card-2.jpg";
import "./Assest/Patrick.css";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MobileScreenShareOutlinedIcon from "@mui/icons-material/MobileScreenShareOutlined";
import { useState } from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

export default function Post() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="postFeed-p">
      <div className="innerPost-p">
        <h2>For You</h2>
        <div className="postHeader-p">
          <div className="header1-p">
            <div className="profileIcon-p">
              <img src={Profile} alt="profile" />
            </div>
            <div className="userName-p">
              <h3>TamizhChemmal</h3>
              <h5>@tamizhsangeetha</h5>
            </div>
          </div>
          <div className="header2-p">
            <div className="followBtn-p">
              <div className="follow-p">
                <div className="addBtn-p">
                  {isFollowing ? (
                    <CheckOutlinedIcon
                      className="addButn-p"
                      onClick={handleFollowClick}
                    />
                  ) : (
                    <AddOutlinedIcon className="addButn-p" />
                  )}
                </div>
                <button className="followButn-p" onClick={handleFollowClick}>
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
              <div className="moreBtn-p">
                <MoreVertOutlinedIcon className="moreIcon-p" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mediaPost-p">
        <img src={Profile} alt="post" />
      </div>
      <div className="socialInteractions-p">
        <div className="likes-p">
          <FavoriteBorderOutlinedIcon
            className={`likeIcon-p ${liked ? "liked" : ""}`}
            onClick={handleClick}
          />
          <div className="innerLike-p">
            <h4>205</h4>
            <span>Like</span>
          </div>
        </div>
        <div className="comments-p">
          <ChatBubbleOutlineOutlinedIcon className="commentIcon-p" />
          <div className="innerComment-p">
            <h4>1356</h4>
            <span>Comment</span>
          </div>
        </div>
        <div className="share-p">
          <MobileScreenShareOutlinedIcon className="shareIcon-p" />
          <div className="innerShare-p">
            <h4>103</h4>
            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  );
}

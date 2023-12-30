import React from "react";
import "./Assest/Patrick.css";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { useState, useEffect } from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply the dark or light theme based on the state
    const root = document.documentElement;
    const defaultBackgroundColor =
      getComputedStyle(root).getPropertyValue("--default-bg-color");

    const defaultFontColor = getComputedStyle(root).getPropertyValue(
      "--default-font-color"
    );

    root.style.setProperty(
      "--background-color",
      isDarkMode ? "#111111" : defaultBackgroundColor
    );

    root.style.setProperty(
      "--font-color",
      isDarkMode ? "#ffffff" : defaultFontColor
    );
  }, [isDarkMode]);

  const toggleTheme = () => {
    // Toggle the state to switch between dark and light themes
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="settings-p">
      <div className="innerSettings-p">
        <h3>Settings</h3>
        <div className="settings1-p">
          <h5>Account settings</h5>
          <ChevronRightOutlinedIcon className="rightArrow-p" />
        </div>
        <div className="settings2-p">
          <h5>Security</h5>
          <ChevronRightOutlinedIcon className="rightArrow-p" />
        </div>
        <div className="settings3-p">
          <h5>Privacy</h5>
          <ChevronRightOutlinedIcon className="rightArrow-p" />
        </div>
        <div className="settings4-p">
          <h5>Information about you</h5>
          <ChevronRightOutlinedIcon className="rightArrow-p" />
        </div>
        <div className="settings5-p">
          <h5>Notifications</h5>
          <ChevronRightOutlinedIcon className="rightArrow-p" />
        </div>
        <div className="settings6-p">
          <h5>Dark light</h5>
          <div className="theme-toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <div className="signOutBtn-p">
          <div className="signOutIcon-p">
            <LogoutOutlinedIcon className="logoutIcon-p" />
          </div>
          <button>Sign out</button>
        </div>
      </div>
    </div>
  );
}

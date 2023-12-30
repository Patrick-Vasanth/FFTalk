import React from "react";
import "./Assest/Patrick.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Search() {
  return (
    <div className="search-p">
      <div className="searchInput-p">
        <input type="search" id="searchField-p" placeholder="Search" />
        <div className="searchIcon-p">
          <SearchOutlinedIcon className="SIcon-p" />
        </div>
      </div>
    </div>
  );
}

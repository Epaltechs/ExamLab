import React from "react";
import "../styles/searchbar.css";
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from "@mui/material/Button";

const SearchBar = () => {
  return (
    <div className="mainBox">
      <div className="searchbox">
        <div className="search">
          <div className="icon">
            <Button className="searchBtn">
              <img src="/search-normal.png" alt="" width={20} />
            </Button>
          </div>
          <div className="searchInput">
            <input type="text" placeholder="Search anything..." />
          </div>
        </div>

        <div className="notify">
        <Badge badgeContent={4} color="warning">
          <NotificationsNoneIcon color="action" />
        </Badge>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

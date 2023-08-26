import React, { useState, useRef, useEffect } from "react";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Button from "@mui/material/Button";
import logo from "../assets/examLab.png";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = ({ navbar, setNavbar }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const getBound = useRef();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log(windowWidth);
  // console.log(getWidth);
  return (
    <div className="nav-container" id="home" ref={getBound}>
      {windowWidth <= 767 && (
        <div className="account-icon-container">
          <AccountCircleIcon style={{ fontSize: "30px" }} />
        </div>
      )}
      <div className="nav-logo">
        <a href="#home">
          <img className="header-logo" src={logo} alt="" />
        </a>
      </div>
      <div className="navArea" style={{ left: navbar ? "0" : "" }}>
        <ul className="nav-list">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </li>
          <li>
            <a href="#features" className="nav-link">
              Features
            </a>
          </li>
        </ul>
      </div>
      <div className="button-container">
        <button className="button_last">Login</button>
      </div>
      {windowWidth <= 767 && (
        <BarContainer className="bar-container">
          <div className="bar">
            {navbar ? (
              <Button onClick={() => setNavbar(false)}>
                <CloseIcon className="icon" />
              </Button>
            ) : (
              <Button onClick={() => setNavbar(true)}>
                <TableRowsIcon className="icon" />
              </Button>
            )}
          </div>
        </BarContainer>
      )}
    </div>
  );
};

export default Header;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  height: 75px;
  width: 100%;
`;

const AccountIconContainer = styled.div``;
const NavLogoContainer = styled.div`
  margin: 25px 65px;
  display: flex;
  flex-direction: column;
`;

const NavArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
`;
const ListItem = styled.li`
  display: inline;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 10px;
  color: #000;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #f97316;
    color: #fff;
    border: 1px solid #f97316;
    border-radius: 25px;
    padding: 8px 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LastButton = styled.button`
  border: 1px solid #f97316;
  border-radius: 25px;
  color: #f97316;
  cursor: pointer;
  background-color: #fff;
  font-size: 15px;
  padding: 8px 35px;
  margin: 25px 65px;

  &:hover {
    background-color: #f97316;
    color: #fff;
    border-radius: 25px;
    padding: 8px 35px;
  }
`;

const BarContainer = styled.div``;

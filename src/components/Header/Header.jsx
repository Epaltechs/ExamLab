import React, { useState, useRef, useEffect } from "react";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Button from "@mui/material/Button";
import logo from "../../assets/examLab.png";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Container } from "../Banner/StyledBanner";
import { Close } from "@mui/icons-material";
import MobileNavbar from "./MobileNavbar";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleToggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <Box>
        <Container>
          <NavContainer id="home">
            <IconControlBox onClick={handleToggle}>
              {!nav ? (
                <TableRowsIcon style={{ fontSize: "30px" }} />
              ) : (
                <CloseIcon style={{ fontSize: "30px" }} />
              )}
            </IconControlBox>
            <NavLogoContainer>
              <a href="/">
                <Image src={logo} alt="" />
              </a>
            </NavLogoContainer>

            <NavArea>
              <NavList>
                <ListItem>
                  <NavLink href="#home" className="nav-link">
                    Home
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="#about-us" className="nav-link">
                    About Us
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="#features" className="nav-link">
                    Features
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="#pricing" className="nav-link">
                    Pricing
                  </NavLink>
                </ListItem>
              </NavList>
            </NavArea>
            <ButtonContainer>
              <LastButton>Login</LastButton>
            </ButtonContainer>
            <AccountIconContainer AccountIconContainer>
              <AccountCircleIcon style={{ fontSize: "30px" }} />
            </AccountIconContainer>
          </NavContainer>
        </Container>
        {!nav ? <div style={{ display: "none" }} /> : <MobileNavbar />}
      </Box>

      <Outlet />
    </>
  );
};

export default Header;
const Box = styled.div`
  position: fixed;
  width: 100%;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  height: 100px;
  padding: 10px;
  z-index: 100;
`;
const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 70px;
  align-items: center;

  @media (min-width: 425px) {
    gap: 100px;
  }

  @media (min-width: 768px) {
    gap: 150px;
  }

  @media (min-width: 1440px) {
    gap: 200px;
  }

  height: 75px;
`;

const AccountIconContainer = styled.div`
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;
const NavLogoContainer = styled.div``;
const Image = styled.img`
  width: 100px;
  @media (min-width: 1024px) {
    width: 165px;
  }
`;

const NavArea = styled.div`
  display: none;
  flex-direction: row;
  gap: 2rem;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
    border-bottom: solid #f97316 3px;
    width: 2px;
  }
`;

const ButtonContainer = styled.div`
  display: none;
  flex-direction: row;
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const LastButton = styled.button`
  border: 1px solid #f97316;
  border-radius: 25px;
  color: #f97316;
  cursor: pointer;
  background-color: #fff;
  font-size: 15px;
  width: 157px;
  height: 40px;
  &:hover {
    background-color: #f97316;
    color: #fff;
    border-radius: 25px;
    padding: 8px 35px;
  }
`;

const IconControlBox = styled.div`
  display: flex;

  @media (min-width: 1024px) {
    display: none;
  }
`;

import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavDrawer = () => {
  const [drawer, setDrawer] = useState(false);

  const handleDrawerClose = () => {
    setDrawer(false);
  };
  return (
    <>
      <Drawer open={drawer} onClose={handleDrawerClose}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                <a href="#home" className="nav-link">
                  Home
                </a>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                {" "}
                <a href="#about" className="nav-link">
                  About
                </a>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                {" "}
                <a href="#features" className="nav-link">
                  Features
                </a>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>
                {" "}
                <a href="#pricing" className="nav-link">
                  Pricing
                </a>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setDrawer(!drawer)}
        sx={{
          color: "#fff",
          fontSize: "40px",
          marginLeft: "auto",
        }}
      >
        <MenuIcon style={{ color: "#000" }} />
      </IconButton>
    </>
  );
};

export default NavDrawer;

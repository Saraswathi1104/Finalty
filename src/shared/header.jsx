import React, { useState } from "react";
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import image from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { ROUTH_PATH } from "../Router/RouthPath";
import FileUploadIcon from '@mui/icons-material/FileUploadTwoTone';
const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:700px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    setDrawerOpen(false); // Close drawer on navigation
  };

  const navItems = [
    { label: "Home", path: ROUTH_PATH.HOME },
    { label: "About", path: ROUTH_PATH.ABOUT },
    { label: "Services", path: ROUTH_PATH.SERVICES },
    { label: "Key Peoples", path: ROUTH_PATH.KEY_PEOPLE },
    { label: "Contact", path: ROUTH_PATH.CONTACT },
    { label:"Add file",path:ROUTH_PATH.ADDFILE}
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#E6E6E6",
          paddingY: "8px",
          color: "black",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box display="flex" alignItems="center">
            <img src={image} alt="logo" width="50" style={{ marginRight: 10 }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Fi<span style={{ color: "red" }}>Na</span>LTY
              </Typography>
              <Typography variant="body2" fontSize="12px">
                Wealth in Every Brick
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          {!isMobile ? (
            <Stack direction="row" spacing={4} alignItems="center">
              {navItems.map((item) => (
                 <Typography
                 key={item.label}
                 sx={{
                   fontWeight: "bold",
                   cursor: "pointer",
                   display: "flex",
                   alignItems: "center",
                   gap: 1,
                   "&:hover": { color: "#E7492C" },
                 }}
                 onClick={() => handleNav(item.path)}
               >
                 {item.label}
                 {item.label === "Add file" && <FileUploadIcon   />}
               </Typography>
              ))}
            </Stack>
          ) : (
            // Mobile Menu Icon
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 250 }}>
          {navItems.map((item) => (
            <ListItem button key={item.label} onClick={() => handleNav(item.path)}>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;

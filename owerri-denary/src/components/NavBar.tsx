import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Added Close Icon
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/cyon-logo.jpeg";

const navItems = ["Home", "About", "Features", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Defining a consistent green
  const themeGreen = "#008000"; 

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        width: { xs: "100vw", sm: 350 },
        height: "100%",
        backgroundColor: themeGreen, // Solid green background
        color: "white",
        display: "flex",
        flexDirection: "column",
        pt: 2,
      }}
    >
      {/* Close Button at the top right of Drawer */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Mobile Logo */}
      <Box
        component={Link}
        to="/"
        onClick={handleDrawerToggle}
        sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ height: 60, borderRadius: '8px', border: '2px solid white' }}
        />
      </Box>

      <List sx={{ width: "100%", textAlign: "center" }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item}
            component={Link}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            onClick={handleDrawerToggle}
            sx={{
              py: 2,
              justifyContent: "center",
              color: "white",
              mx: 2,
              my: 1,
              borderRadius: '10px',
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <ListItemText
              primary={
                <Typography fontSize="1.4rem" fontWeight={700} sx={{ textTransform: 'uppercase' }}>
                  {item}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={4}
        sx={{
          // Use !important to override default MUI colors if they are conflicting
          backgroundColor: `${themeGreen} !important`,
          backgroundImage: "none !important", 
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ height: 45, borderRadius: '4px' }}
            />
          </Box>

          {/* Desktop Links */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                sx={{
                  color: "white",
                  ml: 3,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Spacer */}
      <Toolbar />

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { 
            backgroundColor: themeGreen,
            width: { xs: "100%", sm: 350 }
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;